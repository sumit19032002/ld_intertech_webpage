const powers = [
  "Business design thinking",
  "Cross-functional team",
  "Fast delivery cycles",
  "Connecting brand and product",
];

export default function SuperPowers() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-12 lg:px-24 items-start">
        
        {/* Left Title */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light italic">
          SUPER <span className="not-italic font-normal">POWERS</span>
        </h2>

        {/* Right List */}
        <ul className="space-y-4 sm:space-y-6">
          {powers.map((power, idx) => (
            <li
              key={idx}
              className="flex items-center text-lg sm:text-2xl lg:text-3xl"
            >
              <span className="mr-3 text-gray-400">✺</span>
              {power}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
