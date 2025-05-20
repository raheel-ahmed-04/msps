function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-16 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-100">
        <img
          src="/footer_image.png"
          alt="Handshake"
          className="w-full h-full object-cover"
        />
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
            <div className="space-y-8 md:space-y-2 text-gray-300 text-xs md:text-sm text-left mb-30 md:mb-">
              <p>A108 Adam Street New York, NY 535022 United States</p>
              <p>Phone: +1 5589 55488 55</p>
              <p>Email: info@example.com</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row md:flex-row justify-center md:justify-end space-x-6 space-y-0 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="black"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;