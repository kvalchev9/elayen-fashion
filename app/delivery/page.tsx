export default function DeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20">

      <h1 className="mb-8 text-5xl font-bold">
        Доставка
      </h1>


      <div className="space-y-6 text-lg text-gray-600">


        <p>
          Всички поръчки от ELAYEN се изпращат чрез куриерски услуги.
        </p>



        <div>
          <h2 className="font-bold text-black">
            Куриера
          </h2>

          <p>
            Изпращаме с Еконт и Speedy.
          </p>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Срок за доставка
          </h2>

          <p>
            Поръчките се обработват в рамките на 1-2 работни дни.
            След изпращане доставката обикновено е между 1 и 3 работни дни.
          </p>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Начини на получаване
          </h2>

          <ul className="list-disc pl-6">
            <li>До офис на куриер</li>
            <li>До посочен адрес</li>
          </ul>
        </div>




        <div>
          <h2 className="font-bold text-black">
            Плащане
          </h2>

          <p>
            Към момента предлагаме плащане при доставка.
          </p>
        </div>


      </div>


    </main>
  );
}