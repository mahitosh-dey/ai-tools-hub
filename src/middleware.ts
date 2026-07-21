import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Block common malicious scrapers and headless bots that inflate GA numbers
// with zero engagement. Legitimate crawlers (Google, Bing, DuckDuckBot, etc.)
// are explicitly allowed.
const BLOCKED_UA_PATTERNS = [
  /HeadlessChrome/i,
  /PhantomJS/i,
  /SlurpBot/i,
  /Bytespider/i,
  /Baiduspider/i,
  /MJ12bot/i,
  /AhrefsBot/i,
  /SemrushBot/i,
  /DotBot/i,
  /PetalBot/i,
  /YandexBot/i,
  /SeznamBot/i,
  /python-requests/i,
  /Go-http-client/i,
  /Scrapy/i,
  /curl\//i,
  /wget/i,
];

const ALLOWED_BOT_PATTERNS = [
  /Googlebot/i,
  /Bingbot/i,
  /DuckDuckBot/i,
  /Applebot/i,
  /FacebookExternalHit/i,
  /Twitterbot/i,
  /LinkedInBot/i,
  /Slackbot/i,
  /WhatsApp/i,
  /Discordbot/i,
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  // Always allow legitimate crawlers
  if (ALLOWED_BOT_PATTERNS.some((rx) => rx.test(ua))) {
    return NextResponse.next();
  }

  // Block bots that inflate metrics without engagement
  if (BLOCKED_UA_PATTERNS.some((rx) => rx.test(ua))) {
    return new NextResponse("Not authorized", { status: 403 });
  }

  // Block empty user-agent (typical of naive scrapers)
  if (!ua.trim()) {
    return new NextResponse("Not authorized", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets and API routes
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ads.txt|images/|.*\\.(?:png|jpg|jpeg|webp|svg|ico|css|js)$).*)",
  ],
};
