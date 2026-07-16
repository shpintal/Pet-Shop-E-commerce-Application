import Link from 'next/link';
import * as fs from 'fs';
import * as path from 'path';

interface Order {
  id: string;
  total?: number;
  createdAt: string;
}

async function getOrderStats() {
  try {
    const ordersFile = path.join(process.cwd(), 'data', 'orders.json');
    if (!fs.existsSync(ordersFile)) return { total: 0, revenue: 0, orders: 0 };

    const data = fs.readFileSync(ordersFile, 'utf-8');
    const orders = JSON.parse(data || '[]') as Order[];

    const revenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    return {
      total: revenue,
      revenue: revenue,
      orders: orders.length
    };
  } catch (error) {
    return { total: 0, revenue: 0, orders: 0 };
  }
}

export const metadata = {
  title: 'Адміністрація | Pet Shop',
  description: 'Адмін-панель управління магазином'
};

export default async function AdminPage() {
  const stats = await getOrderStats();

  const menuItems = [
    {
      title: 'Замовлення',
      description: 'Управління замовленнями покупців',
      icon: '📋',
      href: '/admin/orders',
      count: stats.orders,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Товари',
      description: 'Управління каталогом товарів',
      icon: '🛍️',
      href: '/admin/products',
      count: '12',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Користувачі',
      description: 'Управління аккаунтами користувачів',
      icon: '👥',
      href: '/admin/users',
      count: '24',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Статистика',
      description: 'Аналітика продаж',
      icon: '📊',
      href: '/admin/analytics',
      count: `₴${stats.revenue}`,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">🔧 Адміністрація</h1>
          <p className="text-xl opacity-90">Управління Pet Shop магазином</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Total Revenue */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <div className="text-sm text-gray-600 mb-2">Загальний дохід</div>
              <div className="text-3xl font-bold text-green-600">₴{stats.revenue}</div>
              <div className="text-xs text-gray-500 mt-2">💰 За всі часи</div>
            </div>

            {/* Total Orders */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
              <div className="text-sm text-gray-600 mb-2">Замовлень</div>
              <div className="text-3xl font-bold text-blue-600">{stats.orders}</div>
              <div className="text-xs text-gray-500 mt-2">📋 Завершено</div>
            </div>

            {/* Products */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
              <div className="text-sm text-gray-600 mb-2">Товари</div>
              <div className="text-3xl font-bold text-purple-600">12</div>
              <div className="text-xs text-gray-500 mt-2">🛍️ В каталозі</div>
            </div>

            {/* Users */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
              <div className="text-sm text-gray-600 mb-2">Користувачі</div>
              <div className="text-3xl font-bold text-orange-600">24</div>
              <div className="text-xs text-gray-500 mt-2">👥 Зареєстровано</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Менеджмент</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${item.color} h-20 flex items-center justify-center`}>
                  <span className="text-5xl group-hover:scale-125 transition">{item.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-700">{item.count}</span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Швидкі дії</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
              ✉️ Відправити розсилку користувачам
            </button>
            <button className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
              📊 Завантажити звіт продаж
            </button>
            <button className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
              🎁 Створити промо-акцію
            </button>
            <button className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition font-semibold">
              ⚙️ Налаштування магазину
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 text-center text-gray-600 border-t">
        <p>Pet Shop Admin Panel v1.0 • Останнє оновлення: сьогодні</p>
      </section>
    </div>
  );
}
