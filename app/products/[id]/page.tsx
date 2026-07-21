import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="h-[600px] rounded-xl bg-gray-100"></div>

        <div>
          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-semibold">
            {product.price} лв.
          </p>

          <p className="mt-8 text-gray-600">
            {product.description}
          </p>

          <AddToCartButton
            id={product.id}
            name={product.name}
            price={product.price}
          />
        </div>
      </div>
    </main>
  );
}