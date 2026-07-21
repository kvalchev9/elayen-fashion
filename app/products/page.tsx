import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Всички продукти
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="rounded-xl border p-5 transition hover:shadow-xl"
          >
            <div className="mb-4 h-72 rounded-lg bg-gray-100"></div>

            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="mt-2 text-gray-500">
              {product.category}
            </p>

            <p className="mt-4 text-2xl font-bold">
              {product.price} лв.
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}