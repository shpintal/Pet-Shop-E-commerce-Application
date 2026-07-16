import Footer from 'components/layout/footer';
import ProductsClient from './products-client';

export const metadata = {
  title: 'Продукція',
  description: 'Каталог товарів для домашніх тварин'
};

// Default products
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Сухий корм для котів',
    price: 350,
    category: 'Корми',
    description: 'Збалансований сухий корм преміум якості',
    emoji: '🐱',
    stock: 45
  },
  {
    id: 2,
    name: 'Іграшки для котів',
    price: 120,
    category: 'Іграшки',
    description: 'Набір різноманітних іграшок для активного дозвілля',
    emoji: '🎾',
    stock: 78
  },
  {
    id: 3,
    name: 'Лоток для котів',
    price: 450,
    category: 'Аксесуари',
    description: 'Закритий туалет для котів з фільтром запахів',
    emoji: '🚽',
    stock: 34
  },
  {
    id: 4,
    name: 'Лежанка для собак',
    price: 650,
    category: 'Меблі',
    description: 'Комфортна ліжко для малих та середніх собак',
    emoji: '🛏️',
    stock: 12
  },
  {
    id: 5,
    name: 'Ошийник та повідець',
    price: 280,
    category: 'Екіпіровка',
    description: 'Міцний та стильний набір екіпіровки',
    emoji: '⛓️',
    stock: 92
  },
  {
    id: 6,
    name: 'Вітаміни та добавки',
    price: 320,
    category: 'Здоров\'я',
    description: 'Комплекс вітамінів для здоров\'я шерсті',
    emoji: '💊',
    stock: 56
  },
  {
    id: 7,
    name: 'Когтеточка',
    price: 580,
    category: 'Меблі',
    description: 'Висока когтеточка з полками для лазіння',
    emoji: '🌳',
    stock: 8
  },
  {
    id: 8,
    name: 'Переноска для тварин',
    price: 890,
    category: 'Аксесуари',
    description: 'Легка та зручна переноска для подорожей',
    emoji: '🎒',
    stock: 5
  },
  {
    id: 9,
    name: 'Миски для їжі та води',
    price: 180,
    category: 'Аксесуари',
    description: 'Набір керамічних мисок різних розмірів',
    emoji: '🍽️',
    stock: 67
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Продукція</h1>
          <p className="text-xl opacity-90">Всього що потрібно вашим улюбленцям</p>
        </div>
      </section>

      {/* Client Component with interactive functionality */}
      <ProductsClient products={DEFAULT_PRODUCTS} />

      <Footer />
    </div>
  );
}
