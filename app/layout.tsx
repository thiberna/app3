import { AudioProvider } from "@/contexts/AudioContext"
import { ProgressProvider } from "@/contexts/ProgressContext"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dog Rating App",
  description: "Rate cute dogs and listen to sad music",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </AudioProvider>
      </body>
    </html>
  )
}

