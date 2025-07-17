"use client";
import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "David Kim",
    title: "CEO At Spectrum",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The AI-powered tools in Velora save us countless hours by summarizing tasks and prioritizing what matters most. It's a must-have for any team looking to streamline workflows.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Boom has transformed how we approach mental wellness in our company. The personalized approach and expert guidance have made a real difference for our team.",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "CTO At TechFlow",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The community support and mindfulness features have helped our team maintain better work-life balance. Highly recommended for any organization.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "HR Director",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Implementing Boom's wellness platform has significantly improved our employee satisfaction scores. The data-driven insights are invaluable.",
  },
  {
    id: 5,
    name: "Alex Thompson",
    title: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "As a startup founder, stress management is crucial. Boom's personalized approach has been a game-changer for my mental health and productivity.",
  },
];

export default function ClientTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);

  // Intersection Observer to detect if section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Manual scroll detection
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsScrolling(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Auto-scroll logic (only when inView)
  useEffect(() => {
    if (!inView || isScrolling) return;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const card = scrollContainer.children[next] as HTMLElement;
        if (card) {
          card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
        return next;
      });
    }, 3500);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [inView, isScrolling]);

  return (
    <section ref={sectionRef} className="w-full max-w-6xl mx-auto py-16 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        What Our Clients Say
      </h2>
      
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-80 sm:w-96 bg-[#18181b] rounded-2xl p-6 shadow-lg border border-[#232323] transition-all duration-300 ${
                isScrolling ? 'scale-95' : 'scale-100'
              } hover:scale-105 hover:shadow-xl`}
              style={{
                minWidth: '320px',
                maxWidth: '384px',
              }}
            >


              {/* User info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.title}</div>
                </div>
              </div>

              {/* Quote mark */}
              <div className="text-4xl text-white/20 mb-4">"</div>

              {/* Testimonial text */}
              <p className="text-white/80 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 