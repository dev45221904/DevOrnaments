/**
 * HeroSection Component
 *
 * Full-width hero banner for the home page.
 * Features the main headline, business description,
 * and call-to-action buttons with a premium dark + gold aesthetic.
 */

import { Link } from 'react-router-dom';
import {
  BUSINESS_TAGLINE,
  BUSINESS_SHORT_DESCRIPTION,
} from '../data/businessInfo';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-400)_0%,_transparent_50%)] opacity-[0.07]" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-400/10 border border-gold-400/20 rounded-full mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">
              Established Since 2004
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-50 leading-tight mb-6 animate-slide-up">
            {BUSINESS_TAGLINE.split('Fine').map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                    Fine
                  </span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10 animate-slide-up max-w-2xl mx-auto">
            {BUSINESS_SHORT_DESCRIPTION}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link
              to="/silver"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-neutral-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-200 hover:shadow-gold-400/30 text-sm"
            >
              Explore Silver Collection
            </Link>
            <Link
              to="/gold"
              className="w-full sm:w-auto px-8 py-3.5 border border-gold-400/50 text-gold-400 font-semibold rounded-lg hover:bg-gold-400/10 transition-all duration-200 text-sm"
            >
              Explore Gold Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
