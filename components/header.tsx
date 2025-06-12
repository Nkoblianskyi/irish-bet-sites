"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 celtic-pattern">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <Image src="/favicon.ico" alt="Logo" width={24} height={24} className="w-6 h-6 sm:w-8 sm:h-8" />
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 truncate">
              <span className="inline md:hidden">IE Betting</span>
              <span className="hidden md:inline">IE Best Betting Sites</span>
            </div>
          </Link>

          {/* Right Side - Badges */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full">
              <Image src="/flag.png" alt="Flag" width={24} height={24} className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-sm font-medium text-emerald-800">Irish Licensed</span>
            </div>
            <div className="bg-orange-100 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-orange-800">18+</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-3 mt-3">
              <div className="flex items-center space-x-1 bg-emerald-100 px-2 py-1 rounded-full">
                <Image src="/flag.png" alt="Flag" width={24} height={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-xs font-medium text-emerald-800">Irish Licensed</span>
              </div>
              <div className="bg-orange-100 px-2 py-1 rounded-full">
                <span className="text-xs font-medium text-orange-800">18+</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
