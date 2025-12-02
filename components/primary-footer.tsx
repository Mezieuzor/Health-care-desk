
import logo from "@/public/Health-care-7.png"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function PrimaryFooter() {
  const products = [
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro flow"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma care"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"],
              ]

  return (
    <section className="bg-white py-12 md:py-16 border-b-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <div className="border-r-4 border-blue-300 pr-8">
             <div>
            <img src={logo.src} alt="Health Desk Logo" className="w-13 h-13 object-contain" />
          </div>
            <div className="space-y-3 text-slate-600 text-sm">
              <p>
                <strong>Address:</strong> 7823 Red Oak Trail, Austin, TX, 78745, United States
              </p>
              <p>
                <strong>Phone:</strong> (512) 555-2376
              </p>
              <p>
                <strong>Email:</strong> Ereforce@outlook.com
              </p>
            </div>
          </div>

          {/* Right Column - Products */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-6">Our Products</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro flow"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma care"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
                ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"],
              ].map((column, colIdx) => (
                <div key={colIdx} className="space-y-2">
                  {column.map((product, idx) => (
                    <p key={idx} className="text-sm text-slate-700 hover:text-blue-600 cursor-pointer transition">
                      {product}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
