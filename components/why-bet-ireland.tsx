"use client"

import { Shield, Smartphone, CreditCard, Trophy } from "lucide-react"

export function WhyBetIreland() {
  const reasons = [
    {
      icon: Shield,
      title: "🇮🇪 Irish Licensed Sites",
      description: "All recommended sites are fully licensed and regulated in Ireland",
    },
    {
      icon: Trophy,
      title: "⚽ Huge Sports Selection",
      description: "Comprehensive coverage of GAA, football, rugby, and international sports",
    },
    {
      icon: CreditCard,
      title: "🔒 Secure & Safe Payments",
      description: "Protected transactions with trusted Irish banking partners",
    },
    {
      icon: Smartphone,
      title: "📱 Mobile Optimised",
      description: "Seamless betting experience on all devices and platforms",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Bet Online in Ireland?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of choosing Irish-licensed betting platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 floating glow-emerald"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{reason.title.split(" ")[0]}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title.substring(2)}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
