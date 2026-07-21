"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Любими продукти
      </h1>

      {wishlist.length === 0 ? (
        <div>
          <p className="mb-6 text-gray-500">
            Нямате добавени любими продукти.
          </p>

          <Link
            href="/products"
            className="rounded-lg bg-white px-6 py-3 text-black"
          >
            Разгледай продуктите
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-5"
            >
              <div className="relative h-72 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {item.name}
              </h2>

              <p className="mt-2">
                {item.price.toFixed(2)} лв.
              </p>

              <button
                onClick={() =>
                  removeFromWishlist(item.id)
                }
                className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Премахни
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}