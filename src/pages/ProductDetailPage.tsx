/**
 * Product Detail Page
 *
 * Dynamic route page showing full details for a single product.
 * Includes image placeholder, description, sizes, price,
 * rating system (form + list), and contact-for-order button.
 *
 * Route: /product/:productId
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { getRatings, addRating, getAverageRating } from '../utils/ratings';
import type { Rating } from '../types';
import StarRating from '../components/StarRating';
import RatingForm from '../components/RatingForm';
import RatingList from '../components/RatingList';
import ContactButton from '../components/ContactButton';

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;

  const [ratings, setRatings] = useState<Rating[]>([]);
  const [avgRating, setAvgRating] = useState(0);

  // Load ratings when product changes
  useEffect(() => {
    if (productId) {
      setRatings(getRatings(productId));
      setAvgRating(getAverageRating(productId));
    }
  }, [productId]);

  // Handle new rating submission
  const handleRatingSubmit = (name: string, stars: number, comment: string) => {
    if (!productId) return;
    addRating(productId, stars, comment, name);
    setRatings(getRatings(productId));
    setAvgRating(getAverageRating(productId));
  };

  // 404 state for invalid product IDs
  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-neutral-100 mb-4">
          Product Not Found
        </h1>
        <p className="text-neutral-400 mb-6">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
        >
          Return to Home
        </Link>
      </main>
    );
  }

  const categoryPath = product.category === 'silver' ? '/silver' : '/gold';
  const categoryLabel =
    product.category === 'silver' ? 'Silver Ornaments' : 'Gold Ornaments';

  return (
    <main>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-sm text-neutral-500">
          <Link to="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to={categoryPath}
            className="hover:text-gold-400 transition-colors"
          >
            {categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-neutral-300">{product.name}</span>
        </nav>
      </div>

      {/* Product detail section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left column: Image placeholder */}
          <div className="aspect-square bg-neutral-800 rounded-2xl border border-neutral-700/50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent" />
            <div className="text-center relative z-10">
              <svg
                className="w-24 h-24 text-neutral-700 mx-auto mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              <p className="text-sm text-neutral-500">Product Image</p>
              <p className="text-xs text-neutral-600 mt-1">
                Image to be added
              </p>
            </div>
            {/* Category badge */}
            <span className="absolute top-4 right-4 px-3 py-1 bg-neutral-900/80 backdrop-blur-sm rounded-md text-xs font-semibold uppercase tracking-wider text-gold-400 border border-gold-400/20">
              {product.category}
            </span>
          </div>

          {/* Right column: Product info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-3">
              {product.name}
            </h1>

            {/* Average rating */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={Math.round(avgRating)} size="md" showValue />
              <span className="text-sm text-neutral-500">
                ({ratings.length} rating{ratings.length !== 1 ? 's' : ''})
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Description
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Price
              </h2>
              <p className="text-xl font-bold text-gold-400">
                {product.price || 'Contact for Price'}
              </p>
            </div>

            {/* Available sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Available Sizes
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-neutral-200 font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Expandable note */}
            {product.expandable && (
              <div className="mb-6 p-3 bg-gold-400/5 border border-gold-400/20 rounded-lg">
                <p className="text-sm text-gold-400">
                  {product.expandableNote ||
                    'Additional variants coming soon'}
                </p>
              </div>
            )}

            {/* Contact for order button */}
            <div className="mt-auto pt-6">
              <ContactButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* Rating section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-8">
          Ratings & Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Rating form */}
          <div className="p-6 bg-neutral-800/30 border border-neutral-700/30 rounded-xl">
            <RatingForm onSubmit={handleRatingSubmit} />
          </div>

          {/* Existing ratings */}
          <div>
            <RatingList ratings={ratings} />
          </div>
        </div>
      </section>
    </main>
  );
}
