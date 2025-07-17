import React from "react";

export default function WhoWeAre() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-2 sm:px-4 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Who We Are and What We Stand For</h2>
          <p className="text-white/80 max-w-lg">
            At Mobility Trend Consulting, we specialize in turning uncertainty into opportunity. As a distinct brand under the umbrella of mrs GmbH, we focus on trend analysis, scenario planning, and strategic foresight to help businesses navigate a rapidly evolving world.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">Contact Us</button>
          <div className="flex gap-8 mt-4">
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/60">Growth in Business Scaling</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">10X</div>
              <div className="text-xs text-white/60">Growth in Leads Generation</div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            alt="Team"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm object-cover"
          />
        </div>
      </div>
      {/* Bottom: Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="rounded-2xl p-6 bg-gradient-to-r from-[#232323] to-[#18181b] border border-[#232323]">
          <div className="font-semibold text-white mb-2">Our Expertise</div>
          <div className="text-sm text-white/70">
            At Mobility Trend Consulting, we specialize in turning uncertainty into opportunity. As a distinct brand under the umbrella of mrs GmbH
          </div>
        </div>
        <div className="rounded-2xl p-6 bg-gradient-to-r from-[#18181b] to-[#232323] border border-[#232323]">
          <div className="font-semibold text-white mb-2">Vision</div>
          <div className="text-sm text-white/70">
            At Mobility Trend Consulting, we specialize in turning uncertainty into opportunity. As a distinct brand under the umbrella of mrs GmbH
          </div>
        </div>
      </div>
    </section>
  );
} 