"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export default function WishlistButton({
  product,
}: WishlistButtonProps) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    e.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow transition hover:scale-110"
      aria-label="Добави в любими"
    >
      <Heart
        size={20}
        className={
          inWishlist
            ? "fill-red-500 text-red-500"
            : "text-black"
        }
      />
    </button>
  );
}