'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Pet Shop 🐾</h1>
          <p className="text-xl mb-8">Все для ваших улюбленців</p>
          <Link
            href="/products"
            className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transition"
          >
            Перейти до каталогу →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Категорії товарів</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center hover:bg-purple-700 transition">
              <div className="text-5xl mb-4">🍖</div>
              <h3 className="text-xl font-bold">Корми</h3>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center hover:bg-purple-700 transition">
              <div className="text-5xl mb-4">🎾</div>
              <h3 className="text-xl font-bold">Іграшки</h3>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center hover:bg-purple-700 transition">
              <div className="text-5xl mb-4">⛓️</div>
              <h3 className="text-xl font-bold">Аксесуари</h3>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center hover:bg-purple-700 transition">
              <div className="text-5xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold">Меблі</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готові до покупок?</h2>
          <p className="text-lg mb-8">Відвідайте наш каталог і знайдіть все що потрібно для вашого улюбленця</p>
          <Link
            href="/products"
            className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transition"
          >
            Переглянути товари 🛒
          </Link>
        </div>
      </section>
    </div>
  );
}
