'use client'

import React, { useState, useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { Header } from '@/components/Header'
import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setIsLoggedIn(!!token)
    if (!token) {
      router.push('/login')
    }
  }, [router])

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible)
  }

  if (!isLoggedIn) {
    return <>{children}</>
  }

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <NavBar isVisible={isNavBarVisible} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onToggleNavBar={toggleNavBar} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <div className="container mx-auto px-6 py-8">
                {children}
              </div>
            </main>
          </div>
          {isNavBarVisible && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleNavBar}
              aria-hidden="true"
            />
          )}
        </div>
      </body>
    </html>
  )
}