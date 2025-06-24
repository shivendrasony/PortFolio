import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shivendra Sony - Full Stack Developer",
  description:
    "Full Stack Developer passionate about creating innovative web solutions with modern technologies. Specializing in React, Next.js, Node.js, and more.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Shivendra Sony" }],
  creator: "Shivendra Sony",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivendrasony.dev",
    title: "Shivendra Sony - Full Stack Developer",
    description: "Full Stack Developer passionate about creating innovative web solutions with modern technologies.",
    siteName: "Shivendra Sony Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivendra Sony - Full Stack Developer",
    description: "Full Stack Developer passionate about creating innovative web solutions with modern technologies.",
    creator: "@shivendrasony",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
