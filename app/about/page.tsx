import Footer from 'components/layout/footer';

export const metadata = {
  title: 'Про нас',
  description: 'Дізнайтеся більше про наш Pet Shop магазин для домашніх тварин'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Про нас</h1>
          <p className="text-xl opacity-90">Ваш надійний партнер у догляді домашніх тварин</p>
        </div>
      </section>

      {/* About Section 1: Our Vision */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                🐱
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <div className="mb-8 border-4 border-purple-500 p-8 bg-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Наше бачення в Pet Shop
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Ми прагнемо стати найкращим зоомагазином в регіоні, пропонуючи якісні товари та послуги для домашніх тварин за доступними цінами.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Кожна тварина заслуговує на любов, турботу та якісний догляд. Наша місія — допомогти вам дати своїм улюбленцям найкраще.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">01</h3>
                  <p className="text-gray-700 font-semibold">НАШЕ БАЧЕННЯ</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-300 mb-2">02</h3>
                  <p className="text-gray-700 font-semibold">НАШІ ЦІННОСТІ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section 2: Our Values */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="mb-8 border-4 border-purple-500 p-8 bg-white rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Наші цінності
                </h2>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>Якість:</strong> Ми обираємо товари найвищої якості для ваших улюбленців</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>Доступність:</strong> Справедливі ціни без компромісу на якості</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>Експертиза:</strong> Наша команда - лояльні поклонники тварин з багатим досвідом</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span><strong>Сервіс:</strong> Вчуйливе ставлення до кожного клієнта та їхніх потреб</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                🐾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наші досягнення</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl opacity-90">Доволених клієнтів</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-xl opacity-90">Товарів в асортименті</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl opacity-90">Років досвіду</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-xl opacity-90">Онлайн підтримка</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Залишилися питання?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Зв'яжіться з нами та дізнайтеся все про наші товари та послуги
          </p>
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
          >
            Зв'яжіться з нами
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
