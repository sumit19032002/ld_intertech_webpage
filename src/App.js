import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import SuperPowers from "./components/SuperPowers";
import ContactSection from "./components/ContactSection";
import AboutDetails from "./components/AboutDetails";
import ServicesDetails from "./components/ServicesDetails";
import ContactPage from "./components/ContactPage"; // ✅ New Contact Page

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Work />
                <SuperPowers />
                <ContactSection />
              </>
            }
          />
          
          {/* About Page */}
          <Route path="/about-details" element={<AboutDetails />} />

          {/* Services Page */}
          <Route path="/services-details" element={<ServicesDetails />} />
           
          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
