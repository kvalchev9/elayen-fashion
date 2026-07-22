import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
}: Props) {

  return (
    <Link
      href={`/products/${id}`}
      className="rounded-xl border p-4"
    >

      <div className="h-80 overflow-hidden rounded-lg bg-gray-100">

        {image && (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}

      </div>


      <h2 className="mt-4 text-xl font-bold">
        {title}
      </h2>


      <p className="mt-2 text-lg">
        {price.toFixed(2)} лв.
      </p>


    </Link>
  );
}