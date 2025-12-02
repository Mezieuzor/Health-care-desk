import { Leaf, Heart, Shield, Flower } from "lucide-react";

const categories = [
  { name: "Weight Loss", icon: Leaf },
  { name: "Nerve Pain", icon: Shield },
  { name: "Skin Care", icon: Flower },
  { name: "Men's Health", icon: Heart },
  { name: "Women's Health", icon: Heart },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Nutrition Solutions
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          for Your Complete Well-Being
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-200 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-4">
                  {category.name}
                </h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
