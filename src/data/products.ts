/**
 * Product catalog data for Dev Ornaments.
 *
 * TO ADD/EDIT PRODUCTS:
 * Simply add or modify objects in the arrays below.
 * Each product needs a unique `id` (used in URLs).
 * Products are displayed in the order they appear here.
 */

import type { Product } from '../types';

/* ============================================================
 * SILVER ORNAMENTS
 * All silver product categories with their sizes/variants
 * ============================================================ */
export const silverProducts: Product[] = [
  {
    id: 'rhodium-bangles-ladies',
    name: 'Rhodium Bangles Ladies',
    description: 'Premium rhodium-plated silver bangles for women, crafted with precision and finished to perfection. Available in multiple sizes for the ideal fit.',
    category: 'silver',
    sizes: ['2/2', '2/4', '2/6', '2/8'],
    price: 'Contact for Price',
  },
  {
    id: 'micro-bangles-ladies',
    name: 'Micro Bangles Ladies',
    description: 'Delicately designed micro silver bangles for women. Lightweight yet durable, perfect for everyday elegance.',
    category: 'silver',
    sizes: ['2/2', '2/4', '2/6', '2/8'],
    price: 'Contact for Price',
  },
  {
    id: 'gents-kada',
    name: 'Gents Kada',
    description: 'Bold and masculine silver kada for men. Solid craftsmanship with a contemporary design that suits all occasions.',
    category: 'silver',
    expandable: true,
    expandableNote: 'Sizes to be added',
    price: 'Contact for Price',
  },
  {
    id: 'ladies-kada',
    name: 'Ladies Kada',
    description: 'Elegant silver kada for women, combining traditional artistry with modern aesthetics. A timeless addition to any collection.',
    category: 'silver',
    expandable: true,
    expandableNote: 'Sizes to be added',
    price: 'Contact for Price',
  },
  {
    id: 'ladies-fancy-bracelets',
    name: 'Ladies Fancy Bracelets',
    description: 'Intricately designed fancy silver bracelets for women. Each piece showcases exceptional craftsmanship and attention to detail.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'gents-attha-bracelets',
    name: 'Gents Attha Bracelets',
    description: 'Sturdy and stylish Attha bracelets for men. Crafted from fine silver with a robust build that stands the test of time.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'bacha-bracelets',
    name: 'Bacha Bracelets',
    description: 'Beautifully crafted silver bracelets designed for children. Lightweight, safe, and perfect for young ones.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'payals',
    name: 'Payals',
    description: 'Traditional silver anklets with melodious charm. Available in multiple designs from classic to contemporary.',
    category: 'silver',
    expandable: true,
    expandableNote: 'Categories to be customized',
    price: 'Contact for Price',
  },
  {
    id: 'chains',
    name: 'Chains',
    description: 'Fine silver chains in various patterns and weights. From delicate everyday wear to statement pieces.',
    category: 'silver',
    expandable: true,
    expandableNote: 'Categories to be customized',
    price: 'Contact for Price',
  },
  {
    id: 'rpt-chain',
    name: 'RPT Chain',
    description: 'Precision-made RPT silver chains known for their distinctive link pattern and exceptional durability.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'rpt-bracelets',
    name: 'RPT Bracelets',
    description: 'RPT pattern silver bracelets combining unique design with robust construction. A signature piece for any collection.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'jodiya',
    name: 'Jodiya',
    description: 'Traditional Jodiya silver ornaments, handcrafted with heritage techniques passed down through generations.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'tode-wale',
    name: 'Tode-wale',
    description: 'Classic Tode-wale silver ornaments featuring intricate detailing and a bold aesthetic that commands attention.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'kadli',
    name: 'Kadli',
    description: 'Elegant Kadli silver bangles, a staple of traditional jewelry. Crafted with care for lasting beauty.',
    category: 'silver',
    price: 'Contact for Price',
  },
  {
    id: 'kamar-aankda',
    name: 'Kamar Aankda',
    description: 'Traditional Kamar Aankda silver waist ornaments. A statement piece that celebrates cultural heritage with fine craftsmanship.',
    category: 'silver',
    price: 'Contact for Price',
  },
];

/* ============================================================
 * GOLD ORNAMENTS
 * All gold product categories with their variants
 * ============================================================ */
export const goldProducts: Product[] = [
  {
    id: 'chook',
    name: 'Chook',
    description: 'Classic gold Chook ornaments crafted with premium gold. Timeless designs that reflect tradition and luxury.',
    category: 'gold',
    price: 'Contact for Price',
  },
  {
    id: 'chook-with-diamond',
    name: 'Chook with Diamond',
    description: 'Exquisite gold Chook ornaments embellished with genuine diamonds. The perfect blend of gold and precious stones.',
    category: 'gold',
    price: 'Contact for Price',
  },
  {
    id: 'chook-with-patch',
    name: 'Chook with Patch',
    description: 'Gold Chook ornaments featuring distinctive patch work designs. A unique fusion of traditional and contemporary artistry.',
    category: 'gold',
    price: 'Contact for Price',
  },
  {
    id: '84-touch',
    name: '84 Touch',
    description: 'Premium 84 Touch gold ornaments with superior purity. Crafted for discerning customers who demand the finest quality.',
    category: 'gold',
    expandable: true,
    expandableNote: 'Sub-categories to be customized',
    price: 'Contact for Price',
  },
  {
    id: '92-touch',
    name: '92 Touch',
    description: 'Finest 92 Touch gold ornaments representing the highest standard of gold purity. Exceptional craftsmanship for exceptional occasions.',
    category: 'gold',
    expandable: true,
    expandableNote: 'Sub-categories to be customized',
    price: 'Contact for Price',
  },
];

/** All products combined for easy lookup */
export const allProducts: Product[] = [...silverProducts, ...goldProducts];

/** Find a product by its unique ID */
export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
