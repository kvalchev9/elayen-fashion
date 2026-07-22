import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



function checkAdmin(request: Request) {

  const cookie = request.headers.get("cookie");

  return cookie?.includes("admin_auth=");

}





export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  if (!checkAdmin(request)) {

    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );

  }



  const { id } = await params;



  try {

    await prisma.product.delete({

      where: {
        id: Number(id),
      },

    });



    return NextResponse.json({

      success: true,

    });



  } catch (error) {


    console.error(error);



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









export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {



  if (!checkAdmin(request)) {

    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );

  }




  const { id } = await params;


  const body = await request.json();





  try {


    const product = await prisma.product.update({

      where: {

        id: Number(id),

      },


      data: {


        name: body.name,


        price: Number(body.price),


        oldPrice: body.oldPrice
          ? Number(body.oldPrice)
          : null,



        category: body.category,


        sizes: body.sizes || "",


        colors: body.colors || "",


        image: body.image,


        description: body.description || "",


      },


    });






    return NextResponse.json({

      success: true,

      product,

    });





  } catch (error) {


    console.error(error);



    return NextResponse.json(

      {
        success: false,
        error: "Update error",
      },

      {
        status: 500,
      }

    );


  }


}