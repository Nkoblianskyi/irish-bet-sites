"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { bettingSites } from "@/lib/data"
// Import Link from next/navigation
import Link from "next/link"

export function BettingSites() {
  return (
    <section
      id="betting-sites"
      className="py-9 relative"
      style={{
        backgroundImage: "url('/bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gray-900/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bettingSites.map((site, index) => (
            <Link key={site.id} href={site.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div
                className="animated-border floating relative overflow-hidden h-full rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="card-inner">
                  <Card className="border-0 h-full bg-transparent">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Rank Badge */}
                      <div className="absolute top-4 right-4 bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        {/* Logo */}
                        <div className="mb-4">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={`${site.name} logo`}
                            width={120}
                            height={60}
                            className="mx-auto"
                          />
                        </div>

                        {/* Name and Rating */}
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                              />
                            ))}
                            <span className="ml-2 text-sm font-medium text-gray-600">{site.rating}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {site.claimed.toLocaleString()} Irish Players Claimed Bonus
                          </p>
                        </div>

                        {/* Bonus */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                          <p className="text-center font-semibold text-emerald-800">{site.bonus}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {site.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 glow-orange mt-auto">
                        {site.cta}
                      </Button>

                      {/* Disclaimer */}
                      <p className="text-xs text-gray-400 text-center mt-3">{site.disclaimer}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
