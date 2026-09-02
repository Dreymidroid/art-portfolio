import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  const { artist } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 border-b border-[#244c35]/40 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a3827]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Vertical Hero Artwork Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div 
            onClick={() => onOpenLightbox && onOpenLightbox({
              id: 'hero-portrait',
              src: artist.heroPortrait,
              title: 'Ibukunoluwa Shittu',
              subtitle: 'Fine Art Photographer — Visual Storyteller'
            })}
            className="group relative cursor-pointer max-w-[340px] sm:max-w-[400px] w-full"
          >
            {/* Framed image container with subtle depth */}
            <div className="relative overflow-hidden bg-black/40 border border-[#244c35] p-3 transition-transform duration-500 group-hover:scale-[1.01] shadow-2xl">
              <div className="overflow-hidden aspect-[3/4.6]">
                <img
                  src={artist.heroPortrait}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#A3B899]">
                <span>Self Portrait</span>
                <span className="text-white/60">01 / Fine Art</span>
              </div>
            </div>

            {/* Subtle glow border effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Monumental Typographic Branding */}
        <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-[#244c35] bg-[#142c1e]/60 text-xs tracking-[0.25em] uppercase text-[#A3B899]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Visual Storyteller & Artist
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[0.08em] leading-[0.92] text-white mb-4 uppercase">
            IBUKUNOLUWA
            <br />
            <span className="text-white">SHITTU</span>
          </h1>

          <p className="font-script text-3xl sm:text-4xl text-[#A3B899] mb-8 lowercase tracking-wide">
            fine art photographer
          </p>

          <p className="text-sm sm:text-base text-[#D1D5DB] max-w-xl leading-relaxed mb-10 font-light">
            Exploring emotion, identity, and the quiet moments that often go unnoticed through a visual language of minimalism, mood, and profound texture.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#112419] font-display font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#A3B899] transition-all duration-300 shadow-xl"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#244c35] text-[#F5F5F0] hover:text-white hover:border-white font-display text-sm tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>Explore Works</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          {/* Bottom metadata tags */}
          <div className="mt-14 pt-8 border-t border-[#244c35]/40 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs uppercase tracking-widest text-[#A3B899]">
            <div>
              <span className="block text-white/40 text-[10px] mb-1">Location</span>
              <span className="text-white font-medium">Nigeria</span>
            </div>
            <div>
              <span className="block text-white/40 text-[10px] mb-1">Focus</span>
              <span className="text-white font-medium">Fine Art & Portraiture</span>
            </div>
            <div>
              <span className="block text-white/40 text-[10px] mb-1">Status</span>
              <span className="text-emerald-400 font-medium">Open for Collabs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
