
import { Hero } from "@/components/hero"
import { BettingSites } from "@/components/betting-sites"
import { ComparisonTable } from "@/components/comparison-table"
import { WhyBetIreland } from "@/components/why-bet-ireland"
import { HowToChoose } from "@/components/how-to-choose"
import { TestingProcess } from "@/components/testing-process"
import { SafeGambling } from "@/components/safe-gambling"
import { Footer } from "@/components/footer"
import { WelcomeModal } from "@/components/welcome-modal"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <WelcomeModal />
      <Hero />
      <BettingSites />
      <ComparisonTable />
      <WhyBetIreland />
      <HowToChoose />
      <TestingProcess />
      <SafeGambling />
      <Footer />
    </div>
  )
}
