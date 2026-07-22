import { prisma } from "@/lib/prisma";
import EditProductForm from "@/components/EditProductForm";
import { notFound } from "next/navigation";


type Props = {
  params: Promise<{
    id: string;
  }>;
};



export default async function EditProductPage({
  params,
}: Props) {


  const { id } = await params;



  const product = await prisma.product.findUnique({

    where: {

      id: Number(id),

    },

  });





  if (!product) {

    notFound();

  }






  return (

    <main className="mx-auto max-w-xl px-8 py-16">


      <h1 className="mb-8 text-4xl font-bold text-white">
        Редактирай продукт
      </h1>





      <EditProductForm

        product={{

          id: product.id,

          name: product.name,

          price: product.price,

          oldPrice: product.oldPrice ?? null,

          stock: product.stock,

          category: product.category,

          image: product.image,

          sizes: product.sizes,

          colors: product.colors,

          description: product.description,

        }}

      />


    </main>

  );

}