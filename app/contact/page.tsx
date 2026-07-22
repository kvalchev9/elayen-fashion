export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-20">

      <h1 className="mb-8 text-5xl font-bold">
        Контакти
      </h1>


      <div className="space-y-6 text-lg text-gray-600">

        <p>
          Ако имате въпроси относно продукти, поръчки или доставка,
          свържете се с нас.
        </p>


        <div>
          <h2 className="font-bold text-black">
            Email
          </h2>

          <a
            href="mailto:info@elayen.eu"
            className="hover:text-black"
          >
            info@elayen.eu
          </a>
        </div>



        <div>
          <h2 className="font-bold text-black">
            Телефон
          </h2>

          <a
            href="tel:+359000000000"
            className="hover:text-black"
          >
            +359 00 000 0000
          </a>
        </div>



        <div>
          <h2 className="font-bold text-black">
            Работно време
          </h2>

          <p>
            Понеделник - Петък: 09:00 - 18:00
          </p>
        </div>


      </div>


    </main>
  );
}