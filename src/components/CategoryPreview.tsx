/**
 * CategoryPreview Component
 *
 * Displays preview cards for Silver and Gold categories
 * on the home page. Each card links to its respective
 * product listing page.
 */

import { Link } from 'react-router-dom';
import { silverProducts, goldProducts } from '../data/products';

/** Category card data */
const CATEGORIES = [
  {
    title: 'Silver Ornaments',
    description:
      'Browse our extensive collection of premium silver ornaments including bangles, bracelets, chains, and more.',
    count: silverProducts.length,
    path: '/silver',
    gradient: 'from-neutral-400/10 to-neutral-500/5',
    accentColor: 'text-neutral-300',
    borderHover: 'hover:border-neutral-400/50',
    iconBg: 'bg-neutral-400/10',
  },
  {
    title: 'Gold Ornaments',
    description:
      'Discover our curated selection of fine gold ornaments crafted with exceptional purity and artistry.',
    count: goldProducts.length,
    path: '/gold',
    gradient: 'from-gold-400/10 to-gold-500/5',
    accentColor: 'text-gold-400',
    borderHover: 'hover:border-gold-400/50',
    iconBg: 'bg-gold-400/10',
  },
] as const;

export default function CategoryPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-3">
          Our Collections
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto">
          Explore our wide range of premium silver and gold ornaments,
          crafted with decades of expertise.
        </p>
      </div>

      {/* Category cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className={`group relative block p-8 rounded-2xl border border-neutral-700/50 ${cat.borderHover} bg-gradient-to-br ${cat.gradient} transition-all duration-300 hover:shadow-lg overflow-hidden`}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-400/5 to-transparent rounded-bl-full" />

            {/* Icon */}
            <div
              className={`w-14 h-14 ${cat.iconBg} rounded-xl flex items-center justify-center mb-5`}
            >
              <svg
                className={`w-7 h-7 ${cat.accentColor}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                />
              </svg>
            </div>

            {/* Content */}
            <h3
              className={`text-xl font-bold ${cat.accentColor} mb-2 group-hover:translate-x-1 transition-transform duration-200`}
            >
              {cat.title}
            </h3>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              {cat.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-medium">
                {cat.count} Products
              </span>
              <span
                className={`text-sm font-medium ${cat.accentColor} group-hover:translate-x-1 transition-transform duration-200`}
              >
                Browse Collection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
