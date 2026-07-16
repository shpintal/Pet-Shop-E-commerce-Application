'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from 'components/layout/footer';

interface WishlistItem {
  id: number;
  name: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">❤️ Обране</h1>
          <p className="text-lg opacity-90">{wishlist.length} товарів в обраному</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {wishlist.length > 0 ? (
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border-2 border-red-200 rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">ID: {item.id}</p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="/products"
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
                    >
                      Перейти до товару
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition"
                    >
                      Видалити
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🤍</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Обране порожнє</h2>
              <p className="text-gray-600 mb-6">Додайте товари до обраного щоб легше їх знайти пізніше</p>
              <Link
                href="/products"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition"
              >
                Перейти до каталогу →
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
