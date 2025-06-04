"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const services = [
    {
      tier: "1",
      image: "/Frame.svg",
      title: "LINKEDIN OUTREACH",
      coloredline: "Build and nurture ",
      description:
      "LinkedIn relationships through personalized outreach engagement, tracked with a detailed progress system.",
    },
    {
      tier: "2",
      image: "/Service2.svg",
      title: "MULTI-CHANNEL ENGAGEMENT",
      coloredline: "All including Tier 1 + ",
      description:
      "Expand your presence across LinkedIn, Twitter, Email, and Reddit to nurture relationships on multiple platforms.",
    },
    {
      tier: "3",
      image: "/Service3.svg",
      title: "ABM STRATEGY",
      coloredline: "All including Tier 1 and 2 + ",
      description:
        "Target high-value clients with in-depth research and personalized outreach to secure meetings.",
    },
  ];

  // Animation variants
  const cardVariants = {
    initial: { y: 0 },
    card1Hover: { y: -100 },
    card2Hover: { y: 0 },
    card3Hover: { y: 100 },
  };

  // Vector animation variants
  const vectorVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-26 md:w-32 "></div>
            <p className="text-gray-700 uppercase tracking-wider text-xs md:text-sm mx-2 md:mx-4">
              VISIBILITY, NOT SALES
            </p>
            <div className="h-px bg-gray-300 w-26 md:w-32 "></div>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">OUR SERVICES</h3>
          <p className="text-sm md:text-lg text-gray-400 max-w-3xl mx-auto">
            Our Tier-based services organize support and resources into distinct
            levels or tiers, offering tailored solutions based on customer needs
            and problem complexity.
          </p>
        </div>

        {/* Services Container with Hover Effect */}
        <div
          className="relative min-h-[500px] mt-30 md:mt-50"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          {/* Connecting Lines (visible on hover) */}
          {!isMobile && (
            <motion.div 
              className="flex items-center justify-center"
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={vectorVariants}
            >
              <img
                src="/services/hover_vector.svg"
                alt=""
                className="z-10 absolute -top-40 object-contain"
              />
            </motion.div>
          )}

          {/* Service Cards with Dynamic Positioning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-3 relative z-10">
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={!isMobile && isHovered ? "card1Hover" : "initial"}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            >
              <ServiceCard
                tier={services[0].tier}
                image={services[0].image}
                title={services[0].title}
                coloredline={services[0].coloredline}
                description={services[0].description}
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={!isMobile && isHovered ? "card2Hover" : "initial"}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              <ServiceCard
                tier={services[1].tier}
                image={services[1].image}
                title={services[1].title}
                coloredline={services[1].coloredline}
                description={services[1].description}
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={!isMobile && isHovered ? "card3Hover" : "initial"}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            >
              <ServiceCard
                tier={services[2].tier}
                image={services[2].image}
                title={services[2].title}
                coloredline={services[2].coloredline}
                description={services[2].description}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;