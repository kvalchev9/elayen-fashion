import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;


  await prisma.product.delete({

    where: {
      id: Number(id),
    },

  });



  return NextResponse.json({

    success: true,

  });

}






export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  const { id } = await params;


  const body = await request.json();




  const product = await prisma.product.update({

    where: {

      id: Number(id),

    },


    data: {


      name: body.name,


      price: Number(body.price),


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


}