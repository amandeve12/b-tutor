import React from "react";

const steps = [
  {
    img: (
      <div className="flex flex-col items-center justify-center w-full h-40 mb-4">
        {/* Placeholder for waitlist form illustration */}
        <div className="bg-gradient-to-br from-[#232323] to-[#18181b] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-inner border border-[#333]">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center mb-2">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <div className="w-20 h-3 bg-[#222] rounded mb-1" />
          <div className="w-16 h-3 bg-[#222] rounded mb-1" />
          <div className="w-24 h-3 bg-[#222] rounded mb-2" />
          <div className="w-20 h-6 bg-[#333] rounded mb-1" />
        </div>
      </div>
    ),
    title: "Sign Up",
    desc: "Quick and easy.",
  },
  {
    img: (
      <div className="flex flex-col items-center justify-center w-full h-40 mb-4">
        {/* Placeholder for quiz illustration */}
        <div className="bg-gradient-to-br from-[#232323] to-[#18181b] rounded-xl w-32 h-32 flex flex-col items-center justify-center shadow-inner border border-[#333]">
          <div className="w-24 h-4 bg-[#222] rounded mb-2" />
          <div className="w-20 h-3 bg-[#333] rounded mb-1" />
          <div className="w-28 h-3 bg-[#222] rounded mb-1" />
          <div className="w-16 h-3 bg-[#333] rounded mb-1" />
        </div>
      </div>
    ),
    title: "Take the Quiz",
    desc: "Personalize your experience.",
  },
  {
    img: (
      <div className="flex flex-col items-center justify-center w-full h-40 mb-4">
        {/* Placeholder for journey illustration */}
        <div className="bg-gradient-to-br from-[#232323] to-[#18181b] rounded-xl w-32 h-32 flex flex-col items-end justify-end shadow-inner border border-[#333] p-2">
          <div className="w-4 h-8 bg-orange-400 rounded mb-1" />
          <div className="w-4 h-12 bg-orange-400 rounded mb-1" />
          <div className="w-4 h-16 bg-orange-400 rounded mb-1" />
          <div className="w-4 h-20 bg-orange-400 rounded" />
        </div>
      </div>
    ),
    title: "Start Your Journey",
    desc: "Dive into journaling, games, and community.",
  },
];

export default function GetStartedSteps() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">Get Started in 3 Steps</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="relative bg-[#18181b] rounded-2xl p-6 flex flex-col items-center text-center shadow-md border border-[#232323] w-full max-w-xs min-h-[340px]">
              {step.img}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#232323] rounded-full px-4 py-1 text-xs font-bold border border-[#333]">{`0${i + 1}`}</div>
              <div className="font-semibold text-lg mt-6 mb-2">{step.title}</div>
              <div className="text-sm text-white/70">{step.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden sm:flex items-center justify-center h-32">
                {/* Arrow SVG between steps */}
                <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 30C18 2 42 2 58 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M58 30L52 26M58 30L54 22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
} 