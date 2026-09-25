/**
 * Rating system utilities using localStorage.
 *
 * All ratings are stored under a single localStorage key
 * as a JSON array. Each rating is tied to a product by productId.
 */

import type { Rating } from '../types';

/** localStorage key for all ratings data */
const STORAGE_KEY = 'devornaments_ratings';

/**
 * Retrieve all ratings from localStorage.
 * Returns an empty array if no ratings exist or data is corrupted.
 */
function getAllRatings(): Rating[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Rating[];
  } catch {
    return [];
  }
}

/**
 * Save the full ratings array to localStorage.
 */
function saveAllRatings(ratings: Rating[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
}

/**
 * Get all ratings for a specific product, sorted by most recent first.
 */
export function getRatings(productId: string): Rating[] {
  return getAllRatings()
    .filter((r) => r.productId === productId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Add a new rating for a product.
 * Generates a unique ID and timestamps the rating automatically.
 */
export function addRating(
  productId: string,
  stars: number,
  comment: string,
  name: string
): Rating {
  const rating: Rating = {
    id: `${productId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    productId,
    stars: Math.min(5, Math.max(1, Math.round(stars))),
    comment: comment.trim(),
    name: name.trim(),
    date: new Date().toISOString(),
  };

  const all = getAllRatings();
  all.push(rating);
  saveAllRatings(all);

  return rating;
}

/**
 * Calculate the average star rating for a product.
 * Returns 0 if no ratings exist.
 */
export function getAverageRating(productId: string): number {
  const ratings = getRatings(productId);
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, r) => acc + r.stars, 0);
  return Math.round((sum / ratings.length) * 10) / 10;
}

/**
 * Get the total number of ratings for a product.
 */
export function getRatingCount(productId: string): number {
  return getRatings(productId).length;
}
