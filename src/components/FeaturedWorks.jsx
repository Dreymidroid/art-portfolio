import React, { useState } from 'react';
import { Maximize2, Sparkles, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedWorks({ onOpenLightbox }) {
  const { previousWorks } = portfolioData;
  const [activeItem, setActiveItem] = useState(previousWorks.featured);

  return (
    <section id="works" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#112419]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: 'Previous WORKS' */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-baseline gap-3">
            <span className="font-script text-5xl sm:text-6xl text-[#A3B899] -rotate-2">
              {previousWorks.scriptPrefix}
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-[0.15em] uppercase">
              {previousWorks.mainTitle}
            </h2>
          </div>
          <div className="w-24 h-0.5 bg-[#A3B899] mt-3" />
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Large Display Area */}
          <div className="lg:col-span-8">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(activeItem)}
              className="group relative cursor-pointer overflow-hidden border border-[#244c35] bg-black/60 shadow-2xl p-4 transition-all duration-500 hover:border-[#A3B899]"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#0a1710] flex items-center justify-center">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="w-full h-full object-contain sm:object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Item Details */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#A3B899] block mb-1">
                      {activeItem.series || 'Selected Work'}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                      {activeItem.title}
                    </h3>
                    {activeItem.description && (
                      <p className="text-sm text-[#D1D5DB] mt-1 max-w-md hidden sm:block">
                        {activeItem.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/70 hidden sm:inline-flex items-center gap-1">
                    <span>Fullscreen</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Thumbnail Selector Strip */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#244c35]/60">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A3B899] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Curated Selection
              </span>
              <span className="text-xs text-white/50">
                {previousWorks.thumbnails.length + 1} Artworks
              </span>
            </div>

            {/* Thumbnails grid */}
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
              {/* Featured piece thumbnail */}
              <button
                onClick={() => setActiveItem(previousWorks.featured)}
                className={`relative aspect-square overflow-hidden border transition-all duration-300 p-1 text-left ${
                  activeItem.src === previousWorks.featured.src
                    ? 'border-white ring-1 ring-white'
                    : 'border-[#244c35] opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={previousWorks.featured.src}
                  alt={previousWorks.featured.title}
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Other thumbnails */}
              {previousWorks.thumbnails.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`relative aspect-square overflow-hidden border transition-all duration-300 p-1 text-left ${
                    activeItem.src === item.src
                      ? 'border-white ring-1 ring-white'
                      : 'border-[#244c35] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#244c35]/40 text-xs text-[#A3B899] leading-relaxed">
              Click any piece to preview or enlarge into full resolution lightbox view.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
