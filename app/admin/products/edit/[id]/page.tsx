'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductForm from '../../product-form';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  emoji: string;
  description: string;
}

export default function EditProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Завантажити товар з localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const found = products.find((p: Product) => p.id === id);

    if (found) {
      setProduct({
        ...found,
        price: found.price.toString(),
        stock: found.stock.toString()
      } as any);
    } else {
      setNotFound(true);
    }

    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Завантаження...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Товар не знайдено</h1>
          <p className="text-gray-600">Товар з ID {id} не існує</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">✏️ Редагувати товар</h1>
          <p className="text-lg opacity-90">Оновіть інформацію про товар</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ProductForm mode="edit" product={product as any} />
        </div>
      </section>
    </div>
  );
}
