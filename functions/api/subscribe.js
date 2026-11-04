/**
 * Newsletter signup, as a Cloudflare Pages Function.
 *
 * This was src/app/api/subscribe/route.ts. A statically exported Next site has
 * no server to run a route handler on, so it moved here. Pages Functions live
 * outside the Next build entirely: this directory is compiled by Cloudflare,
 * not by `next build`.
 *
 * Written in JavaScript on purpose. The .ts version would need Cloudflare's
 * type package as a dependency, and tsconfig.json globs every .ts file in the
 * repo, so it would also fail the Next type check. A .js file sidesteps both.
 *
 * MAILERLITE_API_KEY has to be set in the Cloudflare Pages project settings
 * (Settings -> Environment variables). It is not read from .env at build time;
 * it arrives on `context.env` at request time.
 */
export async function onRequestPost(context) {
  let email;
  try {
    ({ email } = await context.request.json());
  } catch {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = context.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email }),
  });

  // 200 = existing subscriber, 201 = new subscriber — both are success
  if (res.ok) {
    return Response.json({ success: true }, { status: 200 });
  }

  const data = await res.json().catch(() => null);
  return Response.json(
    { error: data?.message ?? "Subscription failed" },
    { status: res.status }
  );
}
