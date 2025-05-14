"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, X } from "lucide-react"

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isPWASupported, setIsPWASupported] = useState(true)

  useEffect(() => {
    // Check if app is already installed
    if (typeof window !== "undefined" && window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Check if PWA features are supported
    if (typeof window !== "undefined" && !("serviceWorker" in navigator)) {
      setIsPWASupported(false)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later
      setDeferredPrompt(e)
      // Show the install prompt after a delay
      setTimeout(() => {
        setShowPrompt(true)
      }, 5000)
    }

    try {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    } catch (error) {
      console.warn("PWA installation prompt not supported:", error)
      setIsPWASupported(false)
    }

    // Check if the app was successfully installed
    try {
      window.addEventListener("appinstalled", () => {
        setIsInstalled(true)
        setShowPrompt(false)
        console.log("PWA was installed successfully")
      })
    } catch (error) {
      console.warn("PWA installation event not supported:", error)
    }

    return () => {
      if (typeof window !== "undefined") {
        try {
          window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    try {
      // Show the install prompt
      deferredPrompt.prompt()

      // Wait for the user to respond to the prompt
      const choiceResult = await deferredPrompt.userChoice

      // Reset the deferred prompt variable
      setDeferredPrompt(null)

      // Hide the install prompt
      setShowPrompt(false)

      // Log the result
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
    } catch (error) {
      console.warn("Error during PWA installation:", error)
      setShowPrompt(false)
    }
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
  }

  if (!showPrompt || isInstalled || !isPWASupported) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <Card className="shadow-lg border-teal-200 dark:border-teal-800">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">Install MedSavvy AI</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={dismissPrompt}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Get quick access to healthcare on your device</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">
                Install this app on your device for quick and easy access when you're on the go.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleInstall}>
            <Download className="mr-2 h-4 w-4" />
            Install App
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
