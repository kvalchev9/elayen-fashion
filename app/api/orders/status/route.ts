import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order = await prisma.order.update({
      where: {
        id: body.id,
      },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}