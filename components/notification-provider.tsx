"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

type NotificationContextType = {
  hasPermission: boolean | null
  requestPermission: () => Promise<void>
  sendNotification: (title: string, options?: NotificationOptions) => void
}

const NotificationContext = createContext<NotificationContextType>({
  hasPermission: null,
  requestPermission: async () => {},
  sendNotification: () => {},
})

export const useNotification = () => useContext(NotificationContext)

export default function NotificationProvider({ children }: { children: ReactNode }) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Check if browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications")
      return
    }

    // Check if permission is already granted
    if (Notification.permission === "granted") {
      setHasPermission(true)
    } else if (Notification.permission === "denied") {
      setHasPermission(false)
    } else {
      setHasPermission(null)
    }

    // Only try to register service worker in production and if supported
    if (typeof window !== "undefined" && "serviceWorker" in navigator && window.location.hostname !== "localhost") {
      try {
        // We'll use a try-catch to handle any registration errors
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope)
          })
          .catch((error) => {
            console.warn("Service Worker registration failed:", error)
            // We'll continue without a service worker
          })
      } catch (error) {
        console.warn("Error during service worker registration attempt:", error)
        // Continue without service worker
      }
    } else {
      console.log("Service workers are not supported or this is a development environment")
    }
  }, [])

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      toast({
        title: "Notifications Not Supported",
        description: "Your browser doesn't support notifications",
        variant: "destructive",
      })
      return
    }

    try {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        setHasPermission(true)
        toast({
          title: "Notifications Enabled",
          description: "You'll now receive important health updates",
        })

        // Send a welcome notification
        sendNotification("Welcome to MedSavvy AI", {
          body: "You'll receive important health reminders and updates",
          icon: "/icons/icon-192x192.png",
        })
      } else {
        setHasPermission(false)
        toast({
          title: "Notifications Disabled",
          description: "You won't receive important health updates",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error)
      toast({
        title: "Permission Request Failed",
        description: "There was an error requesting notification permission",
        variant: "destructive",
      })
    }
  }

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (!hasPermission) return

    try {
      // First try to use service worker if available
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready
          .then((registration) => {
            registration.showNotification(title, {
              icon: "/icons/icon-192x192.png",
              badge: "/icons/badge-72x72.png",
              vibrate: [200, 100, 200],
              ...options,
            })
          })
          .catch((error) => {
            console.warn("Failed to show notification via service worker:", error)
            // Fall back to regular notification
            fallbackNotification(title, options)
          })
      } else {
        // Use regular notification as fallback
        fallbackNotification(title, options)
      }
    } catch (error) {
      console.error("Error sending notification:", error)
      // Show a toast as last resort
      toast({
        title,
        description: options?.body || "New notification from MedSavvy AI",
      })
    }
  }

  // Fallback to regular notification when service worker is not available
  const fallbackNotification = (title: string, options?: NotificationOptions) => {
    try {
      new Notification(title, {
        icon: "/icons/icon-192x192.png",
        ...options,
      })
    } catch (error) {
      console.warn("Failed to show regular notification:", error)
      // Show a toast as last resort
      toast({
        title,
        description: options?.body || "New notification from MedSavvy AI",
      })
    }
  }

  return (
    <NotificationContext.Provider value={{ hasPermission, requestPermission, sendNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}
