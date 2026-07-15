'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  emoji: string;
}

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product.id);

    // Отримати поточний кошик з localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Перевірити чи товар вже у кошику
    const existingItem = cart.find((item: any) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: parseInt(product.price),
        quantity: 1,
        emoji: product.emoji
      });
    }

    // Зберегти кошик
    localStorage.setItem('cart', JSON.stringify(cart));

    // Перейти до кошика
    setTimeout(() => {
      router.push('/cart');
    }, 300);
  };

  const categories = ['Корми', 'Іграшки', 'Аксесуари', 'Меблі', 'Екіпіровка', 'Здоров\'я'];

  return (
    <>
      {/* Filter Section */}
      <section className="bg-gray-50 py-8 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
              Всі категорії
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 border-2 border-purple-200 rounded-full font-semibold hover:bg-purple-50 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-purple-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-purple-300 to-pink-300 h-48 flex items-center justify-center">
                  <span className="text-6xl">{product.emoji}</span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  </div>

                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {product.category}
                  </span>

                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={selectedProduct === product.id}
                      className={`px-4 py-2 rounded-lg font-semibold transition ${
                        selectedProduct === product.id
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
                      }`}
                    >
                      {selectedProduct === product.id ? '✓ Додано' : 'У кошик'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition">
            Завантажити більше товарів
          </button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold mb-2">Швидка доставка</h3>
              <p className="text-gray-600">Доставка по Тернополю за 24 години</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">Якість гарантована</h3>
              <p className="text-gray-600">Тільки оригінальні товари від перевірених виробників</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold mb-2">Консультація</h3>
              <p className="text-gray-600">Наша команда завжди готова допомогти</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
