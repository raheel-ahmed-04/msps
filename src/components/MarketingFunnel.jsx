import { motion } from "framer-motion";
import { useState } from "react";

function MarketingFunnel() {
  const [hovered, setHovered] = useState(false);
  const [clickedFunnel, setClickedFunnel] = useState(null);
  const [arrowRotated, setArrowRotated] = useState({ 1: false, 2: false, 3: false, 4: false });

  // Animation variants for text blocks
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for lines
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "30%", opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-10 md:pt-10 pb-20 md:pb-40 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 md:mb-40">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-26 md:w-32"></div>
            <p className="text-gray-700 uppercase tracking-wider  text-xs md:text-sm mx-2 md:mx-4">
              SMART GROWTH STRATEGY
            </p>
            <div className="h-px bg-gray-300 w-26 md:w-32"></div>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">OUR MARKETING FUNNEL</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-lg font-light">
            Our marketing funnel is designed to attract, engage, and convert leads into loyal customers efficiently.
          </p>
        </div>

        {/* Desktop Hover Wrapper */}
        <div
          className="relative flex flex-col items-center gap-0 hidden md:flex"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Layer 1 */}
          <motion.div
            className="relative w-[40%] z-40"
            animate={{ y: hovered ? -80 : 0, marginBottom: hovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer1.svg" alt="Strangers" className="w-full" />
            {/* Text Block for Layer 1 (Right Side) */}
            <div className="absolute top-1/3 transform -translate-y-1/2 right-[-450px] w-[650px] flex items-center">
              <motion.img
                src="/funnel/vector1.svg"
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={lineVariants}
              />
              <motion.div
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={rightTextVariants}
                className="flex-1 ml-8"
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
            </div>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="relative w-[30%] z-30 -mt-7"
            animate={{ y: hovered ? 0 : 0, marginBottom: hovered ? 0 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer2.svg" alt="Acquaintances" className="w-full" />
            {/* Text Block for Layer 2 (Left Side) */}
            <div className="absolute top-1/3 transform -translate-y-1/2 left-[-450px] w-[550px] flex items-center">
              <motion.div
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={textVariants}
                className="flex-1 mr-8"
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
              <motion.img
                src="/funnel/vector2.svg"
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={lineVariants}
              />
            </div>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="relative w-[20%] z-20 -mt-3"
            animate={{ y: hovered ? 80 : 0, marginBottom: hovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer3.svg" alt="Developing Trust" className="w-full" />
            {/* Text Block for Layer 3 (Right Side) */}
            <div className="absolute top-1/5 transform -translate-y-1/2 right-[-450px] w-[550px] flex items-center">
              <motion.img
                src="/funnel/vector3.svg"
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={lineVariants}
              />
              <motion.div
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={rightTextVariants}
                className="flex-1 ml-8"
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
            </div>
          </motion.div>

          {/* Layer 4 */}
          <motion.div
            className="relative w-[12%] z-10 -mt-1"
            animate={{ y: hovered ? 120 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src="/funnel/layer4.svg" alt="Trusted Partners" className="w-full" />
            {/* Text Block for Layer 4 (Left Side) */}
            <div className="absolute top-1/6 transform -translate-y-1/2 left-[-520px] w-[600px] flex items-center">
              <motion.div
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={textVariants}
                className="flex-1"
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
              <motion.img
                src="/funnel/vector4.svg"
                className="w-[200px]"
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                variants={lineVariants}
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Funnel Section */}
        <div className="md:hidden flex flex-col items-center">
          {/* Layer 1 */}
          <div className="w-[90%] max-w-xs mb-4">
            <div 
              className="relative cursor-pointer"
              onClick={() => {
                setClickedFunnel(clickedFunnel === 1 ? null : 1);
                setArrowRotated(prev => ({ ...prev, 1: !prev[1] }));
              }}
            >
              <img
                src="/funnel/layer1.svg"
                alt="Strangers"
                className="w-full"
              />
              <div className="absolute top-4/6 -right-4 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: arrowRotated[1] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className="overflow-hidden text-center"
              style={{
                maxHeight: clickedFunnel === 1 ? '500px' : '0',
                opacity: clickedFunnel === 1 ? 1 : 0,
                marginTop: clickedFunnel === 1 ? '16px' : '0',
                marginBottom: clickedFunnel === 1 ? '16px' : '0',
                transition: 'max-height 0.5s, opacity 0.5s, margin 0.5s'
              }}
            >
              <p className="text-lg font-semibold">1. Strangers → Acquaintances</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Initiate contact with warmth and value.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Personalized, non-sales interactions spark curiosity and engagement.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Handwritten notes, resource sharing, and thoughtful social interactions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="w-[65%] max-w-xs -mt-4 mb-2">
            <div 
              className="relative cursor-pointer"
              onClick={() => {
                setClickedFunnel(clickedFunnel === 2 ? null : 2);
                setArrowRotated(prev => ({ ...prev, 2: !prev[2] }));
              }}
            >
              <img
                src="/funnel/layer2.svg"
                alt="Acquaintances"
                className="w-full"
              />
              <div className="absolute top-4/6 -right-4 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: arrowRotated[2] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className="overflow-hidden text-center"
              style={{
                maxHeight: clickedFunnel === 2 ? '500px' : '0',
                opacity: clickedFunnel === 2 ? 1 : 0,
                marginTop: clickedFunnel === 2 ? '16px' : '0',
                marginBottom: clickedFunnel === 2 ? '16px' : '0',
                transition: 'max-height 0.5s, opacity 0.5s, margin 0.5s'
              }}
            >
              <p className="text-lg font-semibold">2. Acquaintances → Developing Trust</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Build rapport through consistent and meaningful touchpoints.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Familiarity and credibility.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Educational workshops, co-created content, exclusive communities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="w-[50%] max-w-xs -mt-2 mb-0">
            <div 
              className="relative cursor-pointer"
              onClick={() => {
                setClickedFunnel(clickedFunnel === 3 ? null : 3);
                setArrowRotated(prev => ({ ...prev, 3: !prev[3] }));
              }}
            >
              <img
                src="/funnel/layer3.svg"
                alt="Developing Trust"
                className="w-full"
              />
              <div className="absolute top-4/7 -right-4 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: arrowRotated[3] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className="overflow-hidden text-center"
              style={{
                maxHeight: clickedFunnel === 3 ? '500px' : '0',
                opacity: clickedFunnel === 3 ? 1 : 0,
                marginTop: clickedFunnel === 3 ? '16px' : '0',
                marginBottom: clickedFunnel === 3 ? '16px' : '0',
                transition: 'max-height 0.5s, opacity 0.5s, margin 0.5s'
              }}
            >
              <p className="text-lg font-semibold">3. Developing Trust → Trusted Partners</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Deepen engagement through personalized support.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> One-on-one problem-solving and real-world collaboration.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Free advisory sessions, low-risk pilot projects, transparent case studies.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 4 */}
          <div className=" w-full  max-w-xs">
            <div 
              className="relative cursor-pointer flex items-center justify-center "
              onClick={() => {
                setClickedFunnel(clickedFunnel === 4 ? null : 4);
                setArrowRotated(prev => ({ ...prev, 4: !prev[4] }));
              }}
            >
              <img
                src="/funnel/layer4.svg"
                alt="Trusted Partners"
                className="w-[40%]"
              />
              <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: arrowRotated[4] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className="overflow-hidden text-center"
              style={{
                maxHeight: clickedFunnel === 4 ? '500px' : '0',
                opacity: clickedFunnel === 4 ? 1 : 0,
                marginTop: clickedFunnel === 4 ? '16px' : '0',
                marginBottom: clickedFunnel === 4 ? '16px' : '0',
                transition: 'max-height 0.5s, opacity 0.5s, margin 0.5s'
              }}
            >
              <p className="text-lg font-semibold">4. Trusted Partners → Transparent Allies</p>
              <ul className="text-sm text-gray-600 mt-2">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Goal:</strong> Achieve mutual growth through vulnerability and shared goals.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>How It Works:</strong> Joint planning, real-time transparency, and co-led initiatives.
                  </span>
                </li>
                <li className="flex items-start justify-center mt-1">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Key Actions:</strong> Roadmapping sessions, open-access dashboards, advocacy programs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketingFunnel;