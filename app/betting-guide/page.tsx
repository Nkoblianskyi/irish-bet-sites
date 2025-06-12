import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BettingGuide() {
  const popularSports = [
    {
      emoji: "🏇",
      title: "Horse Racing",
      description:
        "Ireland's most traditional betting sport, featuring major festivals like the Cheltenham Festival, Irish Grand National, and local racing at the Curragh, Leopardstown, and Fairyhouse. Irish horse racing culture runs deep, with many families having generations of racing knowledge and betting traditions.",
    },
    {
      emoji: "⚽",
      title: "Football",
      description:
        "From the Premier League to the League of Ireland, football betting is hugely popular. Irish punters love backing their local teams like Shamrock Rovers and Dundalk, while also following international competitions like the UEFA Champions League and World Cup.",
    },
    {
      emoji: "🏐",
      title: "GAA (Gaelic Games)",
      description:
        "Uniquely Irish, GAA betting covers Gaelic Football and Hurling championships. The All-Ireland Championships are massive betting events, with county loyalties running deep. Understanding local team dynamics and player form is crucial for successful GAA betting.",
    },
    {
      emoji: "🏉",
      title: "Rugby",
      description:
        "The Six Nations Championship, Rugby World Cup, and Pro14 (now URC) generate significant betting interest. Irish rugby's success in recent years has made betting on Ireland matches particularly popular among local punters.",
    },
    {
      emoji: "🎮",
      title: "Esports",
      description:
        "A rapidly growing betting market in Ireland, especially among younger demographics. Popular games include CS:GO, League of Legends, and Dota 2, with major tournaments offering extensive betting markets.",
    },
  ]

  const betTypes = [
    {
      title: "Single Bet",
      description:
        "The simplest form of betting - one selection on one event. Perfect for beginners and offers the highest chance of winning.",
    },
    {
      title: "Accumulator / Acca",
      description:
        "Multiple selections combined into one bet. All selections must win for the bet to pay out, but potential returns are much higher.",
    },
    {
      title: "In-play / Live Betting",
      description:
        "Betting on events as they happen. Odds change in real-time based on the action, offering dynamic betting opportunities.",
    },
    {
      title: "Over/Under",
      description:
        "Betting on whether a statistic (goals, points, corners) will be over or under a set number. Popular in football and GAA.",
    },
    {
      title: "Handicap",
      description:
        "Giving one team a virtual advantage or disadvantage to level the playing field. Common in rugby and GAA matches.",
    },
    {
      title: "Prop Bets",
      description:
        "Betting on specific events within a game, like first goalscorer, number of yellow cards, or player performance statistics.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Complete Guide to Betting on Sports in Ireland
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Looking to get started with sports betting in Ireland? Or perhaps you're an experienced punter wanting to
              refine your strategy? Our complete guide covers everything you need to know about betting safely and
              smartly on Irish sports and international events.
            </p>
          </div>

          {/* Section 1: History */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">History of Sports Betting in Ireland</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Sports betting has long been a popular activity in Ireland, with a rich tradition of wagering on horse
                racing, GAA, and football that dates back centuries. The Irish have always had a passionate relationship
                with sports, and betting has been an integral part of that culture.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Horse racing, in particular, has been central to Irish betting culture since the 18th century. The
                establishment of the Irish Turf Club in 1790 helped formalize racing and betting practices. Traditional
                bookmakers would set up at racecourses, creating the foundation of Ireland's betting industry.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The introduction of the Betting Act in 1931 regulated betting shops, and by the 1960s, high street
                bookmakers became commonplace across Ireland. The digital revolution of the 2000s transformed the
                landscape, with online betting platforms making wagering more accessible than ever before.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Ireland has one of the most sophisticated and well-regulated betting markets in Europe, with
                strict licensing requirements ensuring player protection while maintaining the country's rich betting
                heritage.
              </p>
            </div>
          </section>

          {/* Section 2: Popular Sports */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Most Popular Sports for Betting in Ireland</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {popularSports.map((sport, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-emerald-300 transition-colors"
                >
                  <div className="text-4xl mb-4">{sport.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sport.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{sport.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Understanding Odds */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Betting Odds in Ireland</h2>
            <div className="bg-emerald-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Learn how to read and compare odds: fractional odds (most common in Ireland), decimal, and American
                formats. Understanding odds is crucial for successful betting as they determine your potential winnings
                and indicate the probability of an outcome.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-600 mb-3">Fractional Odds</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Example:</strong> 5/1 (five-to-one)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Traditional Irish format. For every €1 you bet, you win €5 plus your stake back. Total return: €6.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-600 mb-3">Decimal Odds</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Example:</strong> 6.00
                  </p>
                  <p className="text-gray-600 text-sm">
                    European format. Multiply your stake by the decimal. €1 × 6.00 = €6 total return (€5 profit + €1
                    stake).
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-600 mb-3">American Odds</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Example:</strong> +500
                  </p>
                  <p className="text-gray-600 text-sm">
                    US format. Positive numbers show profit on €100 bet. +500 means €500 profit on €100 stake.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Types of Bets */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Sports Bets</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {betTypes.map((bet, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{bet.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{bet.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Safe Betting Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Safe & Responsible Betting</h2>
            <div className="bg-red-50 rounded-lg p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-3">Set Your Budget</h3>
                  <p className="text-gray-700 mb-4">
                    Never bet more than you can afford to lose. Set a monthly betting budget and stick to it, regardless
                    of wins or losses.
                  </p>

                  <h3 className="text-lg font-bold text-red-600 mb-3">Use Responsible Gambling Tools</h3>
                  <p className="text-gray-700">
                    Take advantage of deposit limits, loss limits, and time limits offered by licensed Irish betting
                    sites.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-3">Take Regular Breaks</h3>
                  <p className="text-gray-700 mb-4">
                    Don't bet every day. Take regular breaks to maintain perspective and prevent betting from becoming a
                    habit.
                  </p>

                  <h3 className="text-lg font-bold text-red-600 mb-3">Recognize Warning Signs</h3>
                  <p className="text-gray-700">
                    If betting stops being fun or you're chasing losses, it may be time to seek help from organizations
                    like GambleAware.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Betting Safely?</h2>
              <p className="text-xl mb-6 opacity-90">
                Now that you know the basics, check out our expert rankings of trusted Irish betting sites to start your
                journey today.
              </p>
              <Link href="/">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  View Top Irish Betting Sites
                </Button>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="text-center bg-gray-100 rounded-lg p-6">
            <p className="text-gray-600 mb-2">
              <strong>18+ | Gambling can be addictive — Play safe</strong>
            </p>
            <p className="text-sm text-gray-500">
              This guide is for educational purposes only. Always gamble responsibly and within your means. If you need
              help with gambling problems, contact GambleAware, GamCare, or other support organizations.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
