"use client";

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
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-8 py-16">
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
                key={item.id}
                className="flex items-center justify-between rounded-lg border p-6"
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="h-9 w-9 rounded bg-gray-700 text-lg"
                    >
                      −
                    </button>

                    <span className="text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="h-9 w-9 rounded bg-gray-700 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-3">
                    {(item.price * item.quantity).toFixed(2)} лв.
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded bg-red-600 px-4 py-2 text-white"
                >
                  Премахни
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-bold">
              Общо: {total.toFixed(2)} лв.
            </h2>

            <button
              onClick={clearCart}
              className="mt-6 rounded bg-black px-6 py-3 text-white"
            >
              Изчисти количката
            </button>
          </div>
        </>
      )}
    </main>
  );
}