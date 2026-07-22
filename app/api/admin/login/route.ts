import { NextResponse } from "next/server";


export async function POST(request: Request) {

  const body = await request.json();



  const adminPassword =
    process.env.ADMIN_PASSWORD;



  if (!adminPassword) {

    return NextResponse.json(
      {
        success: false,
        error: "ADMIN_PASSWORD is missing",
      },
      {
        status: 500,
      }
    );

  }




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





  response.cookies.set(
    "admin_auth",
    adminPassword,
    {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    }
  );





  return response;

}