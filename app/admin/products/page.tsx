import Link from 'next/link';

const products = [
  { id: 1, name: 'Сухий корм для котів', price: 350, category: 'Корми', stock: 45, emoji: '🐱' },
  { id: 2, name: 'Іграйки для собак', price: 199, category: 'Іграшки', stock: 78, emoji: '🐶' },
  { id: 3, name: 'Лежак для кішки', price: 450, category: 'Меблі', stock: 12, emoji: '🛏️' },
  { id: 4, name: 'Лоток для котів', price: 280, category: 'Аксесуари', stock: 34, emoji: '🚽' },
  { id: 5, name: 'Когтеточка', price: 580, category: 'Меблі', stock: 8, emoji: '🌳' },
  { id: 6, name: 'Вітаміни для собак', price: 320, category: 'Здоров\'я', stock: 56, emoji: '💊' },
  { id: 7, name: 'Ошийник', price: 140, category: 'Екіпіровка', stock: 92, emoji: '⛓️' },
  { id: 8, name: 'Переноска', price: 890, category: 'Аксесуари', stock: 5, emoji: '🎒' },
];

export const metadata = {
  title: 'Товари | Pet Shop Admin',
  description: 'Управління товарами'
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">🛍️ Товари</h1>
            <p className="text-lg opacity-90">Управління каталогом товарів</p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition">
            ➕ Додати товар
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Товар</th>
                  <th className="px-6 py-4 text-left font-semibold">Категорія</th>
                  <th className="px-6 py-4 text-left font-semibold">Ціна</th>
                  <th className="px-6 py-4 text-left font-semibold">Залишок</th>
                  <th className="px-6 py-4 text-left font-semibold">Дії</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } border-b hover:bg-purple-50 transition`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{product.emoji}</span>
                        <div>
                          <p className="font-semibold text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-purple-600">₴{product.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          product.stock > 20
                            ? 'bg-green-100 text-green-800'
                            : product.stock > 5
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.stock} шт.
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">
                          ✏️ Редагувати
                        </button>
                        <button className="text-red-600 hover:text-red-800 font-semibold">
                          🗑️ Видалити
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="text-sm text-gray-600">Всього товарів</div>
              <div className="text-3xl font-bold text-green-600 mt-2">{products.length}</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="text-sm text-gray-600">Середня ціна</div>
              <div className="text-3xl font-bold text-orange-600 mt-2">
                ₴{Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="text-sm text-gray-600">Всього на складі</div>
              <div className="text-3xl font-bold text-blue-600 mt-2">
                {products.reduce((sum, p) => sum + p.stock, 0)} шт.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
