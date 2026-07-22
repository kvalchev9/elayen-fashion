import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  const body = await request.json();


  const product = await prisma.product.create({

    data: {

      name: body.name,

      price: Number(body.price),

      oldPrice: body.oldPrice
        ? Number(body.oldPrice)
        : null,


      stock: Number(body.stock) || 0,


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





export async function GET() {


  const products = await prisma.product.findMany({

    orderBy: {

      createdAt: "desc",

    },

  });



  return NextResponse.json(products);

}