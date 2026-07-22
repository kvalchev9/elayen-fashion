import Image from "next/image";
import { prisma } from "@/lib/prisma";
import DeleteProductButton from "@/components/DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {

  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <main className="mx-auto max-w-6xl px-8 py-16">


      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-white">
          Админ - Продукти
        </h1>


        <a
          href="/admin/products/new"
          className="rounded bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200"
        >
          + Добави продукт
        </a>


      </div>



      {products.length === 0 ? (

        <p className="text-gray-400">
          Няма продукти.
        </p>


      ) : (


        <div className="space-y-5">


          {products.map((product) => (


            <div
              key={product.id}
              className="flex gap-6 rounded-xl border border-gray-700 p-6"
            >


              <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-gray-900">


                {product.image && (

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                )}


              </div>



              <div className="flex-1">


                <h2 className="text-2xl font-bold text-white">
                  {product.name}
                </h2>



                <p className="mt-2 text-white">
                  Цена: {product.price.toFixed(2)} €
                </p>



                <p className="text-white">
                  Категория: {product.category}
                </p>



                <p className="text-white">
                  Размери: {product.sizes}
                </p>



                <p className="text-white">
                  Цветове: {product.colors}
                </p>



                {product.description && (

                  <p className="mt-2 text-gray-400">
                    {product.description}
                  </p>

                )}



                <div className="mt-4 flex gap-3">


                  <a
                    href={`/admin/products/${product.id}/edit`}
                    className="rounded bg-white px-4 py-2 text-black"
                  >
                    Редактирай
                  </a>



                  <DeleteProductButton
                    id={product.id}
                  />


                </div>


              </div>


            </div>


          ))}


        </div>


      )}


    </main>
  );
}