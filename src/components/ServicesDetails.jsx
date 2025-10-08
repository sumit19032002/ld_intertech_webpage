import React from "react";
import Navbar from "./Navbar"; 
import uxuiImg from "../assets/uiux.webp"; 
import graphicImg from "../assets/graphix.webp"; 
import fullstackImg from "../assets/fullstack.webp"; 
import marketingImg from "../assets/digital.webp"; 
import embeddedImg from "../assets/embaded.webp"; 
import thermalImg from "../assets/machin.webp"; 

const services = [
  {
    title: "UX/UI Design",
    description:
      "We create intuitive and visually stunning designs that prioritize user experience, ensuring every interaction feels effortless and engaging.",
    skills: [
      "UX Design",
      "UI Design",
      "Design System",
      "Web Design",
      "SaaS Design",
      "App Design",
      "Dashboard Design",
      "Webflow",
    ],
    image: uxuiImg,
  },
  {
    title: "Graphic Design",
    description:
      "We bring your brand to life with creative, impactful designs, from logos to marketing materials, that resonate with your target audience.",
    skills: [
      "Branding Identity",
      "Marketing Collateral",
      "Illustration",
      "Print Design",
      "Logo Design",
      "Packaging Design",
    ],
    image: graphicImg,
  },
  {
    title: "Full Stack Development",
    description:
      "Our expertise spans front-end to back-end, delivering fully integrated web and mobile applications that are robust, secure, and scalable.",
    skills: [
      "Web Development",
      "Mobile App Development",
      "API Integration",
      "Database Management",
      "Cloud Deployment",
      "Dashboard Developement",
    ],
    image: fullstackImg,
  },
  {
    title: "Digital Marketing",
    description:
      "We develop custom embedded systems and IoT solutions that connect devices, streamline processes, and enhance automation.",
    skills: [
      "SEO Optimization",
      "Social Media Management",
      "PPC Campaigns",
      "E-mail Marketing",
      "Analytics & Reporting",
    ],
    image: marketingImg,
  },
  {
    title: "Embedded Systems",
    description:
      "We develop custom embedded systems and IoT solutions that connect devices, streamline processes, and enhance automation.",
    skills: [
      "IoT Solutions",
      "Firmware Development",
      "PCB Design",
      "Sensor Integration",
      "Embedded Software Development",
      "Hardware Prototyping",
      "System Design and Testing",
    ],
    image: embeddedImg,
  },
  {
    title: "Thermal Solutions & Mechanical Design",
    description:
      "We deliver expert thermal solutions and mechanical design, optimizing system performance, energy efficiency, and ensuring precise, reliable results.",
    skills: [
      "Thermal System Design & Optimization",
      "Heat Transfer Analysis",
      "Heating Technology Integration",
      "Finite Element Analysis (FEA)",
      "Thermal and Mechanical Testing",
    ],
    image: thermalImg,
  },
];

export default function ServicesIntro() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="py-12 px-4 sm:py-16 sm:px-8 lg:px-24">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-10 sm:mb-12 text-center md:text-left">
          WE CREATE DIGITAL SOLUTIONS <br className="hidden sm:block" />
          THAT ELEVATE YOUR BRAND AND <br className="hidden sm:block" />
          BRING YOUR IDEAS TO LIFE.
        </h2>

        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12 bg-neutral-900 p-6 sm:p-8 rounded-2xl mb-10 sm:mb-12"
          >
            {/* Left Content */}
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-full text-xs sm:text-sm font-medium shadow hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-lg w-full sm:w-4/5 lg:w-3/4 object-cover"
              />
            </div>
          </div>
        ))}

        <footer className="mt-12 sm:mt-16 text-gray-500 text-xs sm:text-sm border-t border-gray-700 pt-4 sm:pt-6 text-center">
          © 2024. All Rights Reserved | Privacy Policy
        </footer>
      </section>
    </div>
  );
}
