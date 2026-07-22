import { NextResponse } from "next/server";


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


    const formData = await request.formData();



    const file = formData.get("file") as File;




    if (!file) {

      return NextResponse.json(
        {
          error: "Няма файл",
        },
        {
          status: 400,
        }
      );

    }






    if (!file.type.startsWith("image/")) {


      return NextResponse.json(
        {
          error: "Позволени са само изображения",
        },
        {
          status: 400,
        }
      );


    }







    const maxSize = 5 * 1024 * 1024;


    if (file.size > maxSize) {


      return NextResponse.json(
        {
          error: "Файлът е прекалено голям (макс. 5MB)",
        },
        {
          status: 400,
        }
      );


    }







    const bytes = await file.arrayBuffer();


    const buffer = Buffer.from(bytes);




    const base64 =
      `data:${file.type};base64,${buffer.toString("base64")}`;





    return NextResponse.json({

      success: true,

      url: base64,

    });






  } catch (error) {


    console.error(error);



    return NextResponse.json(

      {
        error: "Upload error",
      },

      {
        status: 500,
      }

    );


  }


}