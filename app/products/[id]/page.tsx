import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AddToCartButton from "@/components/AddToCartButton";


type Props = {
  params: Promise<{
    id: string;
  }>;
};



export default async function ProductPage({
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





  const sizes = product.sizes

    ? product.sizes.split(",")

    : [];




  const colors = product.colors

    ? product.colors.split(",")

    : [];







  return (

    <main className="mx-auto max-w-6xl px-8 py-16">



      <div className="grid gap-10 md:grid-cols-2">





        <div className="relative h-[600px] overflow-hidden rounded-xl bg-gray-100">



          {product.image && (


            <Image

              src={product.image}

              alt={product.name}

              fill

              className="object-cover"

              sizes="(max-width: 768px) 100vw, 50vw"

            />


          )}



        </div>







        <div>





          <h1 className="text-5xl font-bold">

            {product.name}

          </h1>








          <div className="mt-6">



            {product.oldPrice && product.oldPrice > product.price ? (


              <>


                <div className="flex items-center gap-4">


                  <p className="text-2xl text-gray-500 line-through">

                    {product.oldPrice.toFixed(2)} €

                  </p>




                  <span className="rounded bg-red-600 px-3 py-1 text-sm font-bold text-white">

                    -
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    %

                  </span>


                </div>





                <p className="mt-2 text-3xl font-semibold text-red-600">

                  {product.price.toFixed(2)} €

                </p>



              </>

            ) : (


              <p className="text-3xl font-semibold">

                {product.price.toFixed(2)} €

              </p>


            )}



          </div>








          <p className="mt-3 text-gray-500">

            {product.category}

          </p>








          <div className="mt-6">


            {product.stock > 0 ? (


              <p className="font-semibold text-green-600">

                Наличност: {product.stock} бр.

              </p>


            ) : (


              <p className="font-semibold text-red-600">

                Изчерпан продукт

              </p>


            )}


          </div>








          <p className="mt-8 text-gray-600">

            {product.description}

          </p>








          <AddToCartButton

            id={product.id}

            name={product.name}

            price={product.price}

            image={product.image}

            sizes={sizes}

            colors={colors}

            stock={product.stock}

          />




        </div>





      </div>




    </main>

  );

}