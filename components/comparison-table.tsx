"use client"

export function ComparisonTable() {
  const valuedFactors = [
    {
      icon: "🏆",
      title: "Trusted Irish License",
      description: "All recommended sites are fully licensed and regulated in Ireland for safe play.",
    },
    {
      icon: "💳",
      title: "Fast & Secure Payments",
      description: "Fast withdrawals and a wide range of secure deposit options are key for Irish players.",
    },
    {
      icon: "⚽",
      title: "Local Sports Focus",
      description: "Coverage of popular Irish sports — GAA, horse racing, rugby, and football is highly valued.",
    },
    {
      icon: "📱",
      title: "Seamless Mobile Experience",
      description: "Irish players often bet on mobile — apps and mobile-optimised sites are essential.",
    },
    {
      icon: "🎁",
      title: "Valuable Bonuses",
      description: "Quality welcome offers and loyalty rewards attract many new and repeat bettors.",
    },
    {
      icon: "🛡️",
      title: "Strong Responsible Gambling Policies",
      description: "Irish bettors value clear tools for self-exclusion and support from trusted organisations.",
    },
  ]

  return (
    <section id="comparison" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Irish Bettors Value Most</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The key factors Irish punters care about when choosing a betting site
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valuedFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 floating glow-emerald"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
