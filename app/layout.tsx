
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Glowzi - Personalized and Rejuvenating Treatments",
  description: "Glowzi specializes in personalized and rejuvenating skincare treatments, facials, and cutting-edge formulations.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-[#f5eee3] py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <Link href="/" className="relative h-12 sm:h-16 w-36 sm:w-48">
                  <Image
                    src="/glowzi-header.png"
                    alt="Glowzi Skin Laboratory"
                    fill
                    className="object-contain brightness-0"
                    priority
                  />
                </Link>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/glowzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-beige-400 hover:text-black"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/glowzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-beige-400 hover:text-black"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="/contact" className="text-beige-400 hover:text-black" aria-label="Contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>
          {children}
          <footer className="bg-[#f5eee3] py-12">
            <div className="container mx-auto px-4">
              <p className="text-sm text-gray-600 text-center">© {new Date().getFullYear()} Glowzi. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
