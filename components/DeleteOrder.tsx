"use client";

import { useState } from "react";

type Props = {
  id: number;
};

export default function DeleteOrder({ id }: Props) {
  const [loading, setLoading] = useState(false);

  async function deleteOrder() {
    const confirmDelete = confirm(
      "Сигурен ли си, че искаш да изтриеш тази поръчка?"
    );

    if (!confirmDelete) return;

    setLoading(true);

    await fetch("/api/orders/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    window.location.reload();
  }

  return (
    <button
      onClick={deleteOrder}
      disabled={loading}
      className="mt-5 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
    >
      {loading ? "Изтриване..." : "Изтрий поръчката"}
    </button>
  );
}