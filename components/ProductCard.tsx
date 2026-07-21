type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-1 text-gray-600">{price}</p>
      </div>
    </div>
  );
}