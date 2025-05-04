import { motion } from "framer-motion";
import { useState } from "react";

function MarketingFunnel() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="pt-20 pb-40 bg-gray-50 ">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-40">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-32"></div>
            <p className="text-gray-700 uppercase tracking-wider text-sm mx-4">
              SMART GROWTH STRATEGY
            </p>
            <div className="h-px bg-gray-300 w-32"></div>
          </div>
          <h3 className="text-4xl font-bold mb-4">OUR MARKETING FUNNEL</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our marketing funnel is designed to attract, engage, and convert leads into loyal customers efficiently.
          </p>
        </div>

        {/* Hover wrapper */}
        <div
          className="relative flex flex-col items-center gap-0"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Layer 1 */}
          <motion.div
            className="relative w-[50%] z-40"
            animate={{ y: hovered ? -80 : 0, marginBottom: hovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/funnel/layer1.svg" alt="Strangers" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Strangers
            </p>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="relative w-[40%] z-30 -mt-8"
            animate={{ y: hovered ? 0 : 0, marginBottom: hovered ? 0 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/funnel/layer2.svg" alt="Acquaintances" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Acquaintances
            </p>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="relative w-[30%] z-20 -mt-6"
            animate={{ y: hovered ? 80 : 0, marginBottom: hovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/funnel/layer3.svg" alt="Developing Trust" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Developing Trust
            </p>
          </motion.div>

          {/* Layer 4 */}
          <motion.div
            className="relative w-[20%] z-10"
            animate={{ y: hovered ? 120 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/funnel/layer4.svg" alt="Trusted Partners" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Trusted Partners
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MarketingFunnel;
