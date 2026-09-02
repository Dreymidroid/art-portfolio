import React from 'react';
import { Award, BookOpen, Camera, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation({ onOpenLightbox }) {
  const { artist } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 border-b border-[#244c35]/40 bg-[#112419]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text credentials & background */}
          <div className="lg:col-span-7 space-y-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-5 h-5 text-[#A3B899]" />
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-[0.15em] uppercase">
                  EXPERIENCE
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#D1D5DB] font-light leading-relaxed max-w-xl">
                {artist.experience}
              </p>

              {/* Pillars of independent practice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border border-[#244c35] bg-[#0d1c14]">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A3B899] block mb-1">
                    Direction
                  </span>
                  <span className="text-sm text-white font-medium">
                    Creative & Visual Storytelling
                  </span>
                </div>
                <div className="p-4 border border-[#244c35] bg-[#0d1c14]">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A3B899] block mb-1">
                    Technique
                  </span>
                  <span className="text-sm text-white font-medium">
                    Lighting, Mood & Composition
                  </span>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-8 border-t border-[#244c35]">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-[#A3B899]" />
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-[0.15em] uppercase">
                  EDUCATION
                </h2>
              </div>
              
              <div className="bg-[#0e1e15] border border-[#244c35] p-6 max-w-xl shadow-xl">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {artist.education.degree}
                  </h3>
                  <span className="text-xs font-mono text-[#A3B899] px-2.5 py-1 border border-[#244c35] bg-[#112419]">
                    {artist.education.years}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#D1D5DB] font-light">
                  {artist.education.institution}
                </p>
                <div className="mt-4 pt-4 border-t border-[#244c35]/50 flex items-center gap-2 text-xs text-[#A3B899]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Foundational training in classical painting, color theory & visual composition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Portrait Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox({
                id: 'exp-portrait',
                src: artist.expPortrait,
                title: 'Reflective Practice',
                subtitle: 'Fine Art Studio Study'
              })}
              className="group relative cursor-pointer max-w-sm w-full"
            >
              <div className="bg-[#0a1710] border border-[#244c35] p-3 shadow-2xl transition-all duration-500 group-hover:border-[#A3B899]">
                <div className="aspect-[3/5] overflow-hidden bg-black relative">
                  <img
                    src={artist.expPortrait}
                    alt="Creative Practice"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A3B899]">
                      Artistic Foundations
                    </span>
                    <p className="text-xs text-white font-display mt-0.5">
                      Translating Feeling Into Form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
