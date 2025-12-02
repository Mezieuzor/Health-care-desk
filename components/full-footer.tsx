import logo from "@/public/Health-care-7.png"

export default function FullFooter() {
  return (
    <footer className="bg-white text-slate-600 py-12 md:py-16 border-t-4 border-blue-400">
      <div className="max-w-7xl mx-auto px-4">
        {/* Disclaimer Section */}
        <div className="mb-8 pb-8 border-b border-slate-300">
          <p className="text-xs text-center text-slate-500 mb-4">
            These statements have not been evaluated by the Food and Drug Administration.
          </p>
          <p className="text-xs text-center text-slate-500">
            These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
          </p>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <p className="text-sm text-slate-600">© 2025, Health Desk Clinic. All Rights Reserved.</p>

          {/* Center - Payment Methods */}
          <div className="flex items-center gap-3">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23FF5F00' width='48' height='32'/%3E%3Crect fill='%23EB001B' x='16' width='16' height='32'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32'/%3E%3C/svg%3E" alt="Discover" className="h-6" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231A1F71' width='48' height='32'/%3E%3C/svg%3E" alt="Visa" className="h-6" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%23006FCF' width='48' height='32'/%3E%3C/svg%3E" alt="American Express" className="h-6" />
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition">
              Terms And Conditions
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition">
              Privacy Policy
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
