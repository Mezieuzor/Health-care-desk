import { Star } from "lucide-react";

const products = [
  { name: "Dent Pure", rating: 4.8 },
  { name: "True Fem", rating: 4.9 },
  { name: "Vita Renew", rating: 4.7 },
  { name: "ProsteaZen", rating: 4.8 },
  { name: "Nerve Freedom", rating: 4.9 },
];

export default function BestSellers() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Our Best Sellers
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          Formulated with science-based all-natural ingredients and backed by
          clinical research to support your health goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-200"
            >
              <div className="bg-gradient-to-br from-blue-100 to-slate-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={`/supplement-bottle-.jpg?height=200&width=150&query=supplement+bottle+${product.name}`}
                  alt={product.name}
                  className="w-24 h-32 object-cover"
                />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}
                <span className="text-sm text-slate-600 ml-1">
                  {product.rating}
                </span>
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
