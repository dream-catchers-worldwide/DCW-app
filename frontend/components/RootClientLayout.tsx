'use client'

import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import TopLogos from './TopLogos'
import Toggle from './Toggle'
import PageWrapper from './PageWrapper'
import MobileMenuToggle from './MobileMenuToggle'

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isUK } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backgroundStyle = isUK
    ? { backgroundColor: '#f1f9fb' } // UK
    : {
        backgroundImage: 'url(/bg-pattern-symmetrical.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }

  return (
    <div style={backgroundStyle} className="overflow-visible">
      <TopLogos />

      <div className=" sticky flex items-center justify-between md:hidden px-6 top-0 z-50 bg-gradient-to-r from-[#8A5082] to-[#A5CAD2] py-1 mt-4">
        <MobileMenuToggle />
        <Toggle />
      </div>

      {/* Sticky Toggle */}
      <div className="sticky top-0 z-50 hidden md:block bg-white py-1 px-6">
        <div className="">
          <Toggle />
        </div>
      </div>

      {/* Sticky Navbar under Toggle */}
      <div className="sticky top-[48px] z-40 hidden md:block  py-2">
        <Navbar />
      </div>

      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  )
}
