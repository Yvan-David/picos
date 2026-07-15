import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Server-side only. Uses a Google service account with "Viewer" access
// on the GA4 property to query the Analytics Data API.
// Requires: GA4_PROPERTY_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

let client: BetaAnalyticsDataClient | null = null;

export function getClient(): BetaAnalyticsDataClient {
  if (client) return client;

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !rawKey) {
    throw new Error(
      'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY environment variables.'
    );
  }

  // .env files store the key with literal "\n" sequences — convert them
  // back to real newlines before handing it to the Google client.
  const privateKey = rawKey.replace(/\\n/g, '\n');

  client = new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });

  return client;
}

export function getPropertyId(): string {
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) {
    throw new Error('Missing GA4_PROPERTY_ID environment variable.');
  }
  return `properties/${propertyId}`;
}
