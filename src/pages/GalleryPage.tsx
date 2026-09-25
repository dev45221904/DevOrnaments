/**
 * Gallery Page
 *
 * Placeholder gallery grid layout for showcasing ornament images.
 * Ready for future image uploads. Uses a masonry-style
 * grid with gold-bordered placeholder cards.
 */

export default function GalleryPage() {
  /** Placeholder items with varying aspect ratios for visual interest */
  const placeholders = [
    { id: 1, aspect: 'aspect-square', label: 'Silver Bangles' },
    { id: 2, aspect: 'aspect-[3/4]', label: 'Gold Chook Collection' },
    { id: 3, aspect: 'aspect-square', label: 'Rhodium Bangles' },
    { id: 4, aspect: 'aspect-[4/3]', label: 'Diamond Chook' },
    { id: 5, aspect: 'aspect-[3/4]', label: 'Traditional Payals' },
    { id: 6, aspect: 'aspect-square', label: 'RPT Chains' },
    { id: 7, aspect: 'aspect-[4/3]', label: 'Gents Kada' },
    { id: 8, aspect: 'aspect-square', label: 'Ladies Bracelets' },
    { id: 9, aspect: 'aspect-[3/4]', label: 'Kamar Aankda' },
  ];

  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold-400)_0%,_transparent_50%)] opacity-[0.04]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-xs font-medium text-gold-400 tracking-wider uppercase mb-4">
              Gallery
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
              Our Gallery
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              A visual showcase of our finest silver and gold ornaments.
              Each piece represents decades of expertise and passion for
              fine craftsmanship.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </section>

      {/* Gallery grid - Masonry-style layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className={`${item.aspect} break-inside-avoid bg-neutral-800/50 border border-neutral-700/50 rounded-xl overflow-hidden relative group hover:border-gold-400/30 transition-all duration-300`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <svg
                  className="w-12 h-12 text-neutral-700 group-hover:text-gold-400/30 transition-colors duration-300 mb-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <p className="text-sm text-neutral-500 text-center font-medium">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Image coming soon
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            More images will be added soon. Contact us to see our full
            catalog.
          </p>
        </div>
      </section>
    </main>
  );
}
