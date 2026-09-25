/**
 * RatingForm Component
 *
 * Clean form for submitting a product rating.
 * Includes name field, star selection, and comment textarea.
 * No icons or emojis - professional styling only.
 */

import { useState } from 'react';
import StarRating from './StarRating';

interface RatingFormProps {
  /** Called when the form is submitted with valid data */
  onSubmit: (name: string, stars: number, comment: string) => void;
}

export default function RatingForm({ onSubmit }: RatingFormProps) {
  const [name, setName] = useState('');
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || stars === 0) return;

    onSubmit(name.trim(), stars, comment.trim());

    // Reset form and show confirmation
    setName('');
    setStars(0);
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isValid = name.trim().length > 0 && stars > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-lg font-semibold text-neutral-100">
        Leave a Rating
      </h3>

      {/* Success message */}
      {submitted && (
        <div className="p-3 bg-gold-400/10 border border-gold-400/30 rounded-lg text-gold-400 text-sm animate-fade-in">
          Your rating has been submitted. Thank you!
        </div>
      )}

      {/* Name input */}
      <div>
        <label
          htmlFor="rating-name"
          className="block text-sm font-medium text-neutral-300 mb-1.5"
        >
          Your Name
        </label>
        <input
          id="rating-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors text-sm"
          required
        />
      </div>

      {/* Star selection */}
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Rating
        </label>
        <StarRating rating={stars} onRate={setStars} size="lg" />
        {stars === 0 && (
          <p className="text-xs text-neutral-500 mt-1">
            Select a star rating
          </p>
        )}
      </div>

      {/* Comment textarea */}
      <div>
        <label
          htmlFor="rating-comment"
          className="block text-sm font-medium text-neutral-300 mb-1.5"
        >
          Comment (optional)
        </label>
        <textarea
          id="rating-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          rows={3}
          className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors text-sm resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          isValid
            ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-neutral-900 hover:from-gold-400 hover:to-gold-300 shadow-lg shadow-gold-500/20'
            : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
        }`}
      >
        Submit Rating
      </button>
    </form>
  );
}
