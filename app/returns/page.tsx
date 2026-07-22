export default function ReturnsPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20">

      <h1 className="mb-8 text-5xl font-bold">
        Връщане на продукти
      </h1>


      <div className="space-y-6 text-lg text-gray-600">


        <p>
          В ELAYEN искаме всеки клиент да остане доволен от своята покупка.
        </p>



        <div>
          <h2 className="font-bold text-black">
            Срок за връщане
          </h2>

          <p>
            Продуктите могат да бъдат върнати в срок до 14 дни
            след получаването им.
          </p>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Условия
          </h2>

          <ul className="list-disc pl-6">
            <li>
              Продуктът трябва да бъде неизползван.
            </li>

            <li>
              Да бъде в оригинален вид и опаковка.
            </li>

            <li>
              Да има всички етикети.
            </li>
          </ul>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Как да направите връщане
          </h2>

          <p>
            Свържете се с нас на info@elayen.eu и ще Ви дадем
            инструкции за връщането.
          </p>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Възстановяване на сума
          </h2>

          <p>
            След получаване и проверка на продукта,
            сумата се възстановява по договорения начин.
          </p>
        </div>


      </div>


    </main>
  );
}