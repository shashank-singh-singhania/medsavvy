"use client"

import { Button } from "@/components/ui/button"
import { Bell, BellOff } from "lucide-react"
import { useNotification } from "@/components/notification-provider"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function NotificationButton() {
  const { hasPermission, requestPermission } = useNotification()
  const [isRequesting, setIsRequesting] = useState(false)
  const { toast } = useToast()

  const handleRequestPermission = async () => {
    if (isRequesting) return

    setIsRequesting(true)
    try {
      await requestPermission()
    } catch (error) {
      console.error("Error requesting notification permission:", error)
      toast({
        title: "Notification Error",
        description: "There was a problem enabling notifications. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsRequesting(false)
    }
  }

  return (
    <>
      {hasPermission === false && (
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={handleRequestPermission}
          disabled={isRequesting}
        >
          <BellOff className="h-5 w-5" />
          <span className="sr-only">Enable notifications</span>
        </Button>
      )}

      {hasPermission === null && (
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={handleRequestPermission}
          disabled={isRequesting}
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Request notification permission</span>
        </Button>
      )}

      {hasPermission === true && (
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            3
          </span>
          <span className="sr-only">Notifications enabled</span>
        </Button>
      )}
    </>
  )
}
