import React from "react";
import theme from "./theme";

export default function VideoSection() {
  return (
    <div className={`w-full max-w-2xl mx-auto mt-8 mb-12 rounded-xl overflow-hidden shadow-lg relative aspect-video`}>
      {/* Video thumbnail */}
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
        alt="Video thumbnail"
        className="w-full h-full object-cover opacity-80"
      />
      {/* Play button overlay */}
      <button className="absolute inset-0 flex items-center justify-center focus:outline-none">
        <span className="inline-flex items-center justify-center w-16 h-16 bg-white/80 rounded-full shadow-lg">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#fff" fillOpacity="0.7" />
            <polygon points="14,11 26,18 14,25" fill="#222" />
          </svg>
        </span>
      </button>
    </div>
  );
} 