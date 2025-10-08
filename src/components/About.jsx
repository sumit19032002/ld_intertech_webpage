import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
        
        {/* Left Side - Title (Always Top Left) */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl italic font-light whitespace-nowrap">
            About Us
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="max-w-6xl">
          <p className="text-gray-300 mb-6 text-lg sm:text-xl lg:text-4xl leading-relaxed">
            Welcome to LD InterTech Innovation
            your partner for cutting-edge technology and marketing solutions. 
            We offer comprehensive services in hardware, software, cloud technologies, 
            and digital marketing, specifically designed to guide businesses into the 
            digital future.
          </p>

          <p className="text-gray-300 mb-8 text-base sm:text-xl lg:text-4xl leading-relaxed">
            With our expertise and forward-thinking approach, we help you
            transform innovative ideas into reality and position your company
            successfully in the market.
          </p>

          {/* 🚀 Large About Button with Purple Hover */}
          <Link
            to="/about-details"
            className="px-8 py-3 border border-gray-400 rounded-md bg-transparent text-white 
                       hover:bg-purple-600 hover:border-purple-600 transition duration-300 
                       text-lg sm:text-xl lg:text-2xl font-semibold"
          >
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
