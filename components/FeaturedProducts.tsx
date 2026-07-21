import ProductCard from "./ProductCard";

const products = [
  {
    title: "Oversize Тениска",
    price: "79.99 лв.",
    image: "https://picsum.photos/600/800?random=1",
  },
  {
    title: "Черно Яке",
    price: "189.99 лв.",
    image: "https://picsum.photos/600/800?random=2",
  },
  {
    title: "Дънки",
    price: "119.99 лв.",
    image: "https://picsum.photos/600/800?random=3",
  },
  {
    title: "Худи",
    price: "99.99 лв.",
    image: "https://picsum.photos/600/800?random=4",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Най-продавани
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}