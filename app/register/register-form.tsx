'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export default function RegisterForm() {
  const router = useRouter();

  // Remove animated cursor SVG elements
  useEffect(() => {
    const removeCursorSVG = () => {
      const svgs = document.querySelectorAll('svg[style*="position: absolute"]');
      svgs.forEach(svg => svg.remove());
    };

    // Remove on initial load
    removeCursorSVG();

    // Check periodically in case they're re-added
    const interval = setInterval(removeCursorSVG, 100);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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

    // Валідація на клієнті
    if (!formData.username.trim()) {
      setError('Введіть ім\'я користувача');
      return;
    }

    if (formData.username.length < 3) {
      setError('Ім\'я користувача повинно містити щонайменше 3 символи');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Введіть правильний email');
      return;
    }

    if (!formData.password) {
      setError('Введіть пароль');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль повинен містити щонайменше 6 символів');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Паролі не збігаються');
      return;
    }

    if (!formData.firstName.trim()) {
      setError('Введіть ім\'я');
      return;
    }

    if (!formData.lastName.trim()) {
      setError('Введіть прізвище');
      return;
    }

    setIsSubmitting(true);

    try {
      // Отримати список користувачів з localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Перевірити чи користувач вже існує
      if (users.some((u: any) => u.email === formData.email)) {
        setError('Користувач з цим email уже зареєстрований');
        setIsSubmitting(false);
        return;
      }

      // Додати нового користувача
      users.push({
        id: Date.now(),
        username: formData.username,
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone
      });

      // Зберегти користувачів
      localStorage.setItem('users', JSON.stringify(users));

      setSuccess(true);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: ''
      });

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      setError('Помилка при реєстрації');
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Реєстрація успішна!</h2>
        <p className="text-gray-600 mb-6">Перенаправлення на сторінку входу...</p>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            Ваш аккаунт створений. Тепер ви можете увійти з вашим email та паролем.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-4 cursor-default">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Реєстрація</h2>

      {/* Ім'я та Прізвище */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ім'я</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Іван"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Прізвище</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Петренко"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
          />
        </div>
      </div>

      {/* Ім'я користувача */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Ім'я користувача</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="myusername"
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
        />
        <p className="text-xs text-gray-500 mt-1">Мінімум 3 символи</p>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ivan@example.com"
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
        />
      </div>

      {/* Телефон */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон (необов'язково)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+380 98 123 45 67"
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
        />
      </div>

      {/* Пароль та Підтвердження */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
          />
          <p className="text-xs text-gray-500 mt-1">Мінімум 6 символів</p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Підтверджання пароля</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-purple-500 outline-none transition"
          />
        </div>
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
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Реєстрація...' : 'Зареєструватися'}
      </button>

      {/* Login Link */}
      <p className="text-center text-gray-600 text-sm">
        Вже маєте аккаунт?{' '}
        <Link href="/login" className="text-purple-600 font-semibold hover:underline">
          Увійти
        </Link>
      </p>
    </form>
  );
}
