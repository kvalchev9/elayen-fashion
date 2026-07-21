"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [success, setSuccess] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    clearCart();
    setSuccess(true);
  }

  if (success) {
    return (
      <main className="mx-auto max-w-4xl px-8 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Благодарим за поръчката!
        </h1>

        <p className="mt-6 text-gray-400">
          Вашата поръчка е приета успешно.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-black"
        >
          Разгледай продукти
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-8 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Завършване на поръчка
      </h1>

      {cart.length === 0 ? (
        <div>
          <p className="mb-6 text-gray-400">
            Нямате продукти в количката.
          </p>

          <Link
            href="/products"
            className="rounded-lg bg-white px-6 py-3 text-black"
          >
            Към продуктите
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2">

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-gray-700 p-6"
          >
            <h2 className="text-2xl font-bold">
              Данни за доставка
            </h2>

            <input
              required
              placeholder="Име и фамилия"
              className="w-full rounded-lg border border-gray-700 bg-white px-4 py-3 text-black placeholder:text-gray-500"
            />

            <input
              required
              placeholder="Телефон"
              className="w-full rounded-lg border border-gray-700 bg-white px-4 py-3 text-black placeholder:text-gray-500"
            />

            <input
              required
              placeholder="Град"
              className="w-full rounded-lg border border-gray-700 bg-white px-4 py-3 text-black placeholder:text-gray-500"
            />

            <textarea
              required
              placeholder="Адрес"
              className="h-32 w-full rounded-lg border border-gray-700 bg-white px-4 py-3 text-black placeholder:text-gray-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Направи поръчка
            </button>
          </form>


          <div className="rounded-xl border border-gray-700 p-6">
            <h2 className="mb-6 text-2xl font-bold">
              Обобщение
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex justify-between"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  {(item.price * item.quantity).toFixed(2)} лв.
                </span>
              </div>
            ))}

            <div className="mt-6 border-t border-gray-700 pt-6">
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