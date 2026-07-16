import ProductForm from '../product-form';

export const metadata = {
  title: 'Додати товар | Pet Shop Admin',
  description: 'Додавання нового товару в каталог'
};

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">➕ Додати новий товар</h1>
          <p className="text-lg opacity-90">Заповніть форму щоб додати товар до каталогу</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ProductForm mode="create" />
        </div>
      </section>
    </div>
  );
}
