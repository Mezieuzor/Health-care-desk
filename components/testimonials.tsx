import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "I came for superior wellness and left with a difference in my life. Highly recommended!",
    product: "Vita Renew",
    rating: 5,
    image: "/supplement-bottle.jpg",
  },
  {
    name: "James P.",
    text: "The quality of these supplements is unmatched. I feel the difference every single day.",
    product: "True Fem",
    rating: 5,
    image: "/supplement-bottle.jpg",
  },
  {
    name: "Anonymous",
    text: "After trying many brands, Health Desk finally delivered on their promises. Worth every penny.",
    product: "Nerve Freedom",
    rating: 5,
    image: "/supplement-bottle.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Verified Customer Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
