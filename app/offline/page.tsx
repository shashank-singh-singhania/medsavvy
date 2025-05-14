"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WifiOff, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="container mx-auto max-w-md py-16 px-4 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="mb-8 flex flex-col items-center">
        <div className="h-20 w-20 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-6">
          <WifiOff className="h-10 w-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">You're Offline</h1>
        <p className="text-muted-foreground text-center">
          Don't worry, you can still access some features of MedSavvy AI while offline.
        </p>
      </div>

      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle>Available Offline</CardTitle>
          <CardDescription>These features work without an internet connection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
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
                className="text-teal-600 dark:text-teal-400"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                <circle cx="17" cy="7" r="5"></circle>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Medicine Tracker</h3>
              <p className="text-sm text-muted-foreground">View your medicine schedule and mark doses as taken</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
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
                className="text-purple-600 dark:text-purple-400"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Health Knowledge</h3>
              <p className="text-sm text-muted-foreground">Access downloaded health articles and information</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
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
                className="text-blue-600 dark:text-blue-400"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Emergency Contacts</h3>
              <p className="text-sm text-muted-foreground">View and call your saved emergency contacts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4">
        <Button className="flex items-center gap-2" onClick={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4" />
          Try Reconnecting
        </Button>
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
