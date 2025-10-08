import React from "react";
import Navbar from "./Navbar";
import ContactGraphic from "../assets/contact.svg"; 

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 py-12 sm:py-16 lg:py-20 gap-12 lg:gap-20">
        {/* Left Figma Export (SVG) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={ContactGraphic}
            alt="Contact Graphic"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Contact Form (no heading, flat style) */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1">Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">E-mail *</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="If you have something to tell..."
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-neutral-200 py-3 rounded-lg font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="w-full flex justify-center items-center py-14">
  <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
    {/* Left column: Email and Phone */}
    <div className="flex flex-col gap-8">
      {/* Email Card */}
      <div className="bg-neutral-800 rounded-xl px-8 py-8 flex items-center justify-between">
        <span className="text-lg sm:text-2xl">info@ldintertech.com</span>
        {/* Email Icon */}
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M22 5 12 13 2 5"/>
        </svg>
      </div>
      {/* Phone Card */}
      <div className="bg-neutral-800 rounded-xl px-12 py-8 flex items-center justify-between">
        <span className="text-lg sm:text-2xl">+91 9392031593</span>
        {/* Phone Icon */}
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.13.98.5 1.93 1.08 2.73a2 2 0 0 1-.45 2.6l-1.27 1a16 16 0 0 0 6 6l1-1.27a2 2 0 0 1 2.6-.45c.8.58 1.75.95 2.73 1.08A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
    </div>
    {/* Right column: Address with inline icon at end */}
    <div className="bg-neutral-800 rounded-xl px-12 py-8 flex items-center justify-between">
      <div>
        <p className="text-xl sm:text-2xl">
          M/S Proactive Plug and Play<br />
          40-1/1-30 A, Laxmi Nagar,<br />
          Mogalrajpuram,<br />
          Vijayawada, Andhra Pradesh.<br />
          Pin: 520010
        </p>
      </div>
      {/* Location Icon */}
      <svg className="h-8 w-8 text-white ml-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 21C12 21 20 13.5 20 8.5C20 5.18629 16.4183 2.5 12 2.5C7.58172 2.5 4 5.18629 4 8.5C4 13.5 12 21 12 21Z"/>
        <circle cx="12" cy="9" r="3"/>
      </svg>
    </div>
    
  </div>
  
</section>
{/* Footer */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm px-4 sm:px-6 max-w-6xl mx-auto gap-3 sm:gap-0 text-center sm:text-left">
        <p>© 2024. All Rights Reserved</p>
        <button
          onClick={() => alert("Privacy Policy Coming Soon!")}
          className="text-purple-400 hover:underline"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
}
