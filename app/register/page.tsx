import RegisterForm from './register-form';

export const metadata = {
  title: 'Реєстрація | Pet Shop',
  description: 'Створіть новий аккаунт'
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Реєстрація</h1>
          <p className="text-lg opacity-90 mt-2">Створіть новий аккаунт для покупок</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}
