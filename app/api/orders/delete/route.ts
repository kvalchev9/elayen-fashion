import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const order = await prisma.order.findUnique({

      where: {
        id: Number(body.id),
      },

    });



    if (!order) {

      return NextResponse.json(
        {
          success: false,
          error: "Order not found",
        },
        {
          status: 404,
        }
      );

    }



    const products = JSON.parse(order.products);



    for (const item of products) {

      await prisma.product.update({

        where: {
          id: item.id,
        },

        data: {

          stock: {

            increment: item.quantity,

          },

        },

      });

    }




    await prisma.order.delete({

      where: {

        id: order.id,

      },

    });




    return NextResponse.json({

      success: true,

    });



  } catch (error) {


    console.error("DELETE ORDER ERROR:", error);



    return NextResponse.json(

      {
        success: false,
        error: "Delete error",
      },

      {
        status: 500,
      }

    );


  }

}