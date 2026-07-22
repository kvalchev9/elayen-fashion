import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      title: "Дамски",
      slug: "Дамски",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    },
    {
      title: "Мъжки",
      slug: "Мъжки",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    },
    {
      title: "Аксесоари",
      slug: "Аксесоари",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Категории
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {categories.map((category) => (

          <Link
            key={category.title}
            href={`/products?category=${category.slug}`}
            className="group relative h-[450px] cursor-pointer overflow-hidden rounded-2xl"
          >

            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />


            <div className="absolute inset-0 bg-black/35" />


            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl font-bold text-white">
                {category.title}
              </h3>

            </div>


          </Link>

        ))}

      </div>
    </section>
  );
}