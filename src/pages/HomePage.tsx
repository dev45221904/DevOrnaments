/**
 * Home Page
 *
 * Landing page featuring the hero section, business introduction,
 * category previews, and a highlights section.
 */

import HeroSection from '../components/HeroSection';
import CategoryPreview from '../components/CategoryPreview';
import { BUSINESS_DESCRIPTION, YEARS_OF_EXPERIENCE } from '../data/businessInfo';

/** Business highlight stats */
const HIGHLIGHTS = [
  { value: `${YEARS_OF_EXPERIENCE}+`, label: 'Years of Experience' },
  { value: '20+', label: 'Product Categories' },
  { value: '1000+', label: 'Satisfied Clients' },
  { value: '100%', label: 'Quality Assurance' },
] as const;

export default function HomePage() {
  return (
    <main>
      {/* Hero banner */}
      <HeroSection />

      {/* Business introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-6">
            About <span className="text-gold-400">Dev Ornaments</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            {BUSINESS_DESCRIPTION}
          </p>
        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-xl bg-neutral-800/30 border border-neutral-700/30"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">
                {item.value}
              </div>
              <div className="text-sm text-neutral-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* Category previews */}
      <CategoryPreview />

      {/* Why choose us section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-3">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Premium Quality',
              description:
                'Every piece is crafted with the finest materials and undergoes rigorous quality checks to ensure lasting beauty and durability.',
            },
            {
              title: 'Wholesale Pricing',
              description:
                'We offer competitive wholesale rates directly to retailers and businesses, ensuring the best value for bulk orders.',
            },
            {
              title: 'Trusted Heritage',
              description:
                'With over 20 years in the industry, our reputation for reliability, consistency, and craftsmanship speaks for itself.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-neutral-800/30 border border-neutral-700/30 hover:border-gold-400/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-gold-400 rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
