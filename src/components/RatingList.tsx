/**
 * RatingList Component
 *
 * Displays all ratings for a specific product.
 * Shows reviewer name, star rating, comment, and date.
 * Sorted by most recent first.
 */

import type { Rating } from '../types';
import StarRating from './StarRating';

interface RatingListProps {
  /** Array of ratings to display */
  ratings: Rating[];
}

/**
 * Format an ISO date string to a readable format.
 * e.g., "June 9, 2026"
 */
function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function RatingList({ ratings }: RatingListProps) {
  if (ratings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-neutral-500 text-sm">
          No ratings yet. Be the first to leave a review!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-neutral-100">
        Customer Ratings ({ratings.length})
      </h3>

      {ratings.map((rating) => (
        <div
          key={rating.id}
          className="p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-lg"
        >
          {/* Header row: name + date */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-sm text-neutral-200">
              {rating.name}
            </span>
            <span className="text-xs text-neutral-500">
              {formatDate(rating.date)}
            </span>
          </div>

          {/* Star rating display */}
          <StarRating rating={rating.stars} size="sm" />

          {/* Comment (if any) */}
          {rating.comment && (
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {rating.comment}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
