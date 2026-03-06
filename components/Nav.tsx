"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [freebiesOpen, setFreebiesOpen] = useState(false);

  return (
    <header className="bg-[#0a1931] text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          Axi<span className="text-yellow-400">legal</span>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">

          <Link href="/">Home</Link>

          <Link href="#about">About</Link>

          {/* SERVICES */}
          <div className="relative group">

            <button className="flex items-center gap-1">
              Services ▾
            </button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-[260px]">

              <Link href="/taxation" className="block px-4 py-2 hover:bg-gray-100">
                Taxation
              </Link>

              <Link href="/corporate" className="block px-4 py-2 hover:bg-gray-100">
                Corporate Startups
              </Link>

              <Link href="/litigation" className="block px-4 py-2 hover:bg-gray-100">
                Litigation
              </Link>

              <Link href="/consumer" className="block px-4 py-2 hover:bg-gray-100">
                Consumer
              </Link>

              <Link href="/cyber" className="block px-4 py-2 hover:bg-gray-100">
                Cyber Fraud
              </Link>

              <Link href="/ip" className="block px-4 py-2 hover:bg-gray-100">
                Intellectual Property
              </Link>

              <Link href="/documentation" className="block px-4 py-2 hover:bg-gray-100">
                Documentation
              </Link>

            </div>
          </div>

          {/* FREEBIES */}
          <div className="relative group">

            <button>Freebies ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow rounded min-w-[220px]">

              <Link href="/bns" className="block px-4 py-2 hover:bg-gray-100">
                BNS
              </Link>

              <Link href="/bnss" className="block px-4 py-2 hover:bg-gray-100">
                BNSS
              </Link>

              <Link href="/bsa" className="block px-4 py-2 hover:bg-gray-100">
                BSA
              </Link>

              <Link href="/court-fee-calculator" className="block px-4 py-2 hover:bg-gray-100">
                Court Fee Calculator
              </Link>

              <Link href="/formats" className="block px-4 py-2 hover:bg-gray-100">
                Formats
              </Link>

            </div>
          </div>

          <Link href="#contact">Consultation</Link>

          <Link href="/signup" className="text-yellow-400 font-semibold">
            Sign up
          </Link>

          <Link
            href="/login"
            className="border border-yellow-400 px-4 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Customer Login
          </Link>

        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1931] border-t border-white/20 px-6 py-4 space-y-3">

          <Link href="/" className="block">
            Home
          </Link>

          <Link href="#about" className="block">
            About
          </Link>

          {/* SERVICES COLLAPSIBLE */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex justify-between w-full"
          >
            Services
            <span>{servicesOpen ? "-" : "+"}</span>
          </button>

          {servicesOpen && (
            <div className="pl-4 space-y-2 text-sm text-gray-300">
              <Link href="/taxation" className="block">
                Taxation
              </Link>
              <Link href="/corporate" className="block">
                Corporate Startups
              </Link>
              <Link href="/litigation" className="block">
                Litigation
              </Link>
              <Link href="/consumer" className="block">
                Consumer
              </Link>
              <Link href="/cyber" className="block">
                Cyber Fraud
              </Link>
              <Link href="/ip" className="block">
                Intellectual Property
              </Link>
              <Link href="/documentation" className="block">
                Documentation
              </Link>
            </div>
          )}

          {/* FREEBIES COLLAPSIBLE */}
          <button
            onClick={() => setFreebiesOpen(!freebiesOpen)}
            className="flex justify-between w-full"
          >
            Freebies
            <span>{freebiesOpen ? "-" : "+"}</span>
          </button>

          {freebiesOpen && (
            <div className="pl-4 space-y-2 text-sm text-gray-300">
              <Link href="/bns">BNS</Link>
              <Link href="/bnss">BNSS</Link>
              <Link href="/bsa">BSA</Link>
              <Link href="/court-fee-calculator">Court Fee Calculator</Link>
              <Link href="/formats">Formats</Link>
            </div>
          )}

          <Link href="#contact" className="block">
            Consultation
          </Link>

          <Link href="/signup" className="block text-yellow-400">
            Sign up
          </Link>

          <Link
            href="/login"
            className="block border border-yellow-400 px-3 py-1 rounded text-yellow-400 text-center"
          >
            Customer Login
          </Link>

        </div>
      )}
    </header>
  );
}