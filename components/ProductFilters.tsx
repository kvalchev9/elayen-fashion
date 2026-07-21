import Link from "next/link";
import PriceFilter from "./PriceFilter";

type ProductFiltersProps = {
  category?: string;
};

export default function ProductFilters({
  category,
}: ProductFiltersProps) {
  const linkClass = (value?: string) =>
    `block rounded-lg px-3 py-2 transition ${
      category === value || (!category && !value)
        ? "bg-white text-black font-semibold"
        : "hover:bg-neutral-800"
    }`;

  return (
    <aside className="rounded-xl border p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        Филтри
      </h2>

      <div>
        <h3 className="mb-3 font-medium">
          Категория
        </h3>

        <ul className="space-y-2">
          <li>
            <Link
              href="/products"
              className={linkClass()}
            >
              Всички
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Дамски"
              className={linkClass("Дамски")}
            >
              Дамски
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Мъжки"
              className={linkClass("Мъжки")}
            >
              Мъжки
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Аксесоари"
              className={linkClass("Аксесоари")}
            >
              Аксесоари
            </Link>
          </li>
        </ul>
      </div>

      <PriceFilter />
    </aside>
  );
}