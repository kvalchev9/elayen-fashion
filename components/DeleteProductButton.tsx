"use client";

import { useRouter } from "next/navigation";


export default function DeleteProductButton({
  id,
}: {
  id: number;
}) {

  const router = useRouter();


  async function removeProduct() {

    const ok = confirm(
      "Сигурен ли си, че искаш да изтриеш продукта?"
    );


    if (!ok) return;


    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });


    router.refresh();
  }


  return (
    <button
      onClick={removeProduct}
      className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
    >
      Изтрий
    </button>
  );
}