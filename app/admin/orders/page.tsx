import { prisma } from "@/lib/prisma";
import OrderStatus from "@/components/OrderStatus";
import DeleteOrder from "@/components/DeleteOrder";
import AdminLogout from "@/components/AdminLogout";
import OrdersFilter from "@/components/OrdersFilter";


type Props = {
  searchParams: Promise<{
    status?: string;
  }>;
};



function getStatusStyle(status: string) {

  switch (status) {

    case "Нова":
      return "bg-blue-500 text-white";

    case "Обработва се":
      return "bg-yellow-400 text-black";

    case "Изпратена":
      return "bg-purple-500 text-white";

    case "Завършена":
      return "bg-green-500 text-white";

    default:
      return "bg-gray-500 text-white";

  }

}




export default async function OrdersPage({
  searchParams,
}: Props) {


  const { status } = await searchParams;



  const orders = await prisma.order.findMany({

    where: status
      ? {
          status,
        }
      : undefined,


    orderBy: {
      createdAt: "desc",
    },

  });




  const allOrders = await prisma.order.findMany();




  const totalOrders = allOrders.length;


  const newOrders = allOrders.filter(
    (order) => order.status === "Нова"
  ).length;



  const processingOrders = allOrders.filter(
    (order) => order.status === "Обработва се"
  ).length;



  const sentOrders = allOrders.filter(
    (order) => order.status === "Изпратена"
  ).length;



  const completedOrders = allOrders.filter(
    (order) => order.status === "Завършена"
  ).length;




  const totalRevenue = allOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );





  return (

    <main className="mx-auto max-w-6xl px-8 py-16">


      <div className="mb-10 flex items-center justify-between">


        <h1 className="text-4xl font-bold">
          Админ Панел
        </h1>


        <AdminLogout />


      </div>






      <div className="mb-8 grid gap-5 md:grid-cols-3">



        <div className="rounded-xl border p-5">
          <p className="text-gray-500">
            Общо поръчки
          </p>

          <h2 className="text-3xl font-bold">
            {totalOrders}
          </h2>
        </div>





        <div className="rounded-xl border p-5">
          <p className="text-gray-500">
            Нови
          </p>

          <h2 className="text-3xl font-bold">
            {newOrders}
          </h2>
        </div>





        <div className="rounded-xl border p-5">

          <p className="text-gray-500">
            Оборот
          </p>

          <h2 className="text-3xl font-bold">
            {totalRevenue.toFixed(2)} лв.
          </h2>

        </div>






        <div className="rounded-xl border p-5">

          <p className="text-gray-500">
            Обработва се
          </p>

          <h2 className="text-3xl font-bold">
            {processingOrders}
          </h2>

        </div>






        <div className="rounded-xl border p-5">

          <p className="text-gray-500">
            Изпратени
          </p>

          <h2 className="text-3xl font-bold">
            {sentOrders}
          </h2>

        </div>






        <div className="rounded-xl border p-5">

          <p className="text-gray-500">
            Завършени
          </p>

          <h2 className="text-3xl font-bold">
            {completedOrders}
          </h2>

        </div>



      </div>






      <OrdersFilter />






      <h2 className="mb-6 mt-8 text-3xl font-bold">
        Поръчки
      </h2>






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



                  <div className="flex items-center gap-4">


                    <h3 className="text-xl font-bold">
                      Поръчка #{order.id}
                    </h3>




                    <span
                      className={`rounded-full px-4 py-1 text-sm font-bold ${getStatusStyle(order.status)}`}
                    >

                      {order.status}

                    </span>


                  </div>





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
                    <b>Email:</b> {order.email}
                  </p>




                  <p>
                    <b>Телефон:</b> {order.phone}
                  </p>




                  <p>
                    <b>Адрес:</b> {order.city}, {order.address}
                  </p>




                  <p>
                    <b>Куриер:</b> {order.courier || "Няма избран"}
                  </p>




                  <p>
                    <b>Доставка:</b> {order.deliveryType || "Няма избрана"}
                  </p>




                  <p>
                    <b>Сума:</b> {order.total.toFixed(2)} лв.
                  </p>







                  <p className="mt-5 font-bold">
                    Продукти:
                  </p>






                  <div className="rounded bg-gray-100 p-4 text-black">


                    {products.map((product:any, index:number)=>(


                      <div
                        key={`${product.id}-${index}`}
                        className="mb-4 border-b pb-3"
                      >


                        <p className="font-semibold">
                          {product.name} × {product.quantity}
                        </p>




                        {product.size && (

                          <p>
                            Размер: {product.size}
                          </p>

                        )}






                        {product.color && (

                          <p>
                            Цвят: {product.color}
                          </p>

                        )}



                      </div>



                    ))}



                  </div>







                  <DeleteOrder id={order.id}/>





                </div>





              </div>


            );


          })}





        </div>


      )}



    </main>

  );

}