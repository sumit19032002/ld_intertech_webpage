import React from "react";
import { useNavigate } from "react-router-dom";
import contactBg from "../assets/contact.png";
import "./ContactSection.css";

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <div className="contact-section-outer  px-6 lg:px-12">
      
      {/* Contact Section */}
      <section className="contact-section">
        <img src={contactBg} alt="Contact background" className="contact-bg" />

        <div className="contact-overlay"></div>

        <div className="contact-content">
          
          {/* Desktop/Tablet: 2 lines */}
          <h2 className="desktop-text">
            LET’S MAKE GREAT <br /> WORK TOGETHER
          </h2>

          {/* Mobile: 3 lines */}
          <h2 className="mobile-text">
            LET’S MAKE <br /> GREAT WORK <br /> TOGETHER
          </h2>

          <button onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
        
      </section>
          
      {/* Footer Section */}
      {/* Footer */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm px-6 max-w-6xl mx-auto gap-3 sm:gap-0 text-center sm:text-left">
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
