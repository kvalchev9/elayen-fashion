"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();



  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );



  return (
    <main className="mx-auto max-w-6xl px-8 py-16">


      <h1 className="mb-10 text-4xl font-bold">
        Количка
      </h1>



      {cart.length === 0 ? (

        <div>

          <p className="mb-6 text-gray-600">
            Количката е празна.
          </p>


          <Link
            href="/products"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Разгледай продуктите
          </Link>

        </div>


      ) : (


        <>


          <div className="space-y-6">


            {cart.map((item) => (

              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex items-center gap-6 rounded-xl border p-6"
              >


                <div className="relative h-32 w-24 overflow-hidden rounded-lg bg-gray-100">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />

                </div>





                <div className="flex-1">


                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>


                  <p className="mt-2">
                    {item.price.toFixed(2)} €
                  </p>



                  {item.size && (
                    <p className="text-gray-500">
                      Размер: {item.size}
                    </p>
                  )}



                  {item.color && (
                    <p className="text-gray-500">
                      Цвят: {item.color}
                    </p>
                  )}






                  <div className="mt-4 flex items-center gap-3">


                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id,
                          item.size,
                          item.color
                        )
                      }
                      className="h-9 w-9 rounded bg-gray-700 text-white"
                    >
                      -
                    </button>



                    <span className="font-bold">
                      {item.quantity}
                    </span>




                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id,
                          item.size,
                          item.color
                        )
                      }
                      className="h-9 w-9 rounded bg-gray-700 text-white"
                    >
                      +
                    </button>


                  </div>


                </div>







                <div className="text-right">


                  <p className="mb-4 text-xl font-bold">
                    {(item.price * item.quantity).toFixed(2)} €
                  </p>



                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.size,
                        item.color
                      )
                    }
                    className="rounded bg-red-600 px-4 py-2 text-white"
                  >
                    Премахни
                  </button>


                </div>



              </div>


            ))}


          </div>








          <div className="mt-10 border-t pt-6">


            <h2 className="text-2xl font-bold">
              Общо: {total.toFixed(2)} €
            </h2>





            <div className="mt-6 flex flex-wrap gap-4">


              <button
                onClick={clearCart}
                className="rounded bg-black px-6 py-3 text-white"
              >
                Изчисти количката
              </button>




              <Link
                href="/checkout"
                className="rounded bg-white px-6 py-3 text-black"
              >
                Продължи към поръчка
              </Link>


            </div>


          </div>


        </>

      )}


    </main>
  );
}