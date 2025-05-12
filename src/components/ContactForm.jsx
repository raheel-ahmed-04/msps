"use client"

import { useState } from "react"

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-25 opacity-80">
              <img src="/form/vector3.svg" alt="Vector 3" />
            </div>
            <div className="absolute top-20 right-2/80 opacity-80">
              <img src="/form/vector4.svg" alt="Vector 4" />
            </div>
        <div className="bg-linear-to-b from-[#FFF9F9] via-[#FFFFFB] to-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 px-70 py-20">

          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <div className="h-px bg-gray-300 w-24"></div>
              <p className="text-gray-700 uppercase tracking-wider text-sm mx-4">LET'S CONNECT!!</p>
              <div className="h-px bg-gray-300 w-24"></div>
            </div>
            <h3 className="text-4xl font-bold mb-3">WORK WITH US</h3>
            <p className="text-gray-600">Partner with us to accelerate your MSP growth and success!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your First Name"
                className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-black placeholder:opacity-30"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Work Email"
                className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-black placeholder:opacity-30"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size of organization</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.organization === "1-5"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("organization", "1-5")}
                >
                  1-5
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.organization === "6-15"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("organization", "6-15")}
                >
                  6-15
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.organization === "16-50"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("organization", "16-50")}
                >
                  16-50
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Is outbound a part of your sales motion
              </label>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.outbound === "yes"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("outbound", "yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.outbound === "no"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("outbound", "no")}
                >
                  No
                </button>
              </div>
              <button
                type="button"
                className={`w-full py-2 px-4 rounded-full border ${
                  formData.outbound === "experienced"
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleButtonSelect("outbound", "experienced")}
              >
                Not now, but I am experienced in outbound
              </button>
            </div>

            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                Annual revenue
              </label>
              <input
                type="text"
                id="revenue"
                name="revenue"
                placeholder="Enter Annual Revenue"
                className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-black placeholder:opacity-30"
                value={formData.revenue}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Budget
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="Enter your Monthly Budget"
                className="w-full px-6 py-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-black placeholder:opacity-30"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you understand that sustainable linear growth takes time?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.understand === "yes"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("understand", "yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full border ${
                    formData.understand === "no"
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleButtonSelect("understand", "no")}
                >
                  No
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to work with LeadsForMSPs?
              </label>
              <textarea
                id="reason"
                name="reason"
                placeholder="what you want to say"
                rows={4}
                className="w-full px-6 py-3 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-black placeholder:opacity-30"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="inline-flex items-center gap-x-4 pl-10 pr-1 py-1 bg-white border-1 border-black rounded-full transition-all duration-500 cursor-pointer group hover:bg-black hover:text-white">
              <span className="text-base text-2xl font-regular transform transition-all duration-300 group-hover:translate-x-7 delay-150">
                Send
              </span>
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:bg-black group-hover:-translate-x-22">
                <img
                  className="w-8 h-8 text-white transform transition-all duration-300 group-hover:text-black delay-100"
                  src="/send_icon.svg"
                >
                </img>
  </div>
</div>



          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
