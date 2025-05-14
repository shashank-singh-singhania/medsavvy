"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { WifiOff } from "lucide-react"

export default function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [isPWA, setIsPWA] = useState(false)

  useEffect(() => {
    // Check if app is running in standalone mode (installed as PWA)
    if (typeof window !== "undefined") {
      setIsPWA(window.matchMedia("(display-mode: standalone)").matches)
      setIsOnline(navigator.onLine)

      // Set up online/offline event listeners
      const handleOnline = () => setIsOnline(true)
      const handleOffline = () => setIsOnline(false)

      window.addEventListener("online", handleOnline)
      window.addEventListener("offline", handleOffline)

      return () => {
        window.removeEventListener("online", handleOnline)
        window.removeEventListener("offline", handleOffline)
      }
    }
  }, [])

  if (!isPWA) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOnline && (
        <Badge
          variant="outline"
          className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700 flex items-center gap-1 py-1.5 px-3"
        >
          <WifiOff className="h-3.5 w-3.5" />
          <span>Offline Mode</span>
        </Badge>
      )}
    </div>
  )
}
