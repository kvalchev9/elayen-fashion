import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(
  request: Request
) {
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


    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);


    const fileName =
      `${Date.now()}-${file.name}`;


    const uploadPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "products",
      fileName
    );


    await fs.writeFile(
      uploadPath,
      buffer
    );


    return NextResponse.json({
      success: true,
      url: `/uploads/products/${fileName}`,
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