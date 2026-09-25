/**
 * Ratings Page
 *
 * Aggregated view showing all products with their average ratings.
 * Links to individual product pages for detailed reviews.
 */

import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { getAverageRating, getRatingCount } from '../utils/ratings';
import StarRating from '../components/StarRating';

export default function RatingsPage() {
  // Sort products: those with ratings first, then alphabetically
  const sortedProducts = [...allProducts].sort((a, b) => {
    const aCount = getRatingCount(a.id);
    const bCount = getRatingCount(b.id);
    if (aCount > 0 && bCount === 0) return -1;
    if (aCount === 0 && bCount > 0) return 1;
    if (aCount > 0 && bCount > 0) {
      return getAverageRating(b.id) - getAverageRating(a.id);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-400)_0%,_transparent_50%)] opacity-[0.04]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-xs font-medium text-gold-400 tracking-wider uppercase mb-4">
              Customer Feedback
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
              Product Ratings
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              See what our customers think about our products.
              Click on any product to view detailed reviews or leave your own.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </section>

      {/* Ratings list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-3">
          {sortedProducts.map((product) => {
            const avg = getAverageRating(product.id);
            const count = getRatingCount(product.id);

            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group flex items-center justify-between p-4 sm:p-5 bg-neutral-800/30 border border-neutral-700/30 rounded-xl hover:border-gold-400/30 transition-all duration-200"
              >
                {/* Product info */}
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-gold-400 transition-colors truncate">
                      {product.name}
                    </h3>
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-neutral-700/50 rounded text-[10px] font-medium text-neutral-400 uppercase tracking-wider flex-shrink-0">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating
                      rating={Math.round(avg)}
                      size="sm"
                    />
                    {count > 0 ? (
                      <span className="text-xs text-neutral-500">
                        {avg.toFixed(1)} avg / {count} review
                        {count !== 1 ? 's' : ''}
                      </span>
                    ) : (
                      <span className="text-xs text-neutral-600">
                        No ratings yet
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-neutral-600 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
