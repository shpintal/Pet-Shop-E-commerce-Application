'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email.includes('@')) {
      setError('Введіть правильний email');
      return;
    }

    if (!formData.password) {
      setError('Введіть пароль');
      return;
    }

    setIsLoading(true);

    try {
      // Отримати користувачів з localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);

      if (!user) {
        setError('Email або пароль невірні');
        setIsLoading(false);
        return;
      }

      // Зберегти поточного користувача
      localStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
      }));

      setSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (err) {
      setError('Помилка при вході');
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ви увійшли!</h2>
        <p className="text-gray-600">Перенаправлення на головну...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ivan@example.com"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 outline-none transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Пароль</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-purple-500 outline-none transition"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
      >
        {isLoading ? 'Вхід...' : 'Увійти'}
      </button>

      {/* Register Link */}
      <p className="text-center text-gray-600 text-sm">
        Немає аккаунту?{' '}
        <Link href="/register" className="text-purple-600 font-semibold hover:underline">
          Зареєструватися
        </Link>
      </p>

      {/* Demo Info */}
      <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg text-sm text-blue-700">
        <p className="font-semibold mb-2">📝 Для тестування:</p>
        <p>Email: test@example.com</p>
        <p>Пароль: 123456</p>
        <p className="mt-2 text-xs">(Спочатку зареєструйтесь на сторінці реєстрації)</p>
      </div>
    </form>
  );
}
