/**
 * Header Component
 *
 * Sticky navigation header with the Dev Ornaments logo and
 * responsive navigation menu. Uses a hamburger menu on mobile.
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_NAME } from '../data/businessInfo';

/** Navigation links configuration */
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/silver', label: 'Silver Ornaments' },
  { path: '/gold', label: 'Gold Ornaments' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
  { path: '/ratings', label: 'Ratings' },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* -- Logo -- */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            {/* Gold diamond icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-[55deg] transition-transform duration-300">
              <span className="text-neutral-900 font-bold text-sm sm:text-base -rotate-45">
                D
              </span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-gold-400 tracking-tight">
                {BUSINESS_NAME}
              </span>
              <span className="hidden sm:block text-[10px] text-neutral-400 tracking-widest uppercase">
                Since 2004
              </span>
            </div>
          </Link>

          {/* -- Desktop Navigation -- */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-gold-400/10'
                      : 'text-neutral-300 hover:text-gold-400 hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* -- Mobile Menu Button -- */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-400 hover:bg-neutral-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Hamburger / Close icon using SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* -- Mobile Navigation Menu -- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-400 bg-gold-400/10'
                      : 'text-neutral-300 hover:text-gold-400 hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
