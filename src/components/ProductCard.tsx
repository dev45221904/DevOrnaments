/**
 * ProductCard Component
 *
 * Reusable card displaying a product summary in a grid.
 * Shows product name, description, sizes/variants, and links
 * to the individual product detail page.
 */

import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { getAverageRating, getRatingCount } from '../utils/ratings';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const avgRating = getAverageRating(product.id);
  const ratingCount = getRatingCount(product.id);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-neutral-800/50 border border-neutral-700/50 rounded-xl overflow-hidden hover:border-gold-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/5"
    >
      {/* Image placeholder area */}
      <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Decorative ornament silhouette */}
          <svg
            className="w-16 h-16 text-neutral-700 group-hover:text-gold-400/20 transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        {/* Category badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 bg-neutral-900/80 backdrop-blur-sm rounded-md text-[10px] font-semibold uppercase tracking-wider text-gold-400 border border-gold-400/20">
          {product.category}
        </span>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-neutral-100 group-hover:text-gold-400 transition-colors duration-200 mb-1.5">
          {product.name}
        </h3>

        <p className="text-sm text-neutral-400 line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Sizes (if available) */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-2 py-0.5 bg-neutral-700/50 rounded text-xs text-neutral-300"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Expandable note */}
        {product.expandable && (
          <p className="text-xs text-gold-400/70 mb-3 italic">
            {product.expandableNote}
          </p>
        )}

        {/* Rating display */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-700/50">
          <div className="flex items-center gap-2">
            <StarRating rating={Math.round(avgRating)} size="sm" />
            {ratingCount > 0 && (
              <span className="text-xs text-neutral-500">
                ({ratingCount})
              </span>
            )}
          </div>
          <span className="text-xs text-gold-400 font-medium group-hover:translate-x-0.5 transition-transform duration-200">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
