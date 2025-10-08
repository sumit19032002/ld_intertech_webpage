import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; 
import service06 from "../assets/service06.png";
import service05 from "../assets/service05.png";
import service02 from "../assets/service02.png";
import service03 from "../assets/service03.png";
import service04 from "../assets/service04.png";
import service01 from "../assets/service01.png";

const services = [
  { 
    title: "UX/UI Design", 
    image: service05,
    description: "We design intuitive, modern user interfaces and experiences that engage your audience."
  },
  { 
    title: "Graphic Design", 
    image: service04,
    description: "Creative visuals, branding, and designs that make your business stand out."
  },
  { 
    title: "Full Stack Development", 
    image: service01,
    description: "Building scalable web & mobile apps with modern front-end and back-end technologies."
  },
  { 
    title: "Digital Marketing", 
    image: service02,
    description: "Boost your online presence with SEO, social media, and targeted campaigns."
  },
  { 
    title: "Embedded Systems", 
    image: service03,
    description: "Custom embedded solutions for IoT, robotics, and automation projects."
  },
  { 
    title: "Mechanical Design", 
    image: service06,
    description: "Engineering precise 3D models and prototypes for mechanical products."
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-12 sm:py-16 lg:py-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light italic text-left px-4 sm:px-10 lg:px-20 mb-10 sm:mb-12">
        OUR <span className="not-italic font-normal">SERVICES</span>
      </h2>

      {/* Services Grid */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 lg:px-20">
        {services.map((service, idx) => (
          <Link
          to="/services-details"
          key={idx}
        className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 h-72 sm:h-80 lg:h-96 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-transform"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{service.title}</h3>
              {/* Arrow Circle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-neutral-800 relative transition-colors duration-300 group-hover:bg-purple-600">
                <ArrowUpRight className="text-purple-400 absolute transition-opacity duration-300 group-hover:opacity-0" />
                <ArrowRight className="text-white absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>

            {/* Image overlapping card border */}
            <div className="absolute bottom-0 right-0 -mb-2 -mr-2">
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain transition-transform duration-500 group-hover:scale-150"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
