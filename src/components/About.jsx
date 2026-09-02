import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenLightbox }) {
  const { artist } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#0e1e15]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography and Artist Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Header Lockup: Script 'ABOUT' + Display 'ME' */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-script text-6xl sm:text-7xl text-[#A3B899] font-normal leading-none transform -rotate-3">
                About
              </span>
              <span className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-[0.15em] leading-none">
                ME
              </span>
            </div>

            {/* Narrative text paragraphs */}
            <div className="space-y-6 text-[#D1D5DB] font-light text-base sm:text-lg leading-relaxed max-w-xl">
              {artist.aboutStatement.map((paragraph, idx) => (
                <p key={idx} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core artistic tenets bar */}
            <div className="mt-10 pt-8 border-t border-[#244c35] grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white mb-1">01</span>
                <span className="text-xs uppercase tracking-widest text-[#A3B899]">Honest & Human</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white mb-1">02</span>
                <span className="text-xs uppercase tracking-widest text-[#A3B899]">Minimalism & Mood</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white mb-1">03</span>
                <span className="text-xs uppercase tracking-widest text-[#A3B899]">Form & Feeling</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Portrait */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox({
                id: 'about-portrait',
                src: artist.aboutPortrait,
                title: 'Ibukunoluwa Shittu',
                subtitle: 'Fine Art Photographer — Studio Portrait'
              })}
              className="group relative cursor-pointer max-w-md w-full"
            >
              <div className="relative overflow-hidden bg-[#112419] border border-[#244c35] p-3 shadow-2xl transition-all duration-500 group-hover:border-[#A3B899]">
                <div className="overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src={artist.aboutPortrait}
                    alt="Ibukunoluwa Shittu Portrait"
                    className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs tracking-widest uppercase text-[#A3B899]">
                  <span className="font-display">The Storyteller</span>
                  <span className="text-white/40">Studio Session</span>
                </div>
              </div>

              {/* Decorative accent lines */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#A3B899]/30 pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
