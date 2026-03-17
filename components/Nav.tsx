"use client"

import Link from "next/link"

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "./ui/menubar"

export default function Navbar() {
  return (
    <header className="border-b bg-primary text-white  sticky top-0 z-10">

      <div className="container mx-auto flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-axilegal-dark text-accent"
        >
          Axi<span className="text-white">legal</span>
        </Link>

       <Menubar className="border-none shadow-none bg-transparent">

      {/* HOME */}
      <MenubarMenu>
        <Link href="/" className="px-3 py-2 text-sm font-medium">
          Home
        </Link>
      </MenubarMenu>

      {/* ABOUT */}
      <MenubarMenu>
        <Link href="#about" className="px-3 py-2 text-sm">
          About Us
        </Link>
      </MenubarMenu>

      {/* REVIEWS */}
      <MenubarMenu>
        <Link href="#reviews" className="px-3 py-2 text-sm">
          Reviews 
        </Link>
      </MenubarMenu>
      {/* SERVICES */}
      <MenubarMenu>
        <Link href="#services" className="px-3 py-2 text-sm">
          Services
        </Link>
      </MenubarMenu>


      {/* <MenubarMenu>

        <MenubarTrigger>
          Services
        </MenubarTrigger>

        <MenubarContent>

          <MenubarSub>

            <MenubarSubTrigger>
              Taxation
            </MenubarSubTrigger>

            <MenubarSubContent>

              <MenubarSub>

                <MenubarSubTrigger>
                  Return Filing
                </MenubarSubTrigger>

                <MenubarSubContent>

                  <MenubarItem asChild>
                    <Link href="/tax/filing">Filing</Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/tax/tds">TDS Filing</Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/tax/proprietorship">Proprietorship</Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/tax/llp">LLP / Partnership</Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/tax/company">Companies</Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/tax/notice">Notice Reply</Link>
                  </MenubarItem>

                </MenubarSubContent>

              </MenubarSub>


              <MenubarSub>

                <MenubarSubTrigger>
                  GST Filing
                </MenubarSubTrigger>

                <MenubarSubContent>

                  <MenubarItem asChild>
                    <Link href="/gst/registration">
                      Registration
                    </Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/gst/filing">
                      GST Filing
                    </Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/gst/cancellation">
                      GST Cancellation
                    </Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/gst/revocation">
                      GST Revocation
                    </Link>
                  </MenubarItem>

                  <MenubarItem asChild>
                    <Link href="/gst/notice">
                      GST Notice / Reply
                    </Link>
                  </MenubarItem>

                </MenubarSubContent>

              </MenubarSub>

            </MenubarSubContent>

          </MenubarSub>

          <MenubarSub>

            <MenubarSubTrigger>
              Corporate Startups
            </MenubarSubTrigger>

            <MenubarSubContent>

              <MenubarItem asChild>
                <Link href="/corporate/private-limited">
                  Private Limited Company
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/corporate/opc">
                  One Person Company
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/corporate/llp">
                  LLP Registration
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/corporate/startup-india">
                  Startup India
                </Link>
              </MenubarItem>

            </MenubarSubContent>

          </MenubarSub>


          <MenubarSub>

            <MenubarSubTrigger>
              Litigation
            </MenubarSubTrigger>

            <MenubarSubContent>

              <MenubarItem asChild>
                <Link href="/litigation/property">
                  Property Lawyer
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/litigation/civil">
                  Civil Case
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/litigation/criminal">
                  Criminal Case
                </Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/litigation/cheque-bounce">
                  Cheque Bounce
                </Link>
              </MenubarItem>

            </MenubarSubContent>

          </MenubarSub>

        </MenubarContent>

      </MenubarMenu> */}

      {/* CONSULTATION */}

      <MenubarMenu>
        <Link href="#contact" className="px-3 py-2 text-sm">
          Consultation
        </Link>
      </MenubarMenu>

      {/* FREEBIES */}

      {/* <MenubarMenu>

        <MenubarTrigger>
          Freebies
        </MenubarTrigger>

        <MenubarContent>a

          <MenubarSub>

            <MenubarSubTrigger>
              Bare Acts
            </MenubarSubTrigger>

            <MenubarSubContent>

              <MenubarItem asChild>
                <Link href="/acts/bns">BNS</Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/acts/bnss">BNSS</Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/acts/bsa">BSA</Link>
              </MenubarItem>

              <MenubarItem asChild>
                <Link href="/acts/cpc">CPC</Link>
              </MenubarItem>

            </MenubarSubContent>

          </MenubarSub>

          <MenubarItem asChild>
            <Link href="/court-fee-calculator">
              Court Fee Calculator
            </Link>
          </MenubarItem>

        </MenubarContent>

      </MenubarMenu> */}

    </Menubar>

      </div>

    </header>
  )
}