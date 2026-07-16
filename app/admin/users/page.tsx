import Link from 'next/link';

const users = [
  { id: 1, name: 'Іван Петренко', email: 'ivan@example.com', registered: '2024-01-15', orders: 5, status: 'Active' },
  { id: 2, name: 'Марія Коваленко', email: 'maria@example.com', registered: '2024-02-20', orders: 3, status: 'Active' },
  { id: 3, name: 'Олег Шевченко', email: 'oleg@example.com', registered: '2024-03-10', orders: 8, status: 'Active' },
  { id: 4, name: 'Анна Іванівна', email: 'anna@example.com', registered: '2024-01-05', orders: 2, status: 'Active' },
  { id: 5, name: 'Сергій Бондаренко', email: 'sergey@example.com', registered: '2024-02-28', orders: 0, status: 'Inactive' },
];

export const metadata = {
  title: 'Користувачі | Pet Shop Admin',
  description: 'Управління користувачами'
};

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">👥 Користувачі</h1>
            <p className="text-lg opacity-90">Управління аккаунтами користувачів</p>
          </div>
          <div className="text-3xl">👤 {users.length}</div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Користувач</th>
                  <th className="px-6 py-4 text-left font-semibold">Email</th>
                  <th className="px-6 py-4 text-left font-semibold">Зареєстрований</th>
                  <th className="px-6 py-4 text-left font-semibold">Замовлень</th>
                  <th className="px-6 py-4 text-left font-semibold">Статус</th>
                  <th className="px-6 py-4 text-left font-semibold">Дії</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } border-b hover:bg-green-50 transition`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">ID: {user.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-gray-600">{user.registered}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {user.orders} замовлень
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {user.status === 'Active' ? '✅ Активний' : '❌ Неактивний'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">
                          👁️ Переглянути
                        </button>
                        <button className="text-red-600 hover:text-red-800 font-semibold">
                          🔒 Заблокувати
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
              <div className="text-sm text-gray-600">Активних користувачів</div>
              <div className="text-3xl font-bold text-green-600 mt-2">{users.filter(u => u.status === 'Active').length}</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="text-sm text-gray-600">Середнє замовлень</div>
              <div className="text-3xl font-bold text-orange-600 mt-2">
                {Math.round(users.reduce((sum, u) => sum + u.orders, 0) / users.length)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="text-sm text-gray-600">Всього замовлень</div>
              <div className="text-3xl font-bold text-blue-600 mt-2">
                {users.reduce((sum, u) => sum + u.orders, 0)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
