import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


function checkAdmin(request: Request) {

  const cookie = request.headers.get("cookie");

  return cookie?.includes("admin_auth=");

}




export async function POST(request: Request) {


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



  try {

    const body = await request.json();



    const product = await prisma.product.create({

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
        error: "Database error",
      },

      {
        status: 500,
      }

    );


  }

}





export async function GET() {


  const products = await prisma.product.findMany({

    orderBy: {

      createdAt: "desc",

    },

  });



  return NextResponse.json(products);

}