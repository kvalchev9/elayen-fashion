import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const adminAuth = request.cookies.get("admin_auth");

  // позволяваме login страницата
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // защитаваме останалия admin
  if (!adminAuth && pathname.startsWith("/admin")) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};