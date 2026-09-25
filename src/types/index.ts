/**
 * Core type definitions for Dev Ornaments website.
 * All shared interfaces are defined here for consistency across the app.
 */

/** Represents a product in the catalog (silver or gold ornament) */
export interface Product {
  /** Unique identifier used in URLs and localStorage keys */
  id: string;
  /** Display name of the product */
  name: string;
  /** Short description of the product */
  description: string;
  /** Category: silver or gold */
  category: 'silver' | 'gold';
  /** Available sizes (e.g., "2/2", "2/4") */
  sizes?: string[];
  /** Whether this product has expandable sub-categories to be added later */
  expandable?: boolean;
  /** Note for expandable products (e.g., "Sub-categories to be customized") */
  expandableNote?: string;
  /** Image URL - placeholder if not set */
  image?: string;
  /** Price display text */
  price?: string;
}

/** Represents a single user rating/review for a product */
export interface Rating {
  /** Unique rating identifier */
  id: string;
  /** The product this rating belongs to */
  productId: string;
  /** Star rating from 1 to 5 */
  stars: number;
  /** Review comment text */
  comment: string;
  /** Reviewer's name */
  name: string;
  /** ISO date string of when the rating was submitted */
  date: string;
}

/** Contact form submission data */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
