"use client";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
} from "lucide-react";
import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalWishlistItems = wishlist.length;

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

          <Link href="/products?category=Дамски">
            Дамски
          </Link>

          <Link href="/products?category=Мъжки">
            Мъжки
          </Link>

          <Link href="/products?category=Аксесоари">
            Аксесоари
          </Link>

          <Link href="/products">
            Намаления
          </Link>
        </nav>

        <div className="flex items-center gap-5 text-black">
          <Search size={20} />

          <Link href="/wishlist" className="relative">
            <Heart size={20} />

            {totalWishlistItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalWishlistItems}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingBag size={20} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <User size={20} />
        </div>
      </div>
    </header>
  );
}