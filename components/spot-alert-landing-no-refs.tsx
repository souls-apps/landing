'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation, Bell, Send, ChevronDown, Menu } from "lucide-react"

const MovingStars = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 4 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        return (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
              boxShadow: `0 0 ${size}px rgba(255, 255, 255, ${opacity})`,
              animationDuration: `${Math.random() * 15 + 5}s`,
              animationDelay: `${Math.random() * -20}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export function SpotAlertLandingNoRefs() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBetaEnabled, setIsBetaEnabled] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0); }
        50% { transform: translate(20px, 20px); }
        100% { transform: translate(0, 0); }
      }
      .animate-float {
        animation: float linear infinite;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <MovingStars />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <a href="#" onClick={scrollToTop} className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              SpotAlert
            </span>
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#features" onClick={() => scrollToSection('features')} className="hover:text-pink-400 transition-colors">Features</a></li>
            <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')} className="hover:text-pink-400 transition-colors">How It Works</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-4">
              <li><a href="#features" onClick={() => scrollToSection('features')} className="text-2xl hover:text-pink-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')} className="text-2xl hover:text-pink-400 transition-colors">How It Works</a></li>
              <li><button onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-pink-400 transition-colors">Close</button></li>
            </ul>
          </nav>
        </div>
      )}

      <main className="space-y-32">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 relative pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Location-Based Reminders Made Simple
            </h1>
            <p className="text-xl mb-8">
              Get notified about important places as you move. Your smart location companion.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email for beta access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white text-gray-800 placeholder-gray-500 border-purple-500"
                  required
                />
                {isBetaEnabled && (
                  <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white whitespace-nowrap">
                    Join Beta
                  </Button>
                )}
              </div>
              {isSubmitted && (
                <p className="mt-2 text-green-400">Thank you for joining the beta!</p>
              )}
            </form>
          </div>
          <ChevronDown 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white animate-bounce cursor-pointer" 
            onClick={() => scrollToSection('features')}
          />
        </section>

        <section id="features" className="py-32 px-4 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <MapPin className="h-16 w-16 mb-6 text-pink-500 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-4 text-center">Save Places</h3>
                  <p className="text-center text-lg">Easily save any location you want to remember</p>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <Navigation className="h-16 w-16 mb-6 text-purple-500 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-4 text-center">Location Tracking</h3>
                  <p className="text-center text-lg">Share your location to enable proximity alerts</p>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <Bell className="h-16 w-16 mb-6 text-blue-500 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-4 text-center">Smart Notifications</h3>
                  <p className="text-center text-lg">Receive alerts when you're near saved places</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-32 px-4 bg-black bg-opacity-30 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[1, 2, 3].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {index === 0 && "Save a Place"}
                    {index === 1 && "Share Your Location"}
                    {index === 2 && "Get Notified"}
                  </h3>
                  <p className="text-lg">
                    {index === 0 && "Use SpotAlert to save any location you want to remember"}
                    {index === 1 && "Periodically share your location with SpotAlert"}
                    {index === 2 && "Receive a message when you're near a saved place"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="get-started" className="py-32 px-4 text-center min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join SpotAlert today and never miss an important location again. Sign up for our beta and be among the first to experience the future of location-based reminders.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email for beta access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white text-gray-800 placeholder-gray-500 border-purple-500"
                  required
                />
                {isBetaEnabled && (
                  <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white whitespace-nowrap">
                    Join Beta
                  </Button>
                )}
              </div>
              {isSubmitted && (
                <p className="mt-2 text-green-400">Thank you for joining the beta!</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-white border-opacity-20">
        <p>&copy; 2023 SpotAlert. All rights reserved.</p>
      </footer>
    </div>
  )
}