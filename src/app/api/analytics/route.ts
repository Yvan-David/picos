import { NextRequest, NextResponse } from 'next/server';
import { getClient, getPropertyId } from '@/lib/ga4';

// Always fetch fresh data — this route is read by an admin dashboard,
// not something we want Next.js to statically cache.
export const dynamic = 'force-dynamic';

const RANGE_DAYS: Record<string, number> = {
  '7d': 7,
  '28d': 28,
  '90d': 90,
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') ?? '28d';
    const days = RANGE_DAYS[range] ?? 28;

    const analyticsDataClient = getClient();
    const property = getPropertyId();
    const dateRanges = [{ startDate: `${days}daysAgo`, endDate: 'today' }];

    // 1. Summary totals for the selected period
    const [summaryReport] = await analyticsDataClient.runReport({
      property,
      dateRanges,
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'engagementRate' },
      ],
    });

    // 2. Click events. GA4 tracks clicks as custom events — adjust the
    // eventName filter below ("click") to match whatever your site's
    // gtag/GTM setup actually names the event.
    const [clicksReport] = await analyticsDataClient.runReport({
      property,
      dateRanges,
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: { value: 'click' },
        },
      },
      metrics: [{ name: 'eventCount' }],
    });

    // 3. Daily trend for the chart
    const [trendReport] = await analyticsDataClient.runReport({
      property,
      dateRanges,
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
      orderBys: [{ dimension: { dimensionName: 'date' } }],
    });

    // 4. Top pages
    const [topPagesReport] = await analyticsDataClient.runReport({
      property,
      dateRanges,
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 5,
    });

    const summaryRow = summaryReport.rows?.[0];
    const metric = (index: number) => Number(summaryRow?.metricValues?.[index]?.value ?? 0);

    const summary = {
      visitors: metric(0),
      newUsers: metric(1),
      sessions: metric(2),
      pageViews: metric(3),
      avgSessionDuration: metric(4),
      engagementRate: metric(5),
      clicks: Number(clicksReport.rows?.[0]?.metricValues?.[0]?.value ?? 0),
    };

    const trend = (trendReport.rows ?? []).map((row) => ({
      date: row.dimensionValues?.[0]?.value ?? '',
      visitors: Number(row.metricValues?.[0]?.value ?? 0),
      pageViews: Number(row.metricValues?.[1]?.value ?? 0),
    }));

    const topPages = (topPagesReport.rows ?? []).map((row) => ({
      path: row.dimensionValues?.[0]?.value ?? '',
      views: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    return NextResponse.json({ summary, trend, topPages, range });
  } catch (error) {
    console.error('GA4 analytics fetch failed:', error);
    return NextResponse.json(
      {
        error:
          'Failed to fetch analytics data. Check that GA4_PROPERTY_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY are set correctly and that the service account has Viewer access on the GA4 property.',
      },
      { status: 500 }
    );
  }
}
