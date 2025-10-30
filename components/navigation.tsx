"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, User, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Generate" },
    { href: "/library", label: "Library" },
    { href: "/market", label: "Market" },
    { href: "/pricing", label: "Pricing" },
    { href: "/legal", label: "Legal" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          <span className="text-base font-semibold text-foreground sm:text-lg">Redesign</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                pathname === item.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side - SNS, MyBrand, Profile & Upgrade */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:border-primary hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2"
            title="Connect to SNS"
          >
            <Share2 className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
            <span className="hidden text-xs font-medium text-foreground sm:inline sm:text-sm">SNS</span>
          </button>

          <button
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:border-primary hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2"
            title="Connect to MyBrand"
          >
            <span className="text-xs font-medium text-foreground sm:text-sm">MyBrand</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2">
            <User className="h-3.5 w-3.5 text-muted-foreground sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Profile</span>
          </button>

          <Button
            size="sm"
            className="bg-primary px-2.5 text-xs text-primary-foreground hover:bg-primary/90 sm:px-4 sm:text-sm"
          >
            Upgrade
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-1 overflow-x-auto border-t border-border px-3 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-200",
              pathname === item.href
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
