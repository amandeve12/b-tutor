import React from "react";
import theme from "./theme";

const features = [
  {
    icon: (
      <span className="inline-block text-3xl">📖</span>
    ),
    title: "Personalized Journaling",
    desc: "Reflect and grow with guided prompts tailored to you.",
  },
  {
    icon: (
      <span className="inline-block text-3xl">🎮</span>
    ),
    title: "Mindfulness Games",
    desc: "Fun challenges to help you stay present and mindful.",
  },
  {
    icon: (
      <span className="inline-block text-3xl">💡</span>
    ),
    title: "Expert Advice",
    desc: "Get tips and insights from mental wellness professionals.",
  },
  {
    icon: (
      <span className="inline-block text-3xl">🤝</span>
    ),
    title: "Community Support",
    desc: "Connect with others on the same journey as you.",
  },
];

export default function WhyBoomRocks() {
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Why Boom Rocks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#18181b] rounded-2xl p-6 flex flex-col items-center text-center shadow-md border border-[#232323]"
          >
            <div className="mb-4">{f.icon}</div>
            <div className="font-semibold text-lg mb-2">{f.title}</div>
            <div className="text-sm text-white/70">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 