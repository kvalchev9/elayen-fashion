import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

  const cookieStore = await cookies();


  const adminAuth = cookieStore.get("admin_auth");



  const isAdmin =
    adminAuth?.value === process.env.ADMIN_PASSWORD;



  return NextResponse.json({

    isAdmin,

  });

}