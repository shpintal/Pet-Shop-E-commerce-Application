'use client';

import Link from 'next/link';

export default function HomePage() {
  const stores = [
    { address: 'вул. Руська 27', phone: '+380 (67) 975 90 96' },
    { address: 'вул. Злуки 45 б (Грумінг)', phone: '+380 (67) 975 90 96' },
    { address: 'вул. Енергетична 3а (Грумінг)', phone: '+380 (67) 975 90 96' },
    { address: 'вул. Митрополита Шептицького 11', phone: '+380 (67) 975 90 96' },
    { address: 'вул. Громницького 6', phone: '+380 (67) 975 90 96' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-black mb-4">Зоомагазин</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Порадуйте своїх улюбленців</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Наш Зоомагазин цінує якість, комфорт та індивідуальність наших товарів.
            Все для домашніх тварин на одному місці.
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-800 transition"
          >
            Дізнатися більше
          </Link>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-4">Поспішай!</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Купуй сьогодні та отримай</h3>
          <p className="text-xl text-gray-600 mb-6">
            <strong>Безкоштовну доставку</strong> в межах Тернополя при замовленні на суму більше 500 грн
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-800 transition"
          >
            Дізнатися більше
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Про нас</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Наше бачення в Зоомагазині - стати зоомагазином #1
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              для домашніх тварин, а також простором, де власники можуть отримати будь-які товари,
              що пов'язані з їхніми улюбленцями.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Наша робота визначається певними цінностями
            </h3>
            <p className="text-gray-700 text-lg">
              Які включають досконалість, турботу, професіоналізм, інновації та послідовність.
              Ми прагнемо надати найкращий сервіс для вас та ваших домашніх улюбленців.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-4">Ласощі для всіх тварин</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Побалуйте своїх домашніх улюбленців нашим асортиментом якісних ласощів
            для собак, котів, папуг, риб та гризунів
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-800 transition"
          >
            Перейти до каталогу
          </Link>
        </div>
      </section>

      {/* Stores Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-12">Адреси наших магазинів</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-2">
                  Зоомагазин Віскас
                </h3>
                <p className="text-gray-700 mb-4">
                  м. Тернопіль
                  <br />
                  {store.address}
                </p>
                <a href={`tel:${store.phone}`} className="text-blue-600 hover:underline">
                  {store.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Наші контакти</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Телефон</h3>
              <a href="tel:+380679759096" className="text-blue-600 hover:underline text-lg">
                +380 (67) 975 90 96
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Email</h3>
              <div className="space-y-2">
                <a href="mailto:zootovarizlyki@gmail.com" className="text-blue-600 hover:underline block">
                  zootovarizlyki@gmail.com
                </a>
                <a href="mailto:zoomag.ter@gmail.com" className="text-blue-600 hover:underline block">
                  zoomag.ter@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Графік роботи</h3>
              <p className="text-gray-700">
                пн-сб: 10:00 - 20:00
                <br />
                нд: 10:00 - 17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-black mb-6">Ми в соціальних мережах</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/zoomagviskas"
              className="text-gray-600 hover:text-black transition text-2xl"
            >
              📷 Instagram
            </a>
            <a
              href="https://www.facebook.com/zoomagviskas"
              className="text-gray-600 hover:text-black transition text-2xl"
            >
              👍 Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Pet Shop. Всі права захищені.
          </p>
          <p className="text-gray-500 mt-2">
            Зоотовари • Зоомагазин • Товари для тварин
          </p>
        </div>
      </footer>
    </div>
  );
}
