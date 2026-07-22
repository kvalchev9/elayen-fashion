"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";


type Props = {
  id: number;
  name: string;
  price: number;
  image: string;

  sizes: string[];
  colors: string[];
};



export default function AddToCartButton({
  id,
  name,
  price,
  image,
  sizes,
  colors,
}: Props) {


  const { addToCart } = useCart();


  const [selectedSize, setSelectedSize] = useState("");

  const [selectedColor, setSelectedColor] = useState("");



  function handleAdd() {


    if (sizes.length > 0 && !selectedSize) {

      alert("Избери размер");

      return;

    }



    if (colors.length > 0 && !selectedColor) {

      alert("Избери цвят");

      return;

    }



    addToCart({

      id,

      name,

      price,

      image,

      size: selectedSize,

      color: selectedColor,

    });


  }



  return (

    <div className="mt-10 space-y-6">


      {sizes.length > 0 && (

        <div>

          <p className="mb-3 font-bold">
            Размер:
          </p>


          <div className="flex gap-3">

            {sizes.map((size)=>(

              <button
                key={size}
                type="button"
                onClick={() =>
                  setSelectedSize(size)
                }
                className={`rounded border px-5 py-2 ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </button>

            ))}

          </div>

        </div>

      )}




      {colors.length > 0 && (

        <div>

          <p className="mb-3 font-bold">
            Цвят:
          </p>


          <div className="flex gap-3">

            {colors.map((color)=>(

              <button
                key={color}
                type="button"
                onClick={() =>
                  setSelectedColor(color)
                }
                className={`rounded border px-5 py-2 ${
                  selectedColor === color
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {color}
              </button>

            ))}

          </div>

        </div>

      )}





      <button
        onClick={handleAdd}
        className="rounded-lg bg-black px-8 py-4 text-white transition hover:bg-gray-800"
      >
        Добави в количката
      </button>


    </div>

  );

}