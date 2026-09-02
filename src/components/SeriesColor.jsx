import React from 'react';
import { Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SeriesColor({ onOpenLightbox }) {
  const seriesData = portfolioData.series.find((s) => s.id === 'color');
  if (!seriesData) return null;

  return (
    <section id="color" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#0d1c14]">
      <div className="max-w-7xl mx-auto">
        {/* Header: Script 'Color' + Curatorial statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A3B899] block mb-2">
              Series 03 — Chromatic Resonance
            </span>
            <h2 className="font-script text-8xl sm:text-9xl text-white font-normal leading-none -rotate-2">
              {seriesData.title}
            </h2>
            <div className="w-20 h-0.5 bg-[#A3B899] mt-3" />
          </div>

          <div className="lg:col-span-7 space-y-3 text-[#D1D5DB] font-light text-base sm:text-lg leading-relaxed">
            {seriesData.statement.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Phase 1: Upper Chromatic Artworks (7 pieces) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#244c35]/60">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A3B899]">
              Part I — Masked Horizons & Azure Tensions
            </span>
            <span className="text-xs text-white/40">7 Studies</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {seriesData.upperArtworks.map((piece, i) => (
              <div
                key={piece.id}
                onClick={() => onOpenLightbox && onOpenLightbox(piece)}
                className="group relative cursor-pointer bg-[#112419] border border-[#244c35] p-2 hover:border-[#A3B899] shadow-lg transition-all duration-300"
              >
                <div className="aspect-[3/4.5] overflow-hidden bg-black relative">
                  <img
                    src={piece.src}
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-white/80 font-display truncate">
                  {piece.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2: Full-Length Standing Pattern Figures (4 pieces) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#244c35]/60">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A3B899]">
              Part II — Patterned Figures & Vibrant Robes
            </span>
            <span className="text-xs text-white/40">4 Full-Length Compositions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {seriesData.standingFigures.map((fig, i) => (
              <div
                key={fig.id}
                onClick={() => onOpenLightbox && onOpenLightbox(fig)}
                className="group relative cursor-pointer bg-[#112419] border border-[#244c35] p-3 shadow-2xl hover:border-white transition-all duration-500"
              >
                {/* Full length figure canvas */}
                <div className="aspect-[3/5] overflow-hidden bg-[#0a1710] relative flex items-center justify-center">
                  <img
                    src={fig.src}
                    alt={fig.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-display font-medium">
                      Expand full view
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    {fig.title}
                  </h4>
                  <span className="text-xs font-mono text-[#A3B899] ml-2">
                    Fig 0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
