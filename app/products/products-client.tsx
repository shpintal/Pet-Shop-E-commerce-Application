'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  price: number | string;
  category: string;
  description: string;
  emoji: string;
  stock?: number;
}

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'price-desc'>('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Корми', 'Іграшки', 'Аксесуари', 'Меблі', 'Екіпіровка', 'Здоров\'я'];

  // Фільтрування та сортування товарів
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const price = typeof product.price === 'string' ? parseInt(product.price) : product.price;

      // Фільтр по категорії
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Фільтр по ціні
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }

      return true;
    });

    // Сортування
    filtered.sort((a, b) => {
      const aPrice = typeof a.price === 'string' ? parseInt(a.price) : a.price;
      const bPrice = typeof b.price === 'string' ? parseInt(b.price) : b.price;

      switch (sortBy) {
        case 'price':
          return aPrice - bPrice;
        case 'price-desc':
          return bPrice - aPrice;
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'uk');
      }
    });

    return filtered;
  }, [products, selectedCategory, priceRange, sortBy]);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product.id);

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    const price = typeof product.price === 'string' ? parseInt(product.price) : product.price;

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: price,
        quantity: 1,
        emoji: product.emoji
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setTimeout(() => {
      router.push('/cart');
    }, 300);
  };

  const minPrice = Math.min(...products.map(p => typeof p.price === 'string' ? parseInt(p.price) : p.price));
  const maxPrice = Math.max(...products.map(p => typeof p.price === 'string' ? parseInt(p.price) : p.price));

  return (
    <>
      {/* Filter Section */}
      <section className="bg-purple-50 py-6 border-b-2 border-purple-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              {showFilters ? '🔽 Приховати фільтри' : '🔼 Показати фільтри'}
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block space-y-4`}>
            {/* Category Filter */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3">📂 Категорії</h3>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedCategory === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border-2 border-purple-200 hover:bg-purple-50'
                  }`}
                >
                  ✓ Все ({products.length})
                </button>
                {categories.map((category) => {
                  const count = products.filter(p => p.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-white text-gray-700 border-2 border-purple-200 hover:bg-purple-50'
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h3 className="font-bold text-gray-700 mb-4">💰 Ціна: ₴{priceRange[0]} - ₴{priceRange[1]}</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Мінімальна ціна</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={(e) => {
                      const newMin = parseInt(e.target.value);
                      if (newMin <= priceRange[1]) {
                        setPriceRange([newMin, priceRange[1]]);
                      }
                    }}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Максимальна ціна</label>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => {
                      const newMax = parseInt(e.target.value);
                      if (newMax >= priceRange[0]) {
                        setPriceRange([priceRange[0], newMax]);
                      }
                    }}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
              <h3 className="font-bold text-gray-700 mb-3">📊 Сортування</h3>
              <div className="space-y-2">
                {[
                  { value: 'name', label: '🔤 За назвою (A-Z)' },
                  { value: 'price', label: '💰 Ціна: від дешевших' },
                  { value: 'price-desc', label: '💵 Ціна: від дорожчих' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSelectedCategory(null);
                setPriceRange([minPrice, maxPrice]);
                setSortBy('name');
              }}
              className="w-full bg-red-100 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              ❌ Скинути фільтри
            </button>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600">
            <span className="font-bold text-purple-600">{filteredProducts.length}</span> товарів знайдено
            {selectedCategory && ` у категорії "${selectedCategory}"`}
            {(selectedCategory || priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && ' • '}
            {(selectedCategory || priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([minPrice, maxPrice]);
                  setSortBy('name');
                }}
                className="text-blue-600 hover:underline ml-2"
              >
                Очистити фільтри
              </button>
            )}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-2 border-purple-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  {/* Product Image Placeholder */}
                  <div className="bg-gradient-to-br purple-300 h-48 flex items-center justify-center">
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
                      <span className="text-2xl font-bold text-purple-600">
                        ₴{typeof product.price === 'string' ? product.price.replace(' ₴', '') : product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={selectedProduct === product.id}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          selectedProduct === product.id
                            ? 'bg-green-500 text-white'
                            : 'bg-purple-600 text-white hover:opacity-90'
                        }`}
                      >
                        {selectedProduct === product.id ? '✓ Додано' : 'У кошик'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Товарів не знайдено</h3>
              <p className="text-gray-600 mb-6">Спробуйте змінити фільтри або переглянути інші категорії</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([minPrice, maxPrice]);
                  setSortBy('name');
                }}
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
              >
                ↺ Скинути фільтри
              </button>
            </div>
          )}
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
