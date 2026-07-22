"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      router.push("/admin/orders");
    } else {
      setError("Грешна парола");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl border p-8"
      >
        <h1 className="mb-6 text-3xl font-bold">
          Admin Login
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          placeholder="Парола"
          className="w-full rounded-lg border bg-white px-4 py-3 text-black"
        />

        {error && (
          <p className="mt-3 text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-black px-6 py-3 text-white"
        >
          Вход
        </button>
      </form>
    </main>
  );
}