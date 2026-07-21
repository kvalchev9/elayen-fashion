import ProductCard from "./ProductCard";
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
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}