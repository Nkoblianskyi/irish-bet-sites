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
    { href: "/compare", label: "Compare" },
    { href: "/bonuses", label: "Bonuses" },
    { href: "/betting-guide", label: "Betting Guide" },
    { href: "/safe-gambling", label: "Safe Gambling" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 celtic-pattern">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32}  />
            <div className="text-2xl font-bold text-emerald-600">IE Best Betting Sites</div>
          </Link>

          {/* Right Side - Badges */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full">
              <Image src="/flag.png" alt="flag" width={16} height={16} />
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full">
                <span className="text-xl">🇮🇪</span>
                <span className="text-xs font-medium text-emerald-800">Irish Licensed</span>
              </div>
              <div className="bg-orange-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-orange-800">18+</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
