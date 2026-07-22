import { prisma } from "@/lib/prisma";
import SortSelect from "@/components/SortSelect";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";

type Props = {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    min?: string;
    max?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: Props) {

  const { category, sort, min, max } = await searchParams;


  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });


  let filteredProducts = [...products];


  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }


  if (min) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= Number(min)
    );
  }


  if (max) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(max)
    );
  }


  switch (sort) {

    case "price-asc":
      filteredProducts.sort(
        (a,b) => a.price - b.price
      );
      break;


    case "price-desc":
      filteredProducts.sort(
        (a,b) => b.price - a.price
      );
      break;


    case "name":
      filteredProducts.sort(
        (a,b) =>
          a.name.localeCompare(
            b.name,
            "bg"
          )
      );
      break;


    default:
      break;
  }


  return (
    <main className="mx-auto max-w-7xl px-8 py-16">

      <div className="mb-10 flex justify-between">

        <h1 className="text-4xl font-bold">
          {category ?? "Всички продукти"}
        </h1>


        <SortSelect />

      </div>


      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

        <ProductFilters category={category} />


        <ProductGrid
          products={filteredProducts}
        />


      </div>

    </main>
  );
}