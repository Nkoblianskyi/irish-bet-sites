"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Stadium Lights Background */}
      <div className="absolute inset-0 stadium-lights opacity-20"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-orange-900/20"></div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full particle-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full particle-glow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-300 rounded-full particle-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-300 rounded-full particle-glow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          Ireland's Top Betting Sites
          <span className="block text-emerald-600">Expert Tested</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Trusted rankings of the best Irish-licensed betting platforms with exclusive bonuses.
        </p>

        <div className="flex justify-center items-center">
          <Button
            size="default"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base glow-emerald floating"
            onClick={() => {
              const element = document.getElementById("betting-sites")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Claim Top Bonus
          </Button>
        </div>
      </div>
    </section>
  )
}
