<p align="center">
  <img src="public/favicon.svg" alt="Dev Ornaments Logo" width="80" />
</p>

<h1 align="center">Dev Ornaments</h1>

<p align="center">
  <strong>Premium Silver & Gold Ornaments — Wholesale Catalog Website</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#customization">Customization</a> •
  <a href="#license">License</a>
</p>

---

## About

**Dev Ornaments** is the official catalog website for a trusted wholesaler of premium silver and gold ornaments based in **Rajkot, Gujarat, India** — serving the jewelry industry for over **20 years**.

The site showcases the full product catalog (silver bangles, chains, bracelets, kadas, gold chook, and more), features a customer rating system, an image gallery, and a contact page with an embedded Google Maps location — all wrapped in a premium dark-theme UI with gold accents.

---

## Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Hero section with animated CTA, business highlights, and category previews |
| 🪙 **Silver Catalog** | 15+ product categories — rhodium bangles, micro bangles, kadas, chains, payals, and more |
| 🥇 **Gold Catalog** | Chook, diamond chook, patch chook, 84 touch, 92 touch categories |
| 📄 **Product Detail** | Dedicated page per product with description, sizes, and customer ratings |
| ⭐ **Rating System** | Star ratings & reviews stored in `localStorage` — submit, view, and sort ratings |
| 🖼️ **Gallery** | Masonry-style grid layout ready for product photography |
| 📞 **Contact Page** | Business address, phone/WhatsApp links, Google Maps embed, and contact form |
| 📱 **Fully Responsive** | Mobile-first design with hamburger nav and fluid layouts |
| 🎨 **Premium Dark Theme** | Custom gold + neutral color palette, smooth animations, and glassmorphism accents |
| ♿ **Accessible** | Semantic HTML, focus-visible outlines, ARIA labels, and keyboard navigation |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) with [React Compiler](https://react.dev/learn/react-compiler) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-based `@theme` config) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| **Linting** | [ESLint 10](https://eslint.org/) + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/dev19044522/dev-ornaments.git
cd dev-ornaments

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (default: http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Type-check & build for production
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
dev-ornaments/
├── public/
│   ├── favicon.svg           # Site favicon
│   └── icons.svg             # Shared SVG icon sprite
├── src/
│   ├── assets/               # Static assets (images, SVGs)
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx        # Sticky nav with responsive hamburger menu
│   │   ├── Footer.tsx        # Site-wide footer with business info & links
│   │   ├── HeroSection.tsx   # Full-width animated hero banner
│   │   ├── CategoryPreview.tsx   # Silver & Gold category cards
│   │   ├── ProductCard.tsx   # Individual product display card
│   │   ├── ContactButton.tsx # WhatsApp / phone CTA button
│   │   ├── RatingForm.tsx    # Star rating submission form
│   │   ├── RatingList.tsx    # Displays list of user reviews
│   │   └── StarRating.tsx    # Interactive & display star component
│   ├── data/
│   │   ├── businessInfo.ts   # Business name, address, phone, map URLs
│   │   └── products.ts       # Full product catalog (silver + gold)
│   ├── pages/
│   │   ├── HomePage.tsx      # Landing page
│   │   ├── SilverOrnamentsPage.tsx   # Silver product listing
│   │   ├── GoldOrnamentsPage.tsx     # Gold product listing
│   │   ├── ProductDetailPage.tsx     # Single product view + ratings
│   │   ├── GalleryPage.tsx   # Image gallery (masonry grid)
│   │   ├── ContactPage.tsx   # Contact info, form, and map
│   │   └── RatingsPage.tsx   # All ratings overview
│   ├── types/
│   │   └── index.ts          # Shared TypeScript interfaces
│   ├── utils/
│   │   └── ratings.ts        # localStorage-based rating CRUD utilities
│   ├── App.tsx               # Root component with React Router setup
│   ├── main.tsx              # Application entry point
│   └── index.css             # Tailwind v4 config + custom theme tokens
├── index.html                # HTML shell with SEO meta tags
├── vite.config.ts            # Vite + React + Tailwind plugin config
├── tsconfig.json             # TypeScript project references
├── eslint.config.js          # ESLint flat config
└── package.json
```

---

## Customization

### Updating Business Info

All business details are centralized in a single file:

📄 **`src/data/businessInfo.ts`**

```ts
export const BUSINESS_NAME = 'Dev Ornaments';
export const BUSINESS_PHONE = '+91 XXXXX XXXXX';       // ← update
export const BUSINESS_WHATSAPP = '91XXXXXXXXXX';        // ← update
export const BUSINESS_ADDRESS = { /* ... */ };          // ← update
```

### Adding / Editing Products

Products are defined in **`src/data/products.ts`** as simple arrays. To add a new product:

```ts
{
  id: 'my-new-product',          // unique URL-safe ID
  name: 'My New Product',
  description: 'A short description of the product.',
  category: 'silver',            // 'silver' or 'gold'
  sizes: ['S', 'M', 'L'],       // optional
  price: 'Contact for Price',
}
```

### Theming

The color palette is defined via Tailwind v4's `@theme` directive in **`src/index.css`**:

```css
@theme {
  --color-gold-400: #D4A853;    /* primary gold accent */
  --color-neutral-950: #070707; /* darkest background  */
  /* ... full palette */
}
```

Modify the gold or neutral values to rebrand the entire site instantly.

---

## Scripts Reference

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Start Vite dev server with HMR |
| **Build** | `npm run build` | TypeScript check + production build |
| **Preview** | `npm run preview` | Serve the production build locally |
| **Lint** | `npm run lint` | Run ESLint across the project |

---

## License

This project is private. All rights reserved © Dev Ornaments.

---

<p align="center">
  Built with ❤️ in Rajkot, Gujarat
</p>
