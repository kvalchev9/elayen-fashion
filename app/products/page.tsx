import { products } from "@/lib/products";
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

  let filteredProducts = [...products];

  // Филтър по категория
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Филтър по минимална цена
  if (min) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= Number(min)
    );
  }

  // Филтър по максимална цена
  if (max) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= Number(max)
    );
  }

  // Сортиране
  switch (sort) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "name":
      filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name, "bg")
      );
      break;

    case "new":
    default:
      filteredProducts.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew)
      );
      break;
  }

  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-bold">
          {category ?? "Всички продукти"}
        </h1>

        <SortSelect />
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <ProductFilters category={category} />

        <section>
          <ProductGrid products={filteredProducts} />
        </section>
      </div>
    </main>
  );
}