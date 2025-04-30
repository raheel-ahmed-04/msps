function MarketingFunnel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-32"></div>
            <p className="text-gray-700 uppercase tracking-wider text-sm mx-4">SMART GROWTH STRATEGY</p>
            <div className="h-px bg-gray-300 w-32"></div>
          </div>
          <h3 className="text-4xl font-bold mb-4">OUR MARKETING FUNNEL</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our marketing funnel is designed to attract, engage, and convert leads into loyal customers efficiently.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-0">
          {/* Funnel Layer 1 */}
          <div className="relative w-[50%] z-40">
            <img src="/funnel/layer1.svg" alt="Strangers" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Strangers
            </p>
          </div>

          {/* Funnel Layer 2 */}
          <div className="relative w-[40%] z-30 -mt-8">
            <img src="/funnel/layer2.svg" alt="Acquaintances" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black">
              Acquaintances
            </p>
          </div>

          {/* Funnel Layer 3 */}
          <div className="relative w-[30%] z-20 -mt-6">
            <img src="/funnel/layer3.svg" alt="Developing Trust" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Developing Trust
            </p>
          </div>

          {/* Funnel Layer 4 */}
          <div className="relative w-[20%] z-10 ">
            <img src="/funnel/layer4.svg" alt="Trusted Partners" className="w-full" />
            <p className="absolute inset-0 flex items-center justify-center text-lg font-medium text-black text-center px-2">
              Trusted Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketingFunnel;
