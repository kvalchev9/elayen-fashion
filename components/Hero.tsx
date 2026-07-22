import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[700px] items-center justify-center overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>


      <div className="relative z-10 max-w-7xl px-8">


        <span className="mb-4 block text-sm uppercase tracking-[0.4em] text-gray-300">
          Elayen Fashion 2026
        </span>


        <h1 className="mb-6 text-6xl font-bold md:text-8xl">
          Нова колекция
        </h1>


        <p className="mb-10 max-w-xl text-lg text-gray-300">
          Открий модерни дамски и мъжки дрехи с премиум качество и стил.
        </p>



        <Link
          href="/products"
          className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
        >
          Разгледай колекцията
        </Link>



      </div>


    </section>
  );
}