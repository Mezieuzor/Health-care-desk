export default function BrandStory() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="/citrus-fruits-supplements-natural-ingredients.jpg"
              alt="Natural ingredients and citrus fruits"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Health Care Desk – The Future of Smart Health
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Health Desk Clinic, we believe that true wellness comes from harnessing the power of nature combined
              with modern science. Our commitment to excellence means we source only the finest all-natural ingredients,
              rigorously tested for purity and potency.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every product we create reflects our dedication to your health journey, backed by transparent research and
              formulated by experts who care about your well-being as much as you do.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
