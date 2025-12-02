export default function EcoManufacturing() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="/supplement-manufacturing-facility-bottling.jpg"
              alt="Sustainable supplement manufacturing facility"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Eco-Conscious Manufacturing</h2>
            <p className="text-slate-600 leading-relaxed">
              Our state-of-the-art manufacturing facility employs sustainable practices that protect our planet while
              ensuring superior quality. From eco-friendly packaging to energy-efficient production, were committed to
              responsible stewardship at every step.
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
