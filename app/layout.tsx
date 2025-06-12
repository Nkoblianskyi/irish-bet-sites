import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IE Best Betting Sites - Ireland's Top Betting Sites Expert Tested",
  description:
    "Trusted rankings of the best Irish-licensed betting platforms with exclusive bonuses. Expert reviews and comparisons of top betting sites in Ireland.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
