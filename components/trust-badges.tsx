import { Leaf, Heart, Check, Beaker, Droplet } from "lucide-react"
import image from "@/public/image1.jpg"

const badges = [
  { name: "All Natural", icon: Leaf },
  { name: "Cruelty Free", icon: Heart },
  { name: "Money-back Guarantee", icon: Check },
  { name: "Clinically Tested", icon: Beaker },
  { name: "Non-GMO", icon: Droplet },
]

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16" style={{
      backgroundImage: 'url(' + image.src + ')',
      backgroundPosition: 'center',
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {badges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <Icon className="w-10 h-10 text-blue-600 mb-3" />
                <p className="font-semibold text-slate-900 text-sm">{badge.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
