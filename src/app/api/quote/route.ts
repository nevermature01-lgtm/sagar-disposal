
// This route is no longer used. Form submission is handled by FormSubmit.co.
export async function POST() {
  return new Response("This endpoint is disabled. Use client-side form submission.", { status: 410 });
}
