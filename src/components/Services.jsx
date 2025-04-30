"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      tier: "1",
      image: "/Frame.svg",
      title: "LINKEDIN OUTREACH",
      description:
        "Build and nurture LinkedIn relationships through personalized outreach engagement, tracked with a detailed progress system.",
    },
    {
      tier: "2",
      image: "/Service2.svg",
      title: "MULTI-CHANNEL ENGAGEMENT",
      description:
        "All including Tier 1 + Expand your presence across LinkedIn, Twitter, Email, and Reddit to nurture relationships on multiple platforms.",
    },
    {
      tier: "3",
      image: "/Service3.svg",
      title: "ABM STRATEGY",
      description:
        "All including Tier 1 and 2 + Target high-value clients with in-depth research and personalized outreach to secure meetings.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-32"></div>
            <p className="text-gray-700 uppercase tracking-wider text-sm mx-4">
              VISIBILITY, NOT SALES
            </p>
            <div className="h-px bg-gray-300 w-32"></div>
          </div>
          <h3 className="text-4xl font-bold mb-4">OUR SERVICES</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our Tier-based services organize support and resources into distinct
            levels or tiers, offering tailored solutions based on customer needs
            and problem complexity.
          </p>
        </div>

        {/* Services Container with Hover Effect */}
        <div
          className="relative min-h-[400px] mt-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Connecting Lines (visible on hover) */}
          {isHovered && (
            <div className="flex items-center justify-center">
              <img
                src="/services/hover_vector.svg"
                alt=""
                className="z-10 absolute -top-40 object-contain"
              />
            </div>
          )}

          {/* Service Cards with Dynamic Positioning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10">
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isHovered
                  ? "translate-x-0 translate-y-[-100px]"
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <ServiceCard
                tier={services[0].tier}
                image={services[0].image}
                title={services[0].title}
                description={services[0].description}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isHovered
                  ? "translate-x-0 translate-y-0"
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <ServiceCard
                tier={services[1].tier}
                image={services[1].image}
                title={services[1].title}
                description={services[1].description}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isHovered
                  ? "translate-x-0 translate-y-[100px]"
                  : "translate-x-0 translate-y-0"
              }`}
            >
              <ServiceCard
                tier={services[2].tier}
                image={services[2].image}
                title={services[2].title}
                description={services[2].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
