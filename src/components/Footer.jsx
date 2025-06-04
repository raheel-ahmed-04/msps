import { FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-black text-white py-8 md:py-16 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
        {/* <img
          src="/footer_image.png"
          alt="Handshake"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="container mx-auto max-w-2xl md:max-w-7xl my-16 md:my-0 px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start ml-10 md:ml-0 md:items-center md:items-start">
          <div className="mb-4 md:mb-0">
            {/* Logo */}
            <div className="flex justify-start items-center mb-30 md:mb-4">
              <img src="/logo2.png" alt="MSPs Logo" className="h-14 md:h-12" />
            </div>

            {/* Contact Information */}
            <div className="space-y-8 md:space-y-2 text-gray-300 text-xs md:text-sm text-left mb-30 md:mb-0">
              <p>
                <a
                  href="https://maps.app.goo.gl/Ldw8ZQ3RVAf9igYe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100 transition duration-300"
                >
                  2074 Cropsey Ave, Brooklyn, New York 11214
                </a>
              </p>
              <p>
                <a
                  href="mailto:uniazi@leadsformsps.io"
                  className="hover:text-gray-100 transition duration-300"
                >
                  Email: uniazi@leadsformsps.io
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row md:flex-row justify-center md:justify-end space-x-6 space-y-0 md:space-y-0 md:space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaLinkedin size={20} />
              </div>
            </a>
            <a
              href="https://www.reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaReddit size={20} />
              </div>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <FaTwitter size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;