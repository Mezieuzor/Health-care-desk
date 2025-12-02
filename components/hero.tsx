export default function Hero() {
  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance">
              Health Desk Clinic: All Natural Supplements
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-pretty">
              Discover our comprehensive range of science-backed natural supplements designed to support your complete
              wellness journey. From targeted nutritional solutions to comprehensive health optimization, were here to
              help you achieve your health goals with integrity and transparency.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
              Shop Now
            </button>
          </div>

          {/* Right Side - Doctor Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/female-doctor-healthcare-professional.jpg"
                alt="Female healthcare professional in white coat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
