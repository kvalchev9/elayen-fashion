"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [min, setMin] = useState(searchParams.get("min") ?? "");
  const [max, setMax] = useState(searchParams.get("max") ?? "");

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (min) {
      params.set("min", min);
    } else {
      params.delete("min");
    }

    if (max) {
      params.set("max", max);
    } else {
      params.delete("max");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="mt-8">
      <h3 className="mb-3 font-medium">
        Цена
      </h3>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Минимална цена"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
        />

        <input
          type="number"
          placeholder="Максимална цена"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
        />

        <button
          onClick={applyFilter}
          className="w-full rounded-lg bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
        >
          Приложи
        </button>
      </div>
    </div>
  );
}