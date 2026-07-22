import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number | null;
  image: string;
};


export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
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



      <div className="mt-2">

        {oldPrice && oldPrice > price ? (

          <>

            <p className="text-sm text-gray-500 line-through">
              {oldPrice.toFixed(2)} €
            </p>


            <p className="text-lg font-bold text-red-600">
              {price.toFixed(2)} €
            </p>


          </>

        ) : (

          <p className="text-lg">
            {price.toFixed(2)} €
          </p>

        )}

      </div>


    </Link>
  );
}