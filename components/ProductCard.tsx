import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";

type ProductCardProps = {
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
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group block cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        <WishlistButton
          product={{
            id,
            name: title,
            price,
            image,
          }}
        />

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">
          {title}
        </h3>

        <p className="mt-1 text-gray-600">
          {price.toFixed(2)} лв.
        </p>
      </div>
    </Link>
  );
}