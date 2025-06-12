"use client"

import { useState, useEffect } from "react"
import { Calendar, TrendingUp, AlertTriangle } from "lucide-react"

export function Hero() {
  const [reviewsCount, setReviewsCount] = useState(25) // Фіксоване початкове значення
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Генеруємо випадкове число тільки на клієнті
    setReviewsCount(Math.floor(Math.random() * 50) + 20)
  }, [])

  return (
    <section className="relative min-h-[280px] flex items-center justify-center overflow-hidden">
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
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
          Ireland's Top Betting Sites
          <span className="block text-emerald-600">Expert Tested</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 max-w-3xl mx-auto">
          Trusted rankings of the best Irish-licensed betting platforms with exclusive bonuses.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-4">
          {/* Rating Updated Badge */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 floating">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold">
                  Updated{" "}
                  {isClient
                    ? new Date().toLocaleDateString("en-IE", {
                      day: "numeric",
                      month: "short",
                    })
                    : "Today"}
                </p>
              </div>
            </div>
          </div>

          {/* New Reviews Badge */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 floating">
            <div className="flex items-center gap-2 text-white">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold">+{reviewsCount} Reviews</p>
              </div>
            </div>
          </div>

          {/* 18+ Warning Badge */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 floating">
            <div className="flex items-center gap-2 text-white">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold">18+ Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
