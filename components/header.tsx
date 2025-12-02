"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import logo from "@/public/Health-care-7.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div>
            <img src={logo.src} alt="Health Desk Logo" className="w-13 h-13 object-contain" />
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            Home
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            Shop
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            About Us
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            FAQ
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            Blog
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
            Contact Us
          </a>
        </div>

        {/* Cart & Account Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition">
            <ShoppingCart size={20} className="text-slate-700" />
          </button>
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              Shop
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              FAQ
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              Blog
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
