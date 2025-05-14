"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isListening) {
      interval = setInterval(() => {
        setPulseAnimation((prev) => !prev)
      }, 1500)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isListening])

  const toggleListening = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  const startListening = () => {
    setIsListening(true)
    toast({
      title: "Voice Recognition Active",
      description: "Speak now to describe your symptoms...",
      variant: "default",
    })

    // Simulate stopping after 5 seconds
    setTimeout(() => {
      setIsProcessing(true)
      setTimeout(() => {
        stopListening()
      }, 1500)
    }, 5000)
  }

  const stopListening = () => {
    setIsListening(false)
    setIsProcessing(false)
    toast({
      title: "Voice Recognition Stopped",
      description: "Processing your input...",
      variant: "default",
    })
  }

  return (
    <div className="relative">
      <Button
        variant={isListening ? "destructive" : "outline"}
        size="sm"
        onClick={toggleListening}
        className={cn(
          "flex items-center gap-2 transition-all",
          isListening && "bg-red-500 hover:bg-red-600 text-white",
        )}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Processing...</span>
          </>
        ) : isListening ? (
          <>
            <MicOff className="h-4 w-4" />
            <span>Stop</span>
          </>
        ) : (
          <>
            <Mic className="h-4 w-4" />
            <span>Voice</span>
          </>
        )}
      </Button>

      {isListening && (
        <div
          className={cn(
            "absolute -inset-1 rounded-md border border-red-500 transition-opacity",
            pulseAnimation ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  )
}
