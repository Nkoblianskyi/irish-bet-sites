"use client"

export function HowToChoose() {
  const steps = [
    {
      number: "1️⃣",
      title: "Understand Your Betting Preferences",
      content:
        "Before choosing a betting platform, it's important to consider what type of bettor you are. Whether you enjoy live betting, prefer specific sports like GAA or football, or seek casino integration — identifying your priorities helps narrow down your options.",
    },
    {
      number: "2️⃣",
      title: "Check for Licensing & Security",
      content:
        "Always ensure the site is fully licensed and regulated in Ireland. This guarantees a safe, secure betting environment where your funds and personal data are protected.",
    },
    {
      number: "3️⃣",
      title: "Look for Competitive Odds",
      content:
        "Odds quality can greatly affect your potential returns. Top Irish betting sites consistently offer competitive odds across a wide range of sports and events — giving you better value with every wager.",
    },
    {
      number: "4️⃣",
      title: "Evaluate Mobile Experience",
      content:
        "Since many Irish players bet on mobile devices, it's crucial to choose a site with an intuitive, responsive mobile app or web interface. A seamless experience ensures you can place bets easily anytime, anywhere.",
    },
    {
      number: "5️⃣",
      title: "Consider Promotions & Loyalty Offers",
      content:
        "While welcome bonuses are attractive, also review ongoing promotions and loyalty programs. The best sites reward regular players with enhanced offers, free bets, and personalised incentives.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Choose the Right Betting Site for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Як правильно вибрати сайт для ставок для себе</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500 floating"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-600 flex-shrink-0">{step.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
