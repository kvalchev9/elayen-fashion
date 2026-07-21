"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-8 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Завършване на поръчка
      </h1>

      {cart.length === 0 ? (
        <div>
          <p className="mb-6 text-gray-600">
            Нямате продукти в количката.
          </p>

          <Link
            href="/products"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Към продуктите
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2">
          <form className="space-y-5 rounded-xl border p-6">
            <h2 className="text-2xl font-bold">
              Данни за доставка
            </h2>

            <input
              placeholder="Име и фамилия"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <input
              placeholder="Телефон"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <input
              placeholder="Град"
              className="w-full rounded-lg border px-4 py-3 text-black"
            />

            <textarea
              placeholder="Адрес"
              className="h-32 w-full rounded-lg border px-4 py-3 text-black"
            />

            <button
              type="button"
              className="w-full rounded-lg bg-black px-6 py-3 text-white"
            >
              Направи поръчка
            </button>
          </form>

          <div className="rounded-xl border p-6">
            <h2 className="mb-6 text-2xl font-bold">
              Обобщение
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    {(item.price * item.quantity).toFixed(2)} лв.
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-6">
              <p className="text-2xl font-bold">
                Общо: {total.toFixed(2)} лв.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}