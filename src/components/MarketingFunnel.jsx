import { motion } from "framer-motion";
import { useState } from "react";

function MarketingFunnel() {
  const [hovered, setHovered] = useState(false);

  // Animation variants for text blocks
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-20 pb-40 bg-gray-50">
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
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer1.svg" alt="Strangers" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Strangers
            </p>
            {/* Text Block for Layer 1 (Right Side) */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 right-[-400px] w-[350px]"
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
              variants={rightTextVariants}
            >
              <p className="text-lg font-semibold">1. Strangers → Acquaintances</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Initiate contact with warmth and value.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Personalized, non-sales interactions spark curiosity and engagement.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Handwritten notes, resource sharing, and thoughtful social interactions.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="relative w-[40%] z-30 -mt-8"
            animate={{ y: hovered ? 0 : 0, marginBottom: hovered ? 0 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer2.svg" alt="Acquaintances" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Acquaintances
            </p>
            {/* Text Block for Layer 2 (Left Side) */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 left-[-400px] w-[350px]"
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
              variants={textVariants}
            >
              <p className="text-lg font-semibold">2. Acquaintances → Developing Trust</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Build rapport through consistent and meaningful touchpoints.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Familiarity and credibility.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Educational workshops, co-created content, exclusive communities.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="relative w-[30%] z-20 -mt-6"
            animate={{ y: hovered ? 80 : 0, marginBottom: hovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer3.svg" alt="Developing Trust" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Developing Trust
            </p>
            {/* Text Block for Layer 3 (Right Side) */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 right-[-400px] w-[350px]"
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
              variants={rightTextVariants}
            >
              <p className="text-lg font-semibold">3. Developing Trust → Trusted Partners</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Deepen engagement through personalized support.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> One-on-one problem-solving and real-world collaboration.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Free advisory sessions, low-risk pilot projects, transparent case studies.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Layer 4 */}
          <motion.div
            className="relative w-[20%] z-10"
            animate={{ y: hovered ? 120 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer4.svg" alt="Trusted Partners" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Trusted Partners
            </p>
            {/* Text Block for Layer 4 (Left Side) */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 left-[-400px] w-[350px]"
              initial="hidden"
              animate={hovered ? "visible" : "hidden"}
              variants={textVariants}
            >
              <p className="text-lg font-semibold">4. Trusted Partners → Transparent Allies</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Achieve mutual growth through vulnerability and shared goals.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Joint planning, real-time transparency, and co-led initiatives.
                  </span>
                </li>
                <li className="flex items-start mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Roadmapping sessions, open-access dashboards, advocacy programs.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MarketingFunnel;