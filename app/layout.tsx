import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import FloatingActionButton from "@/components/floating-action-button"
import SplashScreen from "@/components/splash-screen"
import NotificationProvider from "@/components/notification-provider"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import PWAStatus from "@/components/pwa-status"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MedSavvy AI - Smart Healthcare for Rural India",
  description:
    "AI-powered healthcare solutions designed for rural communities, providing early diagnosis, smart triaging, and remote healthcare access.",
  manifest: "/manifest.json",
  themeColor: "#14b8a6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MedSavvy AI",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Add noscript fallback for browsers without JavaScript */}
        <noscript>
          <style>{`
            .requires-js { display: none !important; }
          `}</style>
        </noscript>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NotificationProvider>
            <SplashScreen />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <FloatingActionButton />
            <Toaster />
            <PWAInstallPrompt />
            <PWAStatus />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
