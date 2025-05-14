"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or actual resource loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="relative h-24 w-24 mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 animate-pulse-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 h-full w-full p-4 text-white"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-t-teal-500 border-transparent animate-spin"></div>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        <span className="gradient-text">MedSavvy AI</span>
      </h1>
      <p className="text-muted-foreground mb-6">Smart Healthcare for Rural India</p>
      <div className="flex items-center gap-2">
        <Loader2 className="h-5 w-5 animate-spin text-teal-500" />
        <span className="text-sm text-muted-foreground">Loading resources...</span>
      </div>
    </div>
  )
}
