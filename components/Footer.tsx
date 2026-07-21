export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-2xl font-bold tracking-widest">
            ELAYEN
          </h3>

          <p className="text-gray-600">
            Минималистична мода с премиум качество.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Пазаруване</h4>

          <ul className="space-y-2 text-gray-600">
            <li>Дамски</li>
            <li>Мъжки</li>
            <li>Аксесоари</li>
            <li>Нови продукти</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Информация</h4>

          <ul className="space-y-2 text-gray-600">
            <li>За нас</li>
            <li>Контакти</li>
            <li>Доставка</li>
            <li>Връщане</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">Последвай ни</h4>

          <ul className="space-y-2 text-gray-600">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 Elayen Fashion. Всички права запазени.
      </div>
    </footer>
  );
}