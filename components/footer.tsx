"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/betting-guide", label: "Betting Guide" },
    { href: "/cookie", label: "Cookie Policy" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  const organizations = [
    {
      name: "GambleAware",
      logo: "/gamble.webp",
      url: "https://www.gambleaware.org",
    },
    { name: "GamCare", logo: "/gamecare.svg", url: "https://www.gamcare.org.uk" },
    {
      name: "GamblingTherapy",
      logo: "/gordon.png",
      url: "https://www.gamblingtherapy.org",
    },
    {
      name: "Gamblers Anonymous IE",
      logo: "/anonymos.avif",
      url: "https://www.gamblersanonymous.ie",
    },
    { name: "EGBA", logo: "/egba.png", url: "https://www.egba.eu" },
  ]

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-emerald-600">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="relative pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-2">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                <div className="text-2xl font-bold text-emerald-600">IE Best Betting Sites</div>
              </Link>
              <p className="text-gray-300 mb-4 max-w-md">
                Ireland's most trusted source for betting site reviews and comparisons. We help Irish players find the
                best licensed betting platforms.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full">
                  <Image src="/flag.png" alt="flag" width={16} height={16} />
                  <span className="text-sm font-medium text-emerald-800">Irish Licensed</span>
                </div>
                <div className="bg-orange-600 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">18+</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Responsible Gambling Organizations */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">Responsible Gambling Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center mb-6">
              {organizations.map((org, index) => (
                <div key={index} className="bg-white rounded-lg p-2 hover:scale-105 transition-transform">
                  <Link
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${org.name} website`}
                  >
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={120}
                      height={60}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-4">© 2025 IE Best Betting Sites. All rights reserved.</p>
            <p className="text-sm text-red-400 font-semibold">
              18+ | Irish players only | Gambling can be addictive — Play safe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
