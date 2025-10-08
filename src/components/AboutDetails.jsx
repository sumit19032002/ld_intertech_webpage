import React from "react";
import Navbar from "./Navbar";


import value01 from "../assets/about01.webp"; 
import value02 from "../assets/about02.webp";
import value03 from "../assets/about03.webp";

const values = [
  {
    title: "Adaptable",
    description:
      "We seamlessly adapt to our clients' changing needs, driving innovation to provide exceptional, customized solutions.",
    image: value01,
  },
  {
    title: "Integrity",
    description:
      "We are committed to unwavering honesty, fostering transparent communication, authentic collaborations, and delivering work that embodies our dedication to truth and transparency.",
    image: value02,
  },
  {
    title: "Innovative",
    description:
      "We passionately chase new ideas, pushing the boundaries to create innovative solutions that set a new standard for creative excellence..",
    image: value03,
  },
];

export default function AboutDetails() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar /> {/* ✅ Navbar included */}

      {/* Story + Vision Section */}
      <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16">
          OUR STORY, VISION & VALUES
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <h3 className="text-3xl sm:text-4xl italic font-semibold text-gray-300">
              WHO WE ARE
            </h3>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl lg:text-4xl  font-light text-gray-300">
              We don’t just build products—we create experiences. Whether it's a
              sleek UI/UX design, a full-scale platform, or cutting-edge embedded
              systems, we transform your boldest ideas into reality. Fueled by
              creativity, powered by technology, and driven by results, we’re here
              to elevate your brand and accelerate your growth in the digital age.
            </p>
          </div>
        </div>

        {/* Why Us */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
  <h4 className="text-3xl sm:text-4xl italic font-semibold text-gray-300 ">
    Why Us
  </h4>
  <p className="text-3xl sm:text-4xl lg:text-4xl  font-light text-gray-300">
    We believe in the power of innovation and the importance of technical
    precision. Our mission is to equip businesses with the tools they need
    to thrive in an increasingly digital world. From hardware to software,
    cloud systems, and marketing strategies, InterTech Innovation offers
    holistic solutions that lead you into the future.
  </p>
</div>


        {/* ✅ Our Values Section */}
        <h2 className="text-3xl sm:text-4xl font-light italic mb-12">
          OUR <span className="not-italic font-bold">VALUES</span>
        </h2>

        <div className="space-y-16">
          {values.map((val, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 border-t border-gray-700 pt-8"
            >
              {/* Left Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{val.title}</h3>
                <p className="text-gray-300 leading-relaxed">{val.description}</p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2">
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm border-t border-gray-700 pt-6">
          © 2024. All Rights Reserved | Privacy Policy
        </footer>
      </section>
    </div>
  );
}
