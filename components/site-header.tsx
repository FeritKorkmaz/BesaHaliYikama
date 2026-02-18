"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS, PHONE_TEL } from "@/lib/data"
import { withBasePath } from "@/lib/asset"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    const el = document.getElementById(href.replace("#", ""))
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#hero")
          }}
          className="flex items-center"
        >
          <Image
            src={withBasePath("/img/newlogo.png")}
            alt="Besa Halı Yıkama logosu"
            width={1400}
            height={420}
            unoptimized
            priority
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Ana navigasyon">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            size="sm"
            className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={PHONE_TEL}>
              <Phone className="mr-1.5 h-4 w-4" />
              Hemen Ara
            </a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" role="navigation" aria-label="Mobil navigasyon">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                  activeSection === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
