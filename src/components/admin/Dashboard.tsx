"use client";
import { useEffect, useState } from 'react';
import { Users, MousePointerClick, Eye, Clock, TrendingUp, UserPlus } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import MetricCard from './MetricCard';

type Summary = {
  visitors: number;
  newUsers: number;
  sessions: number;
  pageViews: number;
  avgSessionDuration: number;
  engagementRate: number;
  clicks: number;
};

type TrendPoint = { date: string; visitors: number; pageViews: number };
type TopPage = { path: string; views: number };

type AnalyticsResponse = {
  summary: Summary;
  trend: TrendPoint[];
  topPages: TopPage[];
  range: string;
};

const RANGES = [
  { value: '7d', label: '7 days' },
  { value: '28d', label: '28 days' },
  { value: '90d', label: '90 days' },
];

// GA4 returns dates as "YYYYMMDD"
function formatDate(raw: string) {
  if (raw.length !== 8) return raw;
  return `${raw.slice(4, 6)}/${raw.slice(6, 8)}`;
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}m ${s}s`;
}

export default function Dashboard() {
  const [range, setRange] = useState('28d');
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/analytics?range=${range}`)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) {
          setError(
            'Could not load analytics data. Check the GA4 service account credentials in your server environment.'
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [range]);

  return (
    // min-h uses --nav-height (set in your global CSS to match the fixed
    // navbar's real height) so this section fills the space below it
    // instead of forcing a full extra 100vh on top of the navbar/footer.
    <div className="min-h-[calc(100dvh-var(--nav-height,4rem))] bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl text-gray-900">Site Analytics</h1>
          <p className="text-sm text-gray-500">Data from Google Analytics 4</p>
        </div>
        <div className="flex gap-2">
          {RANGES.map((r) => (
            <button
              key={r.value}
              onClick={() => setRange(r.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                range === r.value
                  ? 'bg-[#b76e79] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      {/* end of page-level bar (was previously a <header>) */}

      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 rounded-xl p-4 mb-6 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-24 rounded-2xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : data ? (
          <>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              <MetricCard
                label="Visitors"
                value={data.summary.visitors.toLocaleString()}
                icon={<Users size={20} />}
              />
              <MetricCard
                label="New Users"
                value={data.summary.newUsers.toLocaleString()}
                icon={<UserPlus size={20} />}
              />
              <MetricCard
                label="Sessions"
                value={data.summary.sessions.toLocaleString()}
                icon={<TrendingUp size={20} />}
              />
              <MetricCard
                label="Page Views"
                value={data.summary.pageViews.toLocaleString()}
                icon={<Eye size={20} />}
              />
              <MetricCard
                label="Clicks"
                value={data.summary.clicks.toLocaleString()}
                icon={<MousePointerClick size={20} />}
              />
              <MetricCard
                label="Avg. Session"
                value={formatDuration(data.summary.avgSessionDuration)}
                icon={<Clock size={20} />}
              />
              <MetricCard
                label="Engagement Rate"
                value={`${(data.summary.engagementRate * 100).toFixed(1)}%`}
                icon={<TrendingUp size={20} />}
              />
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h2 className="text-gray-900 mb-4">Visitors &amp; Page Views</h2>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={data.trend.map((d) => ({ ...d, date: formatDate(d.date) }))}>
                  <defs>
                    <linearGradient id="visitorsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b76e79" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#b76e79" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="pageViewsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e8a0b9" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#e8a0b9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#b76e79"
                    fill="url(#visitorsFill)"
                    strokeWidth={2}
                    name="Visitors"
                  />
                  <Area
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#e8a0b9"
                    fill="url(#pageViewsFill)"
                    strokeWidth={2}
                    name="Page Views"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-gray-900 mb-4">Top Pages</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-2 font-normal">Page</th>
                    <th className="pb-2 font-normal text-right">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {data.topPages.map((p) => (
                    <tr key={p.path} className="border-b border-gray-50 last:border-0">
                      <td className="py-2 text-gray-800">{p.path}</td>
                      <td className="py-2 text-right text-gray-800">{p.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
