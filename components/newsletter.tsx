"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Text */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Lets Grow Together</h2>
            <p className="text-blue-100 text-sm md:text-base">
              Well keep it simple. Only the news and updates you need.
            </p>
          </div>

          {/* Right Side - Email Form */}
          <div className="flex-1 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
             <input
  type="email"
  placeholder="Please Enter Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="flex-1 px-4 py-3 text-slate-900 placeholder-slate-500 
             outline-none border border-white 
             focus:ring-2 focus:ring-blue-300 bg-transparent"
 />
              <button className="bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 px-8 transition duration-200 whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
