"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import LanguageSelector from "@/components/language-selector"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import NotificationButton from "@/components/notification-button"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Symptom Checker",
    path: "/symptom-checker",
  },
  {
    name: "Doctor Connect",
    path: "/doctor-connect",
  },
  {
    name: "Medicine Tracker",
    path: "/medicine-tracker",
  },
  {
    name: "Medicine Shop",
    path: "/medicine-shop",
  },
  {
    name: "Health Knowledge",
    path: "/health-knowledge",
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-teal-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute inset-0 h-full w-full p-1 text-white"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">MedSavvy AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === route.path
                    ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageSelector />

            <NotificationButton />

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                      S
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline-block">User</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Medical Records</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-teal-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute inset-0 h-full w-full p-1 text-white"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                      <span className="font-bold text-xl">MedSavvy AI</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex flex-col space-y-1 mb-6">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        href={route.path}
                        className={cn(
                          "px-4 py-3 text-base font-medium rounded-md transition-colors",
                          pathname === route.path
                            ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto border-t pt-4">
                    <div className="flex items-center px-4 py-2">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">User</p>
                        <p className="text-sm text-muted-foreground">user@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-4">
                      <LanguageSelector />
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
