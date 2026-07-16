import Link from 'next/link';
import ProductsTable from './products-table';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  emoji: string;
  description?: string;
}

// Default products if none exist
const DEFAULT_PRODUCTS: Product[] = [
  { id: 1, name: 'Сухий корм для котів', price: 350, category: 'Корми', stock: 45, emoji: '🐱', description: 'Збалансований сухий корм преміум якості' },
  { id: 2, name: 'Іграйки для собак', price: 199, category: 'Іграшки', stock: 78, emoji: '🐶', description: 'Набір різноманітних іграшок' },
  { id: 3, name: 'Лежак для кішки', price: 450, category: 'Меблі', stock: 12, emoji: '🛏️', description: 'Комфортний лежак' },
  { id: 4, name: 'Лоток для котів', price: 280, category: 'Аксесуари', stock: 34, emoji: '🚽', description: 'Закритий туалет' },
  { id: 5, name: 'Когтеточка', price: 580, category: 'Меблі', stock: 8, emoji: '🌳', description: 'Висока когтеточка з полками' },
  { id: 6, name: 'Вітаміни для собак', price: 320, category: 'Здоров\'я', stock: 56, emoji: '💊', description: 'Комплекс вітамінів' },
  { id: 7, name: 'Ошийник', price: 140, category: 'Екіпіровка', stock: 92, emoji: '⛓️', description: 'Міцний та стильний' },
  { id: 8, name: 'Переноска', price: 890, category: 'Аксесуари', stock: 5, emoji: '🎒', description: 'Легка та зручна' },
];

export const metadata = {
  title: 'Товари | Pet Shop Admin',
  description: 'Управління товарами'
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'rgb(175, 62, 143)' }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontWeight: 700 }} className="mb-2">🛍️ Товари</h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)' }}>Управління каталогом товарів</p>
          </div>
          <Link
            href="/admin/products/add"
            style={{ backgroundColor: 'white', color: 'rgb(175, 62, 143)' }}
            className="px-6 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block"
          >
            ➕ Додати товар
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductsTable defaultProducts={DEFAULT_PRODUCTS} />
        </div>
      </section>
    </div>
  );
}
