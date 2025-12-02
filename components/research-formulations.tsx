export default function ResearchFormulations() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              100% Natural Components
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We harness the goodness of nature to create supplements formulated
              with pure, naturally-sourced ingredients. Our scientific approach
              ensures every formula delivers maximum bioavailability and
              effectiveness for superior health support.
            </p>
            <button
              className="
  bg-white
  text-blue-600
  border
  border-blue-600
  font-medium
  py-2
  px-6
  rounded-lg
  hover:bg-blue-50
  transition
  duration-200
  mx-auto
  block
  w-fit
"
            >
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="/laboratory-test-tubes-beakers-scientific.jpg"
              alt="Laboratory test tubes and scientific equipment"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
