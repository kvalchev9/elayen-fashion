"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "new";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-medium">
        Сортирай:
      </span>

      <select
        value={currentSort}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="new">Най-нови</option>
        <option value="price-asc">
          Цена ↑
        </option>
        <option value="price-desc">
          Цена ↓
        </option>
        <option value="name">
          Име (А-Я)
        </option>
      </select>
    </div>
  );
}