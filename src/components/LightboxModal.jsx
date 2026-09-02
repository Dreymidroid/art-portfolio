import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all rounded-full z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image wrapper */}
        <div className="relative overflow-hidden bg-black/50 border border-white/10 shadow-2xl flex items-center justify-center max-h-[78vh]">
          <img
            src={item.src}
            alt={item.title || 'Artwork'}
            className="max-h-[78vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
            {item.title || 'Untitled Work'}
          </h3>
          {(item.subtitle || item.series) && (
            <p className="text-xs uppercase font-mono tracking-[0.2em] text-[#A3B899] mt-1">
              {item.subtitle || item.series}
            </p>
          )}
          {item.description && (
            <p className="text-xs sm:text-sm text-[#D1D5DB] font-light mt-1 max-w-md mx-auto">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
