"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { cn } from "@/src/lib/utils"

const navItems = [
  // { name: "Home", href: "#home" },
  { name: "About", href: "#" },
  { name: "Skills", href: "#services" },
  { name: "Experience", href: "#experience" },
  // { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id || "")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16  pr-20  items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">
          Venkateshwaran ✨
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div
          className={cn(
            "fixed left-0 right-0 top-16 bg-background md:static md:block",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col items-center space-y-4 p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

