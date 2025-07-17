"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const packages = [
  {
    id: "starter",
    name: "Starter Package",
    description: "Perfect for small projects",
    monthlyPrice: 199,
    yearlyPrice: 2390,
    features: [
      "1 custom landing page design",
      "Basic Figma design",
      "Mobile responsive",
      "Standard layouts",
      "1 revision round",
      "Basic handoff"
    ],
    spots: 5,
    spotsTaken: 0
  },
  {
    id: "framer",
    name: "Framer Developing",
    description: "Perfect for growing businesses",
    monthlyPrice: 399,
    yearlyPrice: 4790,
    features: [
      "2 custom landing pages",
      "Advanced Figma design",
      "Mobile responsive",
      "Custom layouts",
      "3 revision rounds",
      "Advanced handoff",
      "Framer development"
    ],
    spots: 3,
    spotsTaken: 1
  },
  {
    id: "premium",
    name: "Premium Suite",
    description: "Perfect for enterprise needs",
    monthlyPrice: 799,
    yearlyPrice: 9590,
    features: [
      "Unlimited landing pages",
      "Premium Figma design",
      "Mobile responsive",
      "Custom layouts",
      "Unlimited revisions",
      "Premium handoff",
      "Framer development",
      "Priority support"
    ],
    spots: 2,
    spotsTaken: 1
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const start = display;
    const end = value;
    if (start === end) return;
    let frame: number;
    const steps = 30;
    let currentStep = 0;
    function animate() {
      currentStep++;
      const progress = currentStep / steps;
      setDisplay(Math.round(start + (end - start) * progress));
      if (currentStep < steps) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [value]);
  return <span>{display.toLocaleString()}</span>;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedPackage, setSelectedPackage] = useState("starter");

  const currentPackage = packages.find(pkg => pkg.id === selectedPackage);
  const price = billingCycle === "yearly" ? currentPackage?.yearlyPrice : currentPackage?.monthlyPrice;
  const savings = billingCycle === "yearly" ? Math.round((currentPackage?.monthlyPrice || 0) * 12 * 0.33) : 0;

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-2 sm:px-4" id="pricing-section">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-white/70 text-lg">
          Professional design services tailored to your needs
        </p>
      </motion.div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#232323] rounded-full p-1 flex items-center">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors relative ${
              billingCycle === "yearly"
                ? "bg-orange-500 text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Yearly
            {billingCycle === "yearly" && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 33%
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Package Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#232323] rounded-lg p-1 flex">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPackage === pkg.id
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Card */}
      {currentPackage && (
        <div className="bg-[#18181b] rounded-2xl p-8 shadow-lg border border-[#232323] max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentPackage.name}</h3>
                  <p className="text-white/60 text-sm">{currentPackage.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-2 flex items-end gap-1">
                  <AnimatedNumber value={price || 0} />
                  <span className="text-lg font-medium text-white/60">/{billingCycle === "yearly" ? "year" : "month"}</span>
                </div>
                {billingCycle === "yearly" && (
                  <motion.div
                    className="text-green-400 text-sm mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    key={savings}
                  >
                    Save ${savings} annually
                  </motion.div>
                )}
                <motion.div
                  className="text-red-400 text-sm mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={currentPackage.spotsTaken}
                >
                  Booking Open - only {currentPackage.spots - currentPackage.spotsTaken} Spots Left
                </motion.div>
              </div>

              <motion.button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Work Together &rarr;
              </motion.button>
            </div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">What&apos;s included</h4>
              <div className="space-y-3">
                {currentPackage.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white/80 text-sm">{feature.replace(/'/g, "&apos;")}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Status */}
          <motion.div
            className="text-center mt-8 pt-6 border-t border-[#232323]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            key={currentPackage.spotsTaken}
          >
            <p className="text-white/40 text-sm">
              {currentPackage.spotsTaken} of {currentPackage.spots} spots taken
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
} 