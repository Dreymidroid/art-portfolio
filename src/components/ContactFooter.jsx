import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactFooter({ onOpenLightbox }) {
  const { artist } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(artist.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 sm:pt-32 pb-12 px-6 sm:px-8 bg-[#0a1710] text-[#F5F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Blue Artwork + Contact Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-[#244c35]">
          {/* Left Column: Signature Blue Figure Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox({
                id: 'contact-art',
                src: artist.contactPortrait,
                title: 'Azure Solitude',
                subtitle: 'Fine Art Portrait — Contact Finale'
              })}
              className="group relative cursor-pointer max-w-xs sm:max-w-sm w-full"
            >
              <div className="bg-[#112419] border border-[#244c35] p-3 shadow-2xl transition-all duration-500 group-hover:border-[#A3B899]">
                <div className="aspect-[3/5] overflow-hidden bg-black relative">
                  <img
                    src={artist.contactPortrait}
                    alt="Contact Feature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs tracking-widest text-[#A3B899]">
                    <span className="font-display uppercase font-bold">Open For Collabs</span>
                    <span className="font-mono text-[10px]">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details & Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#112419] border border-[#244c35] text-xs font-mono tracking-[0.25em] text-[#A3B899] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Inquiries & Commissions
            </div>

            {/* Header Lockup: 'GET IN TOUCH' */}
            <div className="mb-6">
              <h2 className="font-display font-black text-5xl sm:text-7xl text-white tracking-[0.1em] uppercase leading-none">
                GET IN
                <span className="block font-script text-6xl sm:text-8xl text-[#A3B899] capitalize mt-1 font-normal">
                  touch
                </span>
              </h2>
            </div>

            {/* Direct Email with Copy Action */}
            <div className="w-full max-w-lg mb-10 p-5 bg-[#112419] border border-[#244c35] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3B899] block mb-1">
                  Direct Email
                </span>
                <a
                  href={`mailto:${artist.email}`}
                  className="font-mono text-sm sm:text-base text-white hover:text-[#A3B899] transition-colors break-all"
                >
                  {artist.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/20 hover:border-white text-xs uppercase tracking-widest text-white transition-all bg-black/40 self-end sm:self-auto"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleFormSubmit} className="w-full max-w-lg space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A3B899] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 bg-[#112419] border border-[#244c35] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A3B899] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A3B899] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-4 py-3 bg-[#112419] border border-[#244c35] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A3B899] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#A3B899] mb-1">
                  Project or Inquiry Details
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your exhibition, collaboration, or portrait session..."
                  className="w-full px-4 py-3 bg-[#112419] border border-[#244c35] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A3B899] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#112419] font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#A3B899] transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {messageSent && (
                  <span className="text-xs text-emerald-400 font-medium animate-fade-in">
                    Thank you! Your message has been noted.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50 tracking-wider">
          <div className="flex items-center space-x-3">
            <span className="font-display font-bold text-white uppercase tracking-widest">
              Ibukunoluwa Shittu
            </span>
            <span>•</span>
            <span>All Artworks © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-emerald-400">● Available for Commissions</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors uppercase font-mono text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
