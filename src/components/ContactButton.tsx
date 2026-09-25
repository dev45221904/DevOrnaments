/**
 * ContactButton Component
 *
 * Reusable "Contact for Order" button that navigates
 * to the contact page. Used on product detail pages.
 */

import { Link } from 'react-router-dom';

interface ContactButtonProps {
  /** Optional custom label text */
  label?: string;
  /** Optional additional CSS classes */
  className?: string;
}

export default function ContactButton({
  label = 'Contact for Order',
  className = '',
}: ContactButtonProps) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-neutral-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-200 hover:shadow-gold-400/30 text-sm ${className}`}
    >
      {label}
    </Link>
  );
}
