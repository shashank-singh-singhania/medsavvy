"use client"

import { useEffect } from "react"
import { useNotification } from "@/components/notification-provider"
import { useToast } from "@/hooks/use-toast"

export default function MedicineReminderNotification() {
  const { hasPermission, sendNotification } = useNotification()
  const { toast } = useToast()

  useEffect(() => {
    // Only set up reminders if we have permission
    if (hasPermission !== true) return

    // Demo: Schedule a medicine reminder notification after 30 seconds
    const timer = setTimeout(() => {
      try {
        sendNotification("Medicine Reminder", {
          body: "It's time to take your Metformin (500mg)",
          icon: "/icons/icon-192x192.png",
          badge: "/icons/badge-72x72.png",
          vibrate: [200, 100, 200],
          tag: "medicine-reminder",
          actions: [
            {
              action: "taken",
              title: "Mark as Taken",
            },
            {
              action: "snooze",
              title: "Remind Later",
            },
          ],
          data: {
            url: "/medicine-tracker",
            medicineId: "123",
            medicineName: "Metformin",
            dosage: "500mg",
          },
        })
      } catch (error) {
        console.warn("Failed to send medicine reminder notification:", error)
        // Fallback to toast notification
        toast({
          title: "Medicine Reminder",
          description: "It's time to take your Metformin (500mg)",
        })
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [hasPermission, sendNotification, toast])

  return null
}
