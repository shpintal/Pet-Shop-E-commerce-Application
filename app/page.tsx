import Link from 'next/link';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Pet Shop - магазин всього для ваших улюбленців. Корми, іграшки, аксесуари та меблі для котів, собак та інших тварин.',
  openGraph: {
    type: 'website'
  }
};

const featuredProducts = [
  {
    id: '1',
    title: 'Сухий корм для котів',
    price: '350',
    category: 'Корми',
    emoji: '🐱',
    description: 'Збалансований корм'
  },
  {
    id: '2',
    title: 'Іграйки для собак',
    price: '199',
    category: 'Іграшки',
    emoji: '🐶',
    description: 'Для активного дозвілля'
  },
  {
    id: '3',
    title: 'Лежак для кішки',
    price: '450',
    category: 'Меблі',
    emoji: '🛏️',
    description: 'Комфортний відпочинок'
  }
];

const categories = [
  { name: 'Корми', emoji: '🍖', color: 'from-orange-400 to-red-500' },
  { name: 'Іграшки', emoji: '🎾', color: 'from-purple-400 to-pink-500' },
  { name: 'Аксесуари', emoji: '⛓️', color: 'from-blue-400 to-cyan-500' },
  { name: 'Меблі', emoji: '🛋️', color: 'from-green-400 to-emerald-500' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl animate-bounce">🐾</div>
          <div className="absolute bottom-10 right-10 text-8xl animate-pulse">🐾</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Pet Shop 🐾</h1>
          <p className="text-xl md:text-2xl text-center opacity-95 mb-8">
            Все для ваших улюбленців - від корму до аксесуарів
          </p>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition"
            >
              Перейти до каталогу →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Категорії товарів</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name}`}
              className={`group bg-gradient-to-br ${cat.color} p-8 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition shadow-lg`}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition">{cat.emoji}</div>
              <h3 className="text-2xl font-bold">{cat.name}</h3>
              <p className="mt-2 opacity-90">Розглянути →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Популярні товари</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products`}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-purple-400 transition transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-125 transition">{product.emoji}</span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-semibold">{product.category}</span>
                  <h3 className="text-2xl font-bold mt-2 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-bold text-purple-600">₴{product.price}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                      🛒 Додати
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-10 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition"
            >
              Переглянути всі товари ✨
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">Швидка доставка</h2>
            <p className="text-gray-600">Доставка по всій Україні за 24-48 годин</p>
          </div>
          <div className="text-center p-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Якість гарантована</h3>
            <p className="text-gray-600">Тільки оригінальні товари від перевірених виробників</p>
          </div>
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-2">Вся підтримка</h3>
            <p className="text-gray-600">Наша команда завжди готова допомогти 24/7</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
