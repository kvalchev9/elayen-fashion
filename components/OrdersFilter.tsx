"use client";

import { useRouter, useSearchParams } from "next/navigation";

const filters = [
  "Всички",
  "Нова",
  "Обработва се",
  "Изпратена",
  "Завършена",
];

export default function OrdersFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current =
    searchParams.get("status") || "Всички";

  function changeFilter(status: string) {
    if (status === "Всички") {
      router.push("/admin/orders");
    } else {
      router.push(
        `/admin/orders?status=${status}`
      );
    }
  }

  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => changeFilter(filter)}
          className={`rounded-lg px-5 py-2 ${
            current === filter
              ? "bg-black text-white"
              : "border"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}