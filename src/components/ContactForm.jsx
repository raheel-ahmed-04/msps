import { useState } from "react"
import axios from "axios"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    outbound: "",
    revenue: "",
    budget: "",
    understand: "",
    reason: "",
  })

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleButtonSelect = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    const success = await sendEmail(formData);
    if (success) {
      setShowPopup(true);
      // setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  }

  const sendEmail = async (formData) => {
  try {
    console.log("FormData:", formData);

    const generateUniqueId = () => {
      const timestamp = Date.now().toString().slice(-4); // Last 4 digits of the timestamp
      const randomPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
      return `${timestamp}${randomPart}`;
    };

    console.log("Sending Contact Form Email...");
    const emailParams = {
      sender: {
        email: import.meta.env.VITE_EMAIL,
        name: "Lead For MSPS",
      },
      // to: [{ email: "uniazi@leadsformsps.io", name: "LeadsForMSPS" }],
      to: [{ email: "tahaashfaqmalik@gmail.com", name: "Taha Ashfaq" }],
      templateId: 1,
      params: {
        id: generateUniqueId(), // Unique ID
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        outbound: formData.outbound,
        revenue: formData.revenue,
        budget: formData.budget,
        understand: formData.understand,
        reason: formData.reason,
      },
    };

    console.log("Email Parameters (Not Sent):", JSON.stringify(emailParams, null, 2));

    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      emailParams,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      }
    );

    console.log("Email sent successfully:", response.data);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    alert("There was an error sending the email. Please try refreshing the page and submitting again.");
    return false;
  }
};

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto max-w-2xl md:max-w-6xl px-4 md:px-6 relative">
        {/* Decorative elements - hidden on mobile */}
        <div className="absolute top-16 md:top-25 opacity-80 hidden md:block">
          <img src="/form/vector3.svg" alt="Vector 3" className="w-32" />
        </div>
        <div className="absolute top-16 md:top-20 right-0 md:right-2/80 opacity-80 hidden md:block">
          <img src="/form/vector4.svg" alt="Vector 4" className="w-32" />
        </div>
        <div className="bg-gradient-to-b from-[#FFF9F9] via-[#FFFFFB] to-[#FFFFFF] rounded-xl md:rounded-2xl shadow-sm border border-gray-100 px-4 md:px-28 py-6 md:py-20">
          <div className="text-center mb-6 md:mb-10">
            <div className="flex justify-center items-center mb-2 md:mb-4">
              <div className="h-px bg-gray-300 w-26 md:w-32"></div>
              <p className="text-gray-700 uppercase tracking-wider text-xs md:text-sm mx-2 md:mx-4">LET'S CONNECT!!</p>
              <div className="h-px bg-gray-300 w-26 md:w-32"></div>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">WORK WITH US</h3>
            <p className="text-gray-400 font-light text-sm md:text-lg">Partner with us to accelerate your MSP growth and success!</p>
          </div>

          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your First Name"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-black focus:shadow-[0_0_4px_rgba(0,0,0,0.3)] placeholder-black placeholder:opacity-30 text-sm md:text-base"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Work Email"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-black focus:shadow-[0_0_4px_rgba(0,0,0,0.3)] placeholder-black placeholder:opacity-30 text-sm md:text-base"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">Size Of Organization</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.organization === "1-5"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("organization", "1-5")}
                >
                  1-5
                </button>
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.organization === "6-15"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("organization", "6-15")}
                >
                  6-15
                </button>
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.organization === "16-50"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("organization", "16-50")}
                >
                  16-50
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Is outbound a part of your sales motion
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-1 md:mb-2">
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.outbound === "yes"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("outbound", "yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.outbound === "no"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("outbound", "no")}
                >
                  No
                </button>
              </div>
              <button
                type="button"
                className={`w-full py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                  formData.outbound === "experienced"
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                } text-xs md:text-sm`}
                onClick={() => handleButtonSelect("outbound", "experienced")}
              >
                Not now, but I am experienced in outbound
              </button>
            </div>

            <div>
              <label htmlFor="revenue" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Annual revenue
              </label>
              <input
                type="text"
                id="revenue"
                name="revenue"
                placeholder="Enter Annual Revenue"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-black focus:shadow-[0_0_4px_rgba(0,0,0,0.3)] placeholder-black placeholder:opacity-30 text-sm md:text-base"
                value={formData.revenue}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Monthly Budget
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="Enter your Monthly Budget"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-black focus:shadow-[0_0_4px_rgba(0,0,0,0.3)] placeholder-black placeholder:opacity-30 text-sm md:text-base"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Do you understand that sustainable linear growth takes time?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.understand === "yes"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm`}
                  onClick={() => handleButtonSelect("understand", "yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 md:py-3 px-3 md:px-4 rounded-full border ${
                    formData.understand === "no"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  } text-xs md:text-sm"`}
                  onClick={() => handleButtonSelect("understand", "no")}
                >
                  No
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                Why do you want to work with LeadsForMSPs?
              </label>
              <textarea
                id="reason"
                name="reason"
                placeholder="what you want to say"
                rows={4}
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-0 focus:border-black focus:shadow-[0_0_4px_rgba(0,0,0,0.3)] placeholder-black placeholder:opacity-30 text-sm md:text-base"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-end md:items-center md:justify-start mb-4">
            <div onClick={handleSubmit} className="inline-flex items-center gap-x-4 pl-10 pr-1 py-1 bg-white border-1 border-black rounded-full transition-all duration-500 cursor-pointer group hover:bg-black hover:text-white">
              <span className="text-md md:text-xl font-regular transform transition-all duration-300 group-hover:translate-x-7 delay-150">
                Send
              </span>
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:bg-black group-hover:-translate-x-26">
                <img
                  className="w-6 h-6 md:w-8 md:h-8 text-white transform transition-all duration-300 group-hover:text-black delay-100"
                  src="/send_icon.svg"
                  alt="Send Icon"
                />
              </div>
            </div>
            </div>
            {showPopup && (
                <p className="text-md font-medium text-green-500 text-center md:text-left">
                  *Submitted Successfully!
                </p>
          )}
          </form>

          

        </div>
      </div>
    </section>
  )
}

export default ContactForm