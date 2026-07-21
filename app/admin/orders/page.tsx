import { prisma } from "@/lib/prisma";
import OrderStatus from "@/components/OrderStatus";
import DeleteOrder from "@/components/DeleteOrder";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <h1 className="mb-10 text-4xl font-bold">
        Админ - Поръчки
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">
          Няма поръчки.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const products = JSON.parse(order.products);

            return (
              <div
                key={order.id}
                className="rounded-xl border p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-xl font-bold">
                    Поръчка #{order.id}
                  </h2>

                  <OrderStatus
                    id={order.id}
                    currentStatus={order.status}
                  />
                </div>

                <div className="mt-5 space-y-2">
                  <p>
                    <b>Име:</b> {order.name}
                  </p>

                  <p>
                    <b>Телефон:</b> {order.phone}
                  </p>

                  <p>
                    <b>Град:</b> {order.city}
                  </p>

                  <p>
                    <b>Адрес:</b> {order.address}
                  </p>

                  <p>
                    <b>Сума:</b> {order.total.toFixed(2)} лв.
                  </p>

                  <p className="mt-5 font-bold">
                    Продукти:
                  </p>

                  <div className="rounded bg-gray-100 p-4 text-black">
                    {products.map((product: any) => (
                      <div
                        key={product.id}
                        className="mb-3 border-b pb-3"
                      >
                        <p className="font-bold">
                          {product.name}
                        </p>

                        <p>
                          Количество: {product.quantity}
                        </p>

                        <p>
                          Цена: {product.price.toFixed(2)} лв.
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    {order.createdAt.toLocaleString("bg-BG")}
                  </p>

                  <DeleteOrder id={order.id} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}