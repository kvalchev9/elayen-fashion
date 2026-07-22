import ProductCard from "./ProductCard";
import { prisma } from "@/lib/prisma";

export default async function FeaturedProducts() {
  const featuredProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });


  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Най-продавани
      </h2>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {featuredProducts.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
          />

        ))}

      </div>

    </section>
  );
}