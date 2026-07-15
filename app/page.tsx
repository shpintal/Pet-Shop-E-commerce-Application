// import { Carousel } from 'components/carousel';
// import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Pet Shop 🐾</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our pet store! This is a demo Next.js Commerce application.
        </p>
      </div>
      {/* <ThreeItemGrid /> */}
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}
