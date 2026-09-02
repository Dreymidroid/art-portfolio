import React from 'react';
import { Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SeriesUnknownHeroes({ onOpenLightbox }) {
  const seriesData = portfolioData.series.find((s) => s.id === 'unknown-heroes');
  if (!seriesData) return null;

  return (
    <section id="unknown-heroes" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#0d1c14]">
      <div className="max-w-7xl mx-auto">
        {/* Series Header */}
        <div className="mb-14">
          <span className="font-script text-3xl sm:text-4xl text-[#A3B899] block mb-1">
            Series 01
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-[0.12em] uppercase">
            {seriesData.title}
          </h2>
          <div className="w-20 h-0.5 bg-[#A3B899] mt-3" />
        </div>

        {/* Part 1: Framed Gallery Wall (Fine Art Museum Presentation) */}
        <div className="mb-16 bg-[#112419] border border-[#244c35] p-6 sm:p-12 shadow-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A3B899] mb-8 text-center sm:text-left">
            Exhibition Wall — The Framed Archives
          </div>

          {/* Top row: 4 framed prints with authentic white gallery matting */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center mb-10">
            {seriesData.framedPieces.slice(0, 4).map((piece, i) => (
              <div
                key={piece.id}
                onClick={() => onOpenLightbox && onOpenLightbox(piece)}
                className="group cursor-pointer art-frame bg-white flex flex-col items-center justify-center p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={piece.src}
                    alt={piece.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <span className="mt-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase text-center truncate w-full">
                  Plate #{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Middle row: 3 framed prints */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center max-w-4xl mx-auto">
            {seriesData.framedPieces.slice(4).map((piece, i) => (
              <div
                key={piece.id}
                onClick={() => onOpenLightbox && onOpenLightbox(piece)}
                className="group cursor-pointer art-frame bg-white flex flex-col items-center justify-center p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={piece.src}
                    alt={piece.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <span className="mt-2 text-[10px] text-zinc-500 font-mono tracking-widest uppercase text-center truncate w-full">
                  Plate #{i + 5}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Curatorial Artist Statement */}
        <div className="my-16 max-w-4xl mx-auto text-center px-4">
          <div className="space-y-4">
            {seriesData.statement.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-xl text-[#F5F5F0]/90 font-light leading-relaxed tracking-wide italic"
              >
                "{paragraph}"
              </p>
            ))}
          </div>
          <div className="w-12 h-px bg-[#A3B899] mx-auto mt-8" />
        </div>

        {/* Part 2: Documentary Street Photography Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#244c35]/60">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A3B899]">
              Documentary Chronicles — Everyday Lives
            </span>
            <span className="text-xs text-white/40">4 Photographs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seriesData.documentaryGrid.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onOpenLightbox && onOpenLightbox(doc)}
                className="group relative cursor-pointer bg-[#112419] border border-[#244c35] p-3 shadow-xl hover:border-[#A3B899] transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black relative">
                  <img
                    src={doc.src}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-display font-bold text-sm text-white tracking-wide">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-[#A3B899] font-light mt-0.5">
                    {doc.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
