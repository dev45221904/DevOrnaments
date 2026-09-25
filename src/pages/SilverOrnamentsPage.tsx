/**
 * Silver Ornaments Page
 *
 * Displays a grid of all silver product categories.
 * Products are dynamically generated from the silverProducts data.
 */

import { silverProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function SilverOrnamentsPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-neutral-400)_0%,_transparent_50%)] opacity-[0.03]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-neutral-400/10 border border-neutral-400/20 rounded-full text-xs font-medium text-neutral-300 tracking-wider uppercase mb-4">
              Silver Collection
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
              Silver Ornaments
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Explore our extensive range of premium silver ornaments.
              From rhodium-plated bangles to traditional payals, each piece
              is crafted with exceptional attention to detail.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </section>

      {/* Products grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-neutral-500">
            {silverProducts.length} categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {silverProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
