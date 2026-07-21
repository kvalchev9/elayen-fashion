"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  id: number;
  name: string;
  price: number;
};

export default function AddToCartButton({
  id,
  name,
  price,
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart({
          id,
          name,
          price,
        });
      }}
      className="mt-10 rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800"
    >
      Добави в количката
    </button>
  );
}