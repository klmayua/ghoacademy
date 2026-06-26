// GHO Academy — Auth Handler
// Static stub. Requires server mode for production.
// See README.md for full implementation guide.
export const prerender = true;
export function GET() {
  return new Response(JSON.stringify({ info: "POST handler — requires server mode. See README." }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
