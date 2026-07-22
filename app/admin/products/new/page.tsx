"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {

  const router = useRouter();


  const [form, setForm] = useState({
    name: "",
    price: "",
    oldPrice: "",
    category: "",
    sizes: "",
    colors: "",
    description: "",
    image: "",
  });


  const [file, setFile] = useState<File | null>(null);



  function update(
    field: string,
    value: string
  ) {
    setForm({
      ...form,
      [field]: value,
    });
  }




  async function uploadImage() {

    if (!file) return "";


    const data = new FormData();

    data.append(
      "file",
      file
    );


    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });


    const result = await res.json();


    return result.url;
  }





  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    const imageUrl = await uploadImage();



    const res = await fetch("/api/products", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },


      body: JSON.stringify({

        ...form,

        oldPrice: form.oldPrice
          ? Number(form.oldPrice)
          : null,

        image: imageUrl,

      }),

    });



    const data = await res.json();



    if (data.success) {

      router.push("/admin/products");

      router.refresh();

    }

  }





  return (

    <main className="mx-auto max-w-xl px-8 py-16">


      <h1 className="mb-8 text-4xl font-bold">
        Добави продукт
      </h1>



      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >



        <input
          placeholder="Име"
          className="w-full rounded border p-3 text-black"
          value={form.name}
          onChange={(e)=>
            update("name", e.target.value)
          }
        />



        <input
          placeholder="Цена (€)"
          type="number"
          step="0.01"
          className="w-full rounded border p-3 text-black"
          value={form.price}
          onChange={(e)=>
            update("price", e.target.value)
          }
        />



        <input
          placeholder="Стара цена (€) - по желание"
          type="number"
          step="0.01"
          className="w-full rounded border p-3 text-black"
          value={form.oldPrice}
          onChange={(e)=>
            update("oldPrice", e.target.value)
          }
        />



        <input
          placeholder="Категория"
          className="w-full rounded border p-3 text-black"
          value={form.category}
          onChange={(e)=>
            update("category", e.target.value)
          }
        />



        <input
          placeholder="Размери (пример: S,M,L,XL)"
          className="w-full rounded border p-3 text-black"
          value={form.sizes}
          onChange={(e)=>
            update("sizes", e.target.value)
          }
        />



        <input
          placeholder="Цветове (пример: Черен,Бял,Сив)"
          className="w-full rounded border p-3 text-black"
          value={form.colors}
          onChange={(e)=>
            update("colors", e.target.value)
          }
        />



        <input
          type="file"
          accept="image/*"
          className="w-full rounded border p-3 text-white"
          onChange={(e)=>
            setFile(
              e.target.files?.[0] ?? null
            )
          }
        />



        <textarea
          placeholder="Описание"
          className="w-full rounded border p-3 text-black"
          value={form.description}
          onChange={(e)=>
            update("description", e.target.value)
          }
        />



        <button
          className="w-full rounded bg-black p-3 text-white"
        >
          Запази продукт
        </button>


      </form>


    </main>

  );
}