"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    sizes: string;
    colors: string;
    description: string | null;
  };
};


export default function EditProductForm({
  product,
}: Props) {


  const router = useRouter();


  const [form, setForm] = useState({

    name: product.name,

    price: String(product.price),

    category: product.category,

    sizes: product.sizes,

    colors: product.colors,

    image: product.image,

    description: product.description ?? "",

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

    if (!file) {
      return form.image;
    }


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



    await fetch(`/api/products/${product.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },


      body: JSON.stringify({

        ...form,

        image: imageUrl,

      }),

    });



    router.push("/admin/products");

    router.refresh();

  }





  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >



      <input
        className="w-full rounded border p-3 text-black"
        value={form.name}
        onChange={(e)=>
          update("name", e.target.value)
        }
        placeholder="Име"
      />



      <input
        className="w-full rounded border p-3 text-black"
        type="number"
        value={form.price}
        onChange={(e)=>
          update("price", e.target.value)
        }
        placeholder="Цена"
      />



      <input
        className="w-full rounded border p-3 text-black"
        value={form.category}
        onChange={(e)=>
          update("category", e.target.value)
        }
        placeholder="Категория"
      />



      <input
        className="w-full rounded border p-3 text-black"
        value={form.sizes}
        onChange={(e)=>
          update("sizes", e.target.value)
        }
        placeholder="Размери (S,M,L,XL)"
      />



      <input
        className="w-full rounded border p-3 text-black"
        value={form.colors}
        onChange={(e)=>
          update("colors", e.target.value)
        }
        placeholder="Цветове (Черен,Бял)"
      />



      <div className="rounded border p-3">

        <p className="mb-2 text-white">
          Смени снимка:
        </p>


        <input
          type="file"
          accept="image/*"
          className="text-white"
          onChange={(e)=>
            setFile(
              e.target.files?.[0] ?? null
            )
          }
        />

      </div>




      <textarea
        className="w-full rounded border p-3 text-black"
        value={form.description}
        onChange={(e)=>
          update("description", e.target.value)
        }
        placeholder="Описание"
      />



      <button
        className="w-full rounded bg-black p-3 text-white"
      >
        Запази промените
      </button>



    </form>

  );
}