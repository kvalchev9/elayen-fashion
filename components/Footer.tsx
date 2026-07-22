import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-gray-800">

      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-16 md:grid-cols-4">

        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-widest text-black">
            ELAYEN
          </h3>

          <p className="leading-relaxed text-gray-600">
            Минималистична мода с премиум качество и модерен стил.
          </p>
        </div>


        <div>
          <h4 className="mb-5 font-bold text-black">
            Пазаруване
          </h4>

          <div className="flex flex-col gap-3">

            <Link
              href="/products?category=Дамски"
              className="hover:text-black"
            >
              Дамски
            </Link>

            <Link
              href="/products?category=Мъжки"
              className="hover:text-black"
            >
              Мъжки
            </Link>

            <Link
              href="/products?category=Аксесоари"
              className="hover:text-black"
            >
              Аксесоари
            </Link>

            <Link
              href="/products"
              className="hover:text-black"
            >
              Всички продукти
            </Link>

          </div>
        </div>



        <div>
          <h4 className="mb-5 font-bold text-black">
            Информация
          </h4>

          <div className="flex flex-col gap-3">

            <Link href="/about" className="hover:text-black">
              За нас
            </Link>

            <Link href="/contact" className="hover:text-black">
              Контакти
            </Link>

            <Link href="/delivery" className="hover:text-black">
              Доставка
            </Link>

            <Link href="/returns" className="hover:text-black">
              Връщане
            </Link>

          </div>
        </div>



        <div>
          <h4 className="mb-5 font-bold text-black">
            Контакти
          </h4>


          <div className="flex flex-col gap-3">

            <a
              href="mailto:info@elayen.eu"
              className="hover:text-black"
            >
              info@elayen.eu
            </a>


            <a
              href="tel:+359000000000"
              className="hover:text-black"
            >
              +359 00 000 0000
            </a>


            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Instagram
            </a>


            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Facebook
            </a>


            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              TikTok
            </a>

          </div>

        </div>

      </div>



      <div className="border-t py-6 text-center text-sm text-gray-500">

        © 2026 ELAYEN. Всички права запазени.

      </div>


    </footer>
  );
}