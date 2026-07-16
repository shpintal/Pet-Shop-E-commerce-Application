import LoginForm from './login-form';

export const metadata = {
  title: 'Вхід | Pet Shop',
  description: 'Увійти в ваш аккаунт Pet Shop'
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">🔐 Вхід</h1>
          <p className="text-gray-600">Увійдіть у ваш аккаунт Pet Shop</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
