"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Stethoscope, X, MessageSquare, Phone, Pill } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Action buttons that appear when FAB is clicked */}
        <div
          className={cn(
            "absolute bottom-16 right-0 space-y-2 transition-all duration-200",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          )}
        >
          <Link href="/symptom-checker">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Stethoscope className="h-5 w-5" />
              <span className="sr-only">Symptom Checker</span>
            </Button>
          </Link>
          <div className="flex justify-end">
            <Link href="/doctor-connect">
              <Button
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Doctor Connect</span>
              </Button>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/medicine-tracker">
              <Button
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Pill className="h-5 w-5" />
                <span className="sr-only">Medicine Tracker</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Main floating action button */}
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all duration-200",
            isOpen
              ? "bg-red-500 hover:bg-red-600 rotate-45"
              : "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
          )}
          onClick={toggleOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>
    </div>
  )
}
