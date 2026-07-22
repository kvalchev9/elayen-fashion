import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const adminPassword =
    process.env.ADMIN_PASSWORD || "123456";

  if (body.password !== adminPassword) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      }
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_auth", "true", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  return response;
}