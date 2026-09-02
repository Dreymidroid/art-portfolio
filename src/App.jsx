import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWorks from './components/FeaturedWorks';
import SeriesUnknownHeroes from './components/SeriesUnknownHeroes';
import SeriesGele from './components/SeriesGele';
import SeriesColor from './components/SeriesColor';
import ExperienceEducation from './components/ExperienceEducation';
import ContactFooter from './components/ContactFooter';
import LightboxModal from './components/LightboxModal';
import './App.css';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleOpenLightbox = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseLightbox = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="min-h-screen bg-[#112419] text-[#F5F5F0] relative selection:bg-[#244c35] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Exhibition Content */}
      <main>
        <Hero onOpenLightbox={handleOpenLightbox} />
        <About onOpenLightbox={handleOpenLightbox} />
        <FeaturedWorks onOpenLightbox={handleOpenLightbox} />
        <SeriesUnknownHeroes onOpenLightbox={handleOpenLightbox} />
        <SeriesGele onOpenLightbox={handleOpenLightbox} />
        <SeriesColor onOpenLightbox={handleOpenLightbox} />
        <ExperienceEducation onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Footer & Contact */}
      <ContactFooter onOpenLightbox={handleOpenLightbox} />

      {/* High-Resolution Artwork Lightbox Modal */}
      {selectedArtwork && (
        <LightboxModal
          item={selectedArtwork}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
