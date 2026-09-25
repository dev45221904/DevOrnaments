/**
 * Contact Page
 *
 * Business contact information including address, phone/WhatsApp,
 * contact form, and Google Maps embed.
 */

import { useState } from 'react';
import type { ContactFormData } from '../types';
import {
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_PHONE,
  BUSINESS_WHATSAPP,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK,
} from '../data/businessInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server.
    // For now, show a success message.
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Page header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/50 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-400)_0%,_transparent_50%)] opacity-[0.05]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-xs font-medium text-gold-400 tracking-wider uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
              Contact Us
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Have questions about our products or want to place an order?
              Reach out to us and our team will be happy to assist you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left column: Contact information */}
          <div className="space-y-8">

            {/* Business address */}
            <div className="p-6 bg-neutral-800/30 border border-neutral-700/30 rounded-xl">
              <h2 className="text-lg font-semibold text-neutral-100 mb-4">
                Business Address
              </h2>
              <div className="text-neutral-400 text-sm leading-relaxed space-y-1">
                <p className="font-medium text-neutral-200">
                  {BUSINESS_NAME}
                </p>
                <p>{BUSINESS_ADDRESS.line1}</p>
                <p>{BUSINESS_ADDRESS.line2}</p>
                <p>{BUSINESS_ADDRESS.line3}</p>
                <p>
                  {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state}{' '}
                  {BUSINESS_ADDRESS.pincode}
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-gold-400 hover:text-gold-300 font-medium transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div className="p-6 bg-neutral-800/30 border border-neutral-700/30 rounded-xl">
              <h2 className="text-lg font-semibold text-neutral-100 mb-4">
                Phone / WhatsApp
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="text-neutral-200 hover:text-gold-400 transition-colors font-medium"
                  >
                    {BUSINESS_PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-200 hover:text-gold-400 transition-colors font-medium"
                  >
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-neutral-700/30">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dev Ornaments Location - Rajkot, Gujarat"
                className="w-full"
              />
            </div>
          </div>

          {/* Right column: Contact form */}
          <div className="p-6 sm:p-8 bg-neutral-800/30 border border-neutral-700/30 rounded-xl h-fit">
            <h2 className="text-lg font-semibold text-neutral-100 mb-6">
              Send Us a Message
            </h2>

            {/* Success message */}
            {submitted && (
              <div className="p-3 bg-gold-400/10 border border-gold-400/30 rounded-lg text-gold-400 text-sm mb-6 animate-fade-in">
                Thank you for your message. We will get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-neutral-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors text-sm"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-neutral-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors text-sm"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-neutral-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors text-sm resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-neutral-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-300 shadow-lg shadow-gold-500/20 transition-all duration-200 hover:shadow-gold-400/30 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
