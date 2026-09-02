import React from 'react';
import { Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SeriesGele({ onOpenLightbox }) {
  const seriesData = portfolioData.series.find((s) => s.id === 'gele');
  if (!seriesData) return null;

  return (
    <section id="gele" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#112419]">
      <div className="max-w-7xl mx-auto">
        {/* Header: Script Title 'Gele' */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A3B899] mb-2">
            Series 02 — Cultural Identity
          </span>
          <h2 className="font-script text-7xl sm:text-9xl text-white font-normal leading-none -rotate-1 hover:text-[#A3B899] transition-colors">
            {seriesData.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#A3B899] my-6" />

          {/* Statement */}
          <div className="max-w-3xl mx-auto">
            {seriesData.statement.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed tracking-wide"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Gallery of 7 Gele Masterpieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* First 3 pieces */}
          {seriesData.pieces.slice(0, 3).map((piece, i) => (
            <div
              key={piece.id}
              onClick={() => onOpenLightbox && onOpenLightbox(piece)}
              className="group relative cursor-pointer bg-[#0e1e15] border border-[#244c35] p-3 shadow-xl hover:border-[#A3B899] transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black relative">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-xs text-white font-bold tracking-wider">
                  {piece.title}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A3B899]">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}

          {/* 4th piece - tall spotlight */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(seriesData.pieces[3])}
            className="group relative cursor-pointer bg-[#0e1e15] border border-[#244c35] p-3 shadow-xl hover:border-[#A3B899] transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="aspect-[3/4] overflow-hidden bg-black relative">
              <img
                src={seriesData.pieces[3].src}
                alt={seriesData.pieces[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-display text-xs text-white font-bold tracking-wider">
                {seriesData.pieces[3].title}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A3B899]">
                04
              </span>
            </div>
          </div>

          {/* Remaining 3 pieces */}
          {seriesData.pieces.slice(4).map((piece, i) => (
            <div
              key={piece.id}
              onClick={() => onOpenLightbox && onOpenLightbox(piece)}
              className="group relative cursor-pointer bg-[#0e1e15] border border-[#244c35] p-3 shadow-xl hover:border-[#A3B899] transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black relative">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-xs text-white font-bold tracking-wider">
                  {piece.title}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A3B899]">
                  0{i + 5}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
