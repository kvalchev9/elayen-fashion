import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mail";


export async function POST(req: Request) {

  console.log("API ORDER HIT");


  try {

    const body = await req.json();

    console.log("ORDER DATA:", body);


    const products = body.products;



    // Проверка дали има наличност

    for (const item of products) {

      const product = await prisma.product.findUnique({

        where: {
          id: item.id,
        },

      });


      if (!product) {

        return NextResponse.json(
          {
            success: false,
            error: "Product not found",
          },
          {
            status: 400,
          }
        );

      }



      if (product.stock < item.quantity) {

        return NextResponse.json(
          {
            success: false,
            error: `Няма достатъчна наличност за ${product.name}`,
          },
          {
            status: 400,
          }
        );

      }

    }





    // Създаване на поръчка

    const order = await prisma.order.create({

      data: {

        name: body.name,

        email: body.email || "",

        phone: body.phone,

        city: body.city,

        address: body.address,

        courier: body.courier || "",

        deliveryType: body.deliveryType || "",

        products: JSON.stringify(products),

        total: Number(body.total),

      },

    });






    // Email известие

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "Нова поръчка от ELAYEN",

      html: `

        <h2>Нова поръчка</h2>

        <p><b>Клиент:</b> ${body.name}</p>

        <p><b>Телефон:</b> ${body.phone}</p>

        <p><b>Email:</b> ${body.email || "-"}</p>

        <p><b>Град:</b> ${body.city}</p>

        <p><b>Адрес:</b> ${body.address}</p>


        <h3>Продукти:</h3>

        <pre>
${JSON.stringify(products, null, 2)}
        </pre>


        <h3>Общо: ${body.total} €</h3>

      `,

    });







    // Намаляване на складовата наличност

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