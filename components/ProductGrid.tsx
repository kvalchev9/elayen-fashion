import Link from "next/link";
import { products } from "@/lib/products";

type Product = (typeof products)[number];

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-lg text-gray-500">
        Няма намерени продукти.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
  );
}