import React from "react";

export default function VirtualConsultations() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-2 sm:px-4">
      <div className="bg-[#18181b] rounded-2xl p-6 shadow-lg border border-[#232323]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#232323] rounded-full flex items-center justify-center">
            <span className="text-2xl">🩺</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Virtual Consultations</h2>
            <p className="text-white/70 text-sm">
              Connect with doctors from the comfort of your home. Our platform offers secure video consultations with specialists across all medical fields.
            </p>
          </div>
        </div>

        {/* Main Consultation Card */}
        <div className="bg-[#232323] rounded-xl p-6 mb-6">
          {/* Doctor Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-red-400">❤️</span>
              <div>
                <div className="font-semibold text-white">Dr. Sarah Johnson</div>
                <div className="text-sm text-white/60">Cardiologist • Online • Now</div>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition">
              Connect
            </button>
          </div>

          {/* Patient Query */}
          <div className="bg-[#18181b] rounded-lg p-4 mb-4">
            <p className="text-white text-sm">
              &quot;I&apos;m experiencing chest pain and shortness of breath when I exercise. Could this be related to my heart condition?&quot;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#18181b] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition">
              <span>📄</span>
              Share records
            </button>
            <button className="flex items-center gap-2 bg-[#18181b] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a2a] transition">
              <span>📊</span>
              Test vitals
            </button>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-white/60">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-white/60">Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">15min</div>
            <div className="text-sm text-white/60">Avg. Wait Time</div>
          </div>
        </div>
      </div>
    </section>
  );
} 