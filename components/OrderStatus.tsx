"use client";

import { useState } from "react";

type Props = {
  id: number;
  currentStatus: string;
};

const statuses = [
  "Нова",
  "Обработва се",
  "Изпратена",
  "Завършена",
];

function getStatusStyle(status: string) {
  switch (status) {
    case "Нова":
      return "bg-yellow-500 text-black";

    case "Обработва се":
      return "bg-blue-600 text-white";

    case "Изпратена":
      return "bg-purple-600 text-white";

    case "Завършена":
      return "bg-green-600 text-white";

    default:
      return "bg-black text-white";
  }
}

export default function OrderStatus({
  id,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function changeStatus(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newStatus = e.target.value;

    setStatus(newStatus);
    setLoading(true);

    await fetch("/api/orders/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status: newStatus,
      }),
    });

    setLoading(false);
  }

  return (
    <select
      value={status}
      onChange={changeStatus}
      disabled={loading}
      className={`rounded-lg px-4 py-2 font-semibold ${getStatusStyle(
        status
      )}`}
    >
      {statuses.map((item) => (
        <option
          key={item}
          value={item}
          className="bg-black text-white"
        >
          {item}
        </option>
      ))}
    </select>
  );
}