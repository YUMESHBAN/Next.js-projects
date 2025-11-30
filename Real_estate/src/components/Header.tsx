'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { DarkModeToggle } from './DarkModeToggle'
import { cn } from '@/lib/utils'
import type { SiteSettings } from '@/types/sanity'

type HeaderProps = {
  settings?: SiteSettings | null
}

export const Header = ({ settings }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const navItems = settings?.navigation ?? []
  const title = settings?.title ?? 'f'
  const ctaText = settings?.ctaText ?? 'Get Started'

  return (
   <header className="sticky top-4 z-40 px-4">
  <div
    className="mx-auto max-w-6xl rounded-2xl  border-border bg-[#010E1B]/95 backdrop-blur dark:border-dark-border dark:bg-[#0D0D0D]/95 px-6 py-4 flex items-center justify-between"
  >
    {/* LEFT SECTION */}
  <Link href="/" className="flex items-center gap-3 text-3xl font-bold text-white">
    {/* Logo (only render if it exists) */}
    {settings?.logo && (
      <img
        src={settings.logo}  // use the logo from your SiteSettings
        alt={`${title} logo`}
        className="h-8 w-8 object-contain"
      />
    )}

    <span>{title}</span>
  </Link>


    {/* MIDDLE NAV (DESKTOP) */}
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>

    {/* RIGHT CTAs */}
    <div className="hidden md:flex items-center gap-3">
      <DarkModeToggle />
      <Button 
      className="px-6 py-2 text-sm  tracking-wide bg-[#010E1B]/0  text-white rounded-full border border-white"
      asChild
    >
      <Link href="#contact">{ctaText}</Link>
    </Button>

    </div>

    {/* MOBILE MENU BUTTON */}
    <div className="flex items-center gap-1 md:hidden">
      <DarkModeToggle />
      <button
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {/* Top bar */}
        <span
          className={cn(
            "absolute block h-[2px] w-5 bg-white transform transition-transform duration-200",
            open ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
          )}
        />
        {/* Bottom bar */}
        <span
          className={cn(
            "absolute block h-[2px] w-5 bg-white transform transition-transform duration-200",
            open ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
          )}
        />
      </button>
    </div>
  </div>

  {/* MOBILE MENU DROPDOWN */}
  <div
  className={cn(
    "md:hidden overflow-hidden transition-all duration-300 -mt-3",
    open ? "max-h-[500px]" : "max-h-0"
  )}
>


    <div className="flex flex-col gap-2  backdrop-blur border-border px-6 py-4 bg-[#010E1B]/95 text-white rounded-b-3xl">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="py-2"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
      ))}

      <Button className="w-full bg-white text-black rounded-full" asChild>
        <Link href="#contact">{ctaText}</Link>
      </Button>
    </div>
  </div>
</header>

  )
}
