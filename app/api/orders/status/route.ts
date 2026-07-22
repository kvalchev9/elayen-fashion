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




    const newStatus = body.status;





    // ако става Отказана
    // връщаме наличност

    if (
      newStatus === "Отказана" &&
      order.status !== "Отказана"
    ) {


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


    }







    // ако махаме Отказана
    // намаляваме обратно наличността

    if (
      order.status === "Отказана" &&
      newStatus !== "Отказана"
    ) {


      const products = JSON.parse(order.products);



      for (const item of products) {


        await prisma.product.update({

          where: {
            id: item.id,
          },


          data: {

            stock: {

              decrement: item.quantity,

            },

          },

        });


      }


    }








    const updatedOrder = await prisma.order.update({

      where: {

        id: Number(body.id),

      },


      data: {

        status: newStatus,

      },


    });







    return NextResponse.json({

      success: true,

      order: updatedOrder,

    });






  } catch (error) {


    console.error(error);



    return NextResponse.json(

      {
        success: false,
        error: "Status update error",
      },

      {
        status: 500,
      }

    );


  }

}