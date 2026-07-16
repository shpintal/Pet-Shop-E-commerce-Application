'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  emoji: string;
  description?: string;
}

interface ProductsTableProps {
  defaultProducts: Product[];
}

export default function ProductsTable({ defaultProducts }: ProductsTableProps) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [isMounted, setIsMounted] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Завантажити товари з localStorage
    const saved = localStorage.getItem('products');
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    }
  }, []);

  const handleDelete = (id: number) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
    setDeleteId(null);
  };

  if (!isMounted) {
    return null;
  }

  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const avgPrice = products.length > 0 ? Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length) : 0;

  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Товар</th>
              <th className="px-6 py-4 text-left font-semibold">Категорія</th>
              <th className="px-6 py-4 text-left font-semibold">Ціна</th>
              <th className="px-6 py-4 text-left font-semibold">Залишок</th>
              <th className="px-6 py-4 text-left font-semibold">Вартість</th>
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
                      <p className="text-xs text-gray-500">{product.description}</p>
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
                  <span className="font-bold text-blue-600">₴{product.price * product.stock}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/products/edit/${product.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold px-2 py-1 hover:bg-blue-50 rounded"
                    >
                      ✏️ Редагувати
                    </Link>
                    <button
                      onClick={() => setDeleteId(product.id)}
                      className="text-red-600 hover:text-red-800 font-semibold px-2 py-1 hover:bg-red-50 rounded"
                    >
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
          <div className="text-sm text-gray-600">Всього товарів</div>
          <div className="text-3xl font-bold text-green-600 mt-2">{products.length}</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
          <div className="text-sm text-gray-600">Середня ціна</div>
          <div className="text-3xl font-bold text-orange-600 mt-2">₴{avgPrice}</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
          <div className="text-sm text-gray-600">Всього на складі</div>
          <div className="text-3xl font-bold text-blue-600 mt-2">{totalStock} шт.</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
          <div className="text-sm text-gray-600">Вартість складу</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">₴{totalValue}</div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ⚠️ Видалити товар?
            </h2>
            <p className="text-gray-600 mb-6">
              Ви впевнені, що хочете видалити цей товар? Цю дію неможливо скасувати.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
              >
                🗑️ Видалити
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-bold hover:bg-gray-400 transition"
              >
                ❌ Скасувати
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
