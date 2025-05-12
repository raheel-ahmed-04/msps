import Header from "./Header";
function Hero() {
  return (
    // <section className="relative pb-16" style={{ backgroundImage: 'linear-gradient(to bottom right, #E5E5E5 0%, #FFFFFF 20%, #FEFFD2 40%, #FFDDC7 60%, #FFC3C3 80%, #B1EDFF 100%)' }}>
    <section className="relative p-6">
      <img src="/hero_bg_light.svg" className="absolute -top-2 right-2 h-[608px] z-100 opacity-90" alt="" />
    <section
      className="relative pb-16 rounded-4xl overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(229, 229, 229, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(251, 251, 242, 1) 45%, rgba(255, 221, 199, 1) 70%, rgba(255, 195, 195, 1) 80%, rgba(177, 237, 255, 1) 100%)",
      }}
    >
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
            <span className="bg-gradient-to-br from-[#FF6201] from-41% via-[#FF0004] via-53% to-[#5A4BC9] to-100%  bg-clip-text text-transparent">
              business{" "}
            </span>
            <span className="bg-gradient-to-r from-[#FF6D34] from-0% to-[#EFAC02] to-100% bg-clip-text text-transparent">
              growth
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Return to the pre-industrial revolution model of business growth,
            where merchants built their businesses through reputation and
            relationships.
          </p>

          <div className="flex justify-center mb-12">
            <button className="relative bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer">
              WORK WITH US
            </button>
          </div>

          {/* Video section */}
          <div className="w-full max-w-5xl mx-auto my-20 relative">
            {/* Decorative elements */}
            <div className="absolute -top-33 left-1/20 opacity-80">
              <img src="/hero_vector1.svg" alt="Vector 1" />
            </div>
            <div className="absolute -top-45 right-2/200 opacity-80">
              <img src="/hero_vector2.svg" alt="Vector 2" />
            </div>

            {/* White container with gradient shadow */}
            <div className="relative bg-white rounded-4xl overflow-hidden p-4" style={{
                  boxShadow:
                    "0 0 40px 15px rgba(0, 0, 0, 0.3)",
                }}>
              <div
                className="absolute inset-0 rounded-4xl"
              ></div>
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Business Team Meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className=" bg-opacity-80 rounded-full p-4 cursor-pointer hover:bg-opacity-100 transition duration-300 group">
                    <img src="/play_button.svg" className="group-hover:opacity-200" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default Hero;
