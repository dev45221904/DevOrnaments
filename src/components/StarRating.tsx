/**
 * StarRating Component
 *
 * Dual-purpose star rating display:
 * - Interactive mode: clickable stars for user input
 * - Display mode: shows read-only rating
 *
 * Uses SVG stars instead of emojis for a clean, professional look.
 */

interface StarRatingProps {
  /** Current rating value (1-5) */
  rating: number;
  /** Callback when a star is clicked (omit for display-only mode) */
  onRate?: (rating: number) => void;
  /** Size of stars: 'sm' | 'md' | 'lg' */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show the numeric rating next to stars */
  showValue?: boolean;
}

/** SVG star path for consistent rendering */
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z';

/** Size classes for different star sizes */
const SIZE_CLASSES = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
} as const;

export default function StarRating({
  rating,
  onRate,
  size = 'md',
  showValue = false,
}: StarRatingProps) {
  const isInteractive = !!onRate;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating;

        return (
          <button
            key={star}
            type="button"
            onClick={() => onRate?.(star)}
            disabled={!isInteractive}
            className={`${
              isInteractive
                ? 'cursor-pointer hover:scale-110 transition-transform duration-150'
                : 'cursor-default'
            } focus:outline-none disabled:cursor-default`}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            <svg
              className={`${SIZE_CLASSES[size]} transition-colors duration-200 ${
                isFilled ? 'text-gold-400' : 'text-neutral-600'
              } ${isInteractive && !isFilled ? 'hover:text-gold-300' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={STAR_PATH} />
            </svg>
          </button>
        );
      })}

      {/* Optional numeric value display */}
      {showValue && rating > 0 && (
        <span className="ml-2 text-sm text-neutral-400 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
