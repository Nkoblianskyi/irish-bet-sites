"use client"

import Image from "next/image"
import { CheckCircle, Shield, Zap, Users } from "lucide-react"

export function WhyBetIreland() {
  const advantages = [
    {
      icon: Shield,
      title: "Fully Licensed & Regulated",
      description:
        "All recommended betting sites are licensed by the Irish Revenue Commissioners, ensuring complete safety and legal compliance for Irish players.",
      image: "/placeholder.svg?height=80&width=80&text=License+Badge",
    },
    {
      icon: Zap,
      title: "Lightning Fast Payouts",
      description:
        "Irish betting sites offer some of the fastest withdrawal times in Europe, with most payments processed within 24 hours.",
      image: "/placeholder.svg?height=80&width=80&text=Fast+Payment",
    },
    {
      icon: Users,
      title: "Local Customer Support",
      description:
        "Get help in your timezone with Irish customer support teams who understand local banking, sports, and betting preferences.",
      image: "/placeholder.svg?height=80&width=80&text=Support+Team",
    },
    {
      icon: CheckCircle,
      title: "GAA & Irish Sports Focus",
      description:
        "Comprehensive coverage of Gaelic Football, Hurling, Irish horse racing, and all the sports that matter most to Irish punters.",
      image: "/placeholder.svg?height=80&width=80&text=GAA+Sports",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/flag.png"
              alt="Irish Flag"
              width={60}
              height={40}
              className="mr-3"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Irish Betting Sites?</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the unique advantages of betting with Irish-licensed platforms designed specifically for Irish
            players
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 floating glow-emerald border-2 border-transparent hover:border-emerald-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>

                {/* Bottom Accent */}
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md border border-emerald-200">
            <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-gray-700 font-medium">Join 500,000+ Irish players betting safely online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
