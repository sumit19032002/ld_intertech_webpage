import work1 from "../assets/work02.png";
import work2 from "../assets/work.png";

const works = [
  {
    title: "Vending Machines’ Catalogue",
    image: work1,
  },
  {
    title: "Website Redesign",
    image: work2,
  },
];

export default function Work() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light italic mb-8 sm:mb-12 px-6 sm:px-12 lg:px-24">
        OUR <span className="not-italic font-normal">WORK</span>
      </h2>

      {/* Works Grid */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-12 lg:px-24">
        {works.map((work, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Image Card */}
            <div className="w-full h-64 sm:h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-center">
              {work.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
