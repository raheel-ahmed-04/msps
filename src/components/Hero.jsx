import Header from "./Header";
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-pink-50 pb-16">
      <Header />

      {/* Decorative elements */}
      <div className="container mx-auto max-w-7xl px-6">
        {/* <div className="absolute top-80 left-1/4 opacity-80">
          <img src="/hero_vector1.svg"></img>
        </div>
        <div className="absolute top-65 right-1/5 opacity-80">
        <img src="/hero_vector2.svg"></img>
      </div> */}
        {/* <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="/hero_vector1.svg">
          <path d="M20,20 C60,0 80,40 80,80" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <circle cx="30" cy="30" r="10" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          </svg> */}
        {/* <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80,20 C40,0 20,40 20,80" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <circle cx="70" cy="30" r="10" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          </svg> */}

        {/* Main content */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="h-px bg-gray-300 w-32"></div>
            <p className="text-gray-700 uppercase tracking-wider text-sm mx-4">
              BE SEEN NOT SOLD
            </p>
            <div className="h-px bg-gray-300 w-32"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-5xl mx-auto">
            Return to the pre-industrial<br></br> revolution model of{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              business growth
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Return to the pre-industrial revolution model of business growth,
            where merchants built their businesses through reputation and
            relationships.
          </p>

          <div className="flex justify-center mb-12">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer">
              WORK WITH US
            </button>
          </div>

          {/* Video section */}
          <div className="w-full max-w-4xl mx-auto my-20 relative">
            {/* Decorative elements */}
            <div className="absolute -top-33 left-1/20 opacity-80">
              <img src="/hero_vector1.svg" alt="Vector 1" />
            </div>
            <div className="absolute -top-45 right-2/200 opacity-80">
              <img src="/hero_vector2.svg" alt="Vector 2" />
            </div>

            {/* White container with gradient shadow */}
            <div className="relative bg-white rounded-4xl shadow-xl overflow-hidden p-4">
            <div className="absolute inset-0 rounded-2xl" style={{
                boxShadow: '0 0 30px 15px rgba(0, 255, 255, 0.4), 0 0 30px 20px rgba(255, 255, 0, 0.3), 0 0 30px 25px rgba(255, 182, 193, 0.3), 0 0 30px 30px rgba(173, 216, 230, 0.3)',
              }}></div>
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Business Team Meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-80 rounded-full p-4 cursor-pointer hover:bg-opacity-100 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-800"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
