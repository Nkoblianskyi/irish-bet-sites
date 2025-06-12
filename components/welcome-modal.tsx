"use client"

import { useState, useEffect } from "react"
import { X, Star, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { bettingSites } from "@/lib/data"

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Беремо топ-3 сайти з мок даних
  const topSites = bettingSites.slice(0, 3)

  useEffect(() => {
    // Перевіряємо, чи вже показували модальне вікно
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal")
    if (!hasSeenModal) {
      // Показуємо модальне вікно через 8 секунд
      const timer = setTimeout(() => {
        setIsOpen(true)
        setTimeout(() => setIsVisible(true), 50)
        document.body.classList.add("modal-open")
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsOpen(false)
      document.body.classList.remove("modal-open")
    }, 300)
    localStorage.setItem("hasSeenWelcomeModal", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible ? "opacity-60" : "opacity-0"}`}
        onClick={closeModal}
      />

      {/* Modal - компактний дизайн без скролів */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        {/* Компактний заголовок */}
        <div className="relative bg-gradient-to-br from-emerald-600 to-orange-600 p-4 lg:p-6 text-white overflow-hidden rounded-t-2xl">
          {/* Декоративні елементи */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10" />

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 w-7 h-7 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Компактний заголовок */}
          <div className="relative z-10 pr-8">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5 text-yellow-300" />
              <span className="text-xs font-medium opacity-90">Ireland's Top</span>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Best Betting Sites</h2>
          </div>
        </div>

        {/* Компактний контент */}
        <div className="p-4 lg:p-6">
          <div className="space-y-3">
            {topSites.map((site, index) => (
              <div
                key={site.id}
                className="relative bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-3 lg:p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                {/* Компактний rank badge */}
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {index + 1}
                </div>

                <div className="flex items-center gap-3 pl-2">
                  {/* Компактне лого */}
                  <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-1.5 lg:p-2">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={`${site.name} logo`}
                      width={60}
                      height={40}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Компактний контент */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-sm lg:text-base truncate">{site.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-600">{site.rating}</span>
                      </div>
                    </div>

                    <div className="bg-emerald-100 rounded-md px-2 py-1">
                      <p className="text-xs lg:text-sm font-semibold text-emerald-800 truncate">{site.bonus}</p>
                    </div>
                  </div>

                  {/* Кнопка "Claim Bonus" замість стрілки */}
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeModal}
                    className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-md transition-colors whitespace-nowrap"
                  >
                    {site.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Компактний CTA */}
          <div className="mt-4 text-center">
            <button onClick={closeModal} className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              View All Sites →
            </button>
          </div>
        </div>

        {/* Компактний футер */}
        <div className="bg-gray-50 px-4 lg:px-6 py-3 lg:py-4 text-center border-t rounded-b-2xl">
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-red-600">18+</span> | Play Responsibly
          </p>
        </div>
      </div>
    </div>
  )
}

export { WelcomeModal }
