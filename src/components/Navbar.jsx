import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

<Link
  to="/about-details"
  className={`hover:text-purple-300 text-lg lg:text-xl ${isActive("/about-details") ? "text-purple-400 font-semibold italic" : ""}`}
>
  About
</Link>

  return (
    <header className="flex justify-between items-center px-6 sm:px-10 py-5 bg-black text-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2 z-20">
        <img src={logo} alt="Logo" className="h-12 sm:h-14 w-auto" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link
          to="/"
          className={`hover:text-purple-400 italic font-semibold text-lg lg:text-xl ${isActive("/") && "text-purple-400 italic font-bold"}`}
        >
          Home
        </Link>
        <Link
          to="/services-details"
          className={`hover:text-purple-300 text-lg lg:text-xl ${isActive("/services-details") && "text-purple-300"}`}
        >
          Services
        </Link>
        <Link
          to="/about-details"
          className={`hover:text-purple-300 text-lg lg:text-xl ${isActive("/about-details") && "text-purple-300"}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition text-lg lg:text-xl ${isActive("/contact") && "bg-purple-200"}`}
        >
          Contact
        </Link>
      </nav>

      {/* Hamburger icon at top right */}
      <button
        aria-label="Toggle menu"
        className="md:hidden absolute top-5 right-6 z-30"
        onClick={() => setMenuOpen(true)}
      >
        {/* Hamburger icon */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" 
             viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* Overlay menu - slides in from right */}
      {menuOpen && (
        <>
          {/* Backdrop for mobile menu */}
          <div
            className="fixed inset-0 bg-black/80 z-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="fixed top-0 right-0 h-full w-72 bg-black p-6 flex flex-col gap-8 z-50 shadow-xl transition-all animate-slideIn">
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 w-10 h-10 rounded-md border-2 border-white flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`mt-4 hover:text-purple-400 italic font-semibold text-lg ${isActive("/") && "text-purple-400 italic font-bold"}`}
            >
              Home
            </Link>
            <Link
              to="/services-details"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-purple-300 text-lg ${isActive("/services-details") && "text-purple-300"}`}
            >
              Services
            </Link>
            <Link
              to="/about-details"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-purple-300 text-lg ${isActive("/about-details") && "text-purple-300"}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`bg-white text-black px-6 py-3 rounded-md hover:bg-purple-400 transition text-lg font-medium ${isActive("/contact") && "bg-purple-200"}`}
            >
              Contact
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
