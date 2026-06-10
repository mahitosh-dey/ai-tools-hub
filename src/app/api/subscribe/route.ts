import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
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
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const data = await res.json();
  return NextResponse.json({ error: data?.message ?? "Subscription failed" }, { status: res.status });
}
