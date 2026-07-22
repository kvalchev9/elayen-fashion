"use client";

import { useRouter } from "next/navigation";

export default function AdminLogout() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
  }

  return (
    <button
      onClick={logout}
      className="rounded bg-red-600 px-5 py-2 text-white"
    >
      Изход
    </button>
  );
}