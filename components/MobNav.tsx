"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="border-b bg-primary text-white sticky top-0 z-50">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-accent"
        >
          Axi<span className="text-white">legal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>

          <Link href="#about" className="hover:text-accent transition">
            About Us
          </Link>

          <Link href="#reviews" className="hover:text-accent transition">
            Reviews
          </Link>

          <Link href="#services" className="hover:text-accent transition">
            Services
          </Link>

          <Link href="#contact" className="hover:text-accent transition">
            Consultation
          </Link>

        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">

          <Sheet>

            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">

              <nav className="flex flex-col gap-6 mt-10 text-lg">

                <SheetClose asChild>
                  <Link href="/">Home</Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#about">About Us</Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#reviews">Reviews</Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#services">Services</Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#contact">Consultation</Link>
                </SheetClose>

              </nav>

            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>
  )
}