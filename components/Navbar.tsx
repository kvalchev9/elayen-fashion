import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <button className="md:hidden">
          <Menu size={24} className="text-black" />
        </button>

        <Link
          href="/"
          className="text-3xl font-bold tracking-[0.35em] text-black"
        >
          ELAYEN
        </Link>

        <nav className="hidden gap-10 text-sm font-medium uppercase text-black md:flex">
          <Link href="/">Начало</Link>
          <Link href="/products">Дамски</Link>
          <Link href="/products">Мъжки</Link>
          <Link href="/products">Аксесоари</Link>
          <Link href="/products">Намаления</Link>
        </nav>

        <div className="flex items-center gap-5 text-black">
          <Search size={20} />

          <Heart size={20} />

          <Link href="/cart">
            <ShoppingBag size={20} />
          </Link>

          <User size={20} />
        </div>
      </div>
    </header>
  );
}