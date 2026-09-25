/**
 * App Component
 *
 * Root application component with React Router setup.
 * All routes are defined here with a shared Header/Footer layout.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Page components
import HomePage from './pages/HomePage';
import SilverOrnamentsPage from './pages/SilverOrnamentsPage';
import GoldOrnamentsPage from './pages/GoldOrnamentsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import RatingsPage from './pages/RatingsPage';

/**
 * ScrollToTop - scrolls to the top of the page on route change.
 * Ensures smooth navigation between pages.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Layout wrapper providing the consistent Header + Footer
 * around all page content.
 */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Product listing pages */}
          <Route path="/silver" element={<SilverOrnamentsPage />} />
          <Route path="/gold" element={<GoldOrnamentsPage />} />

          {/* Individual product detail page (dynamic route) */}
          <Route path="/product/:productId" element={<ProductDetailPage />} />

          {/* Gallery page */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Contact page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Ratings overview page */}
          <Route path="/ratings" element={<RatingsPage />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-2xl font-bold text-neutral-100 mb-4">
                  Page Not Found
                </h1>
                <p className="text-neutral-400">
                  The page you are looking for does not exist.
                </p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
