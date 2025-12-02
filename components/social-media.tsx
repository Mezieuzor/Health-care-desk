import logo from "@/public/Health-care-8.png"
import Image from "next/image"
import { Facebook, Twitter, Send, Linkedin } from "lucide-react"

export default function SocialMedia() {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center">
      
      {/* Logo */}
      <div className="mb-4">
        <Image 
          src={logo}     // ← update with your actual logo path
          alt="Health Desk Logo"
          width={160} 
          height={60}
          className="object-contain"
        />
      </div>

      {/* Follow Us Button */}
      <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md mb-6 hover:bg-blue-50 transition">
        Follow Us
      </button>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        
        <a href="#" className="bg-[#19A7F6] text-white p-2 rounded-full">
          <Facebook size={20} />
        </a>

        <a href="#" className="bg-[#19A7F6] text-white p-2 rounded-full">
          <Twitter size={20} />
        </a>

        <a href="#" className="bg-[#19A7F6] text-white p-2 rounded-full">
          <Send size={20} /> {/* Telegram icon */}
        </a>

        <a href="#" className="bg-[#19A7F6] text-white p-2 rounded-full">
          <Linkedin size={20} />
        </a>

      </div>

    </section>
  )
}
