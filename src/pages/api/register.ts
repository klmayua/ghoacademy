// GHO Academy — Registration Handler
// This is a static export stub. In production, implement with:
// - Astro output: 'server' or 'hybrid' mode
// - Adapter: @astrojs/node or @astrojs/vercel
// - Stripe Checkout Session creation
// - Database insert (Supabase recommended)
// - Welcome email via Resend
//
// See README.md for full implementation guide.
export const prerender = true;
export function GET() {
  return new Response(JSON.stringify({ info: "POST handler — requires server mode. See README." }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
