"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart({
          id,
          name,
          price,
          image,
        });
      }}
      className="mt-10 rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800"
    >
      Добави в количката
    </button>
  );
}