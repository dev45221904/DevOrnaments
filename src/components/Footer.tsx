/**
 * Footer Component
 *
 * Site-wide footer with business info, quick navigation links,
 * and copyright. Gold accent on dark background.
 */

import { Link } from 'react-router-dom';
import {
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_PHONE,
} from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* -- Business Info -- */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              {BUSINESS_NAME}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Trusted wholesaler of premium silver and gold ornaments
              with over 20 years of industry experience.
            </p>
            <p className="text-neutral-500 text-sm">
              {BUSINESS_ADDRESS.full}
            </p>
          </div>

          {/* -- Quick Links -- */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/silver', label: 'Silver Ornaments' },
                { path: '/gold', label: 'Gold Ornaments' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-neutral-400 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* -- Contact Info -- */}
          <div>
            <h3 className="text-gold-400 font-bold text-lg mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <p>
                <span className="text-neutral-500">Phone:</span>{' '}
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {BUSINESS_PHONE}
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Address:</span>{' '}
                {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state}
              </p>
              <Link
                to="/contact"
                className="inline-block mt-3 px-5 py-2 border border-gold-400 text-gold-400 rounded-lg text-sm font-medium hover:bg-gold-400 hover:text-neutral-900 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* -- Bottom Bar -- */}
        <div className="mt-10 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
