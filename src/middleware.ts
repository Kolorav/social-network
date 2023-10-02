import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/static") ||
    request.nextUrl.pathname.startsWith("/auth") ||
    request.nextUrl.pathname.startsWith("/background.jpg") ||
    request.nextUrl.pathname.startsWith("/profile")
  ) {
    return NextResponse.next();
  }

  const auth_token: any = request.cookies.get("auth-token") ?? null;
  const auth_url = new URL("/auth", request.url);

  if (!auth_token) {
    return NextResponse.redirect(auth_url);
  } else {
    try {
      const data: any = jwt.verify(auth_token.value, process.env.JWT_SECRET!);
      console.log(data);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(auth_url);
    }
  }
}
