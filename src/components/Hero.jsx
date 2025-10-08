import React, { useState } from "react";
import { Link } from "react-router-dom";   
import logo from "../assets/Logo.png";
import taskImg from "../assets/task.png";
import heroVideo from "../assets/video1.mp4";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 sm:px-10 py-5 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 sm:h-14 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            to="/"
            className="text-purple-400 italic font-semibold text-lg lg:text-xl"
          >
            Home
          </Link>
          <Link
  to="/services-details"
  className="hover:text-purple-300 text-lg lg:text-xl"
>
  Services
</Link>

          <Link to="/about-details" className="hover:text-purple-300 text-lg lg:text-xl">
            About
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition text-lg lg:text-xl"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl z-50"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Nav (Right Side Drawer) */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black border-l border-gray-800 flex flex-col items-center justify-center gap-8 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link
            to="/"
            className="text-purple-400 italic font-semibold text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
  to="/services-details"
  className="hover:text-purple-300 text-2xl"
  onClick={() => setIsOpen(false)}
>
  Services
</Link>

          <Link
            to="/about-details"
            className="hover:text-purple-300 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 sm:px-10 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          CRAFTING{" "}
          <span className="inline-block align-middle rounded-full overflow-hidden mx-1">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-14 w-32 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-20 lg:w-40 object-cover"
            />
          </span>
          THE <br />
          DIGITAL FUTURE WITH <br />
          UNRIVALED CREATIVITY
          <br />
          <span className="inline-block align-middle rounded-full overflow-hidden mx-1">
            <img
              src={taskImg}
              alt="creativity"
              className="h-14 w-32 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-24 lg:w-56 object-cover"
            />
          </span>
          AND PRECISION
        </h1>

        <p className="text-gray-300 mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl">
          Innovative solutions for your digital transformation
        </p>
      </div>
    </section>
  );
}
