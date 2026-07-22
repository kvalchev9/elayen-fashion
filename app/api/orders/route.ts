import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  console.log("API ORDER HIT");


  try {

    const body = await req.json();


    console.log("ORDER DATA:", body);




    const order = await prisma.order.create({

      data: {

        name: body.name,

        email: body.email || "",

        phone: body.phone,


        city: body.city,

        address: body.address,


        courier: body.courier || "",

        deliveryType: body.deliveryType || "",


        products: JSON.stringify(body.products),


        total: Number(body.total),

      },

    });





    return NextResponse.json({

      success: true,

      order,

    });


  } catch (error) {


    console.error("ORDER ERROR:", error);



    return NextResponse.json(

      {
        success: false,
        error: "Database error",
      },

      {
        status: 500,
      }

    );

  }

}