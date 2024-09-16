'use client'

import {useState, useEffect} from 'react'
import {Button} from "@/components/ui/button"
import {MapPin, Navigation, Bell, Send, ChevronDown, Menu} from "lucide-react"

const MovingStars = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white opacity-30 animate-twinkle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`,
                    }}
                />
            ))}
        </div>
    )
}

export function SpotAlertLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.2); }
      }
      .animate-twinkle {
        animation: twinkle linear infinite;
      }
    `
        document.head.appendChild(style)
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setIsMenuOpen(false)
    }

    const handleButtonClick = () => {
        window.open('https://t.me/BuzzerDevBot', '_blank')
    }

    return (
        <div className="bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
            <MovingStars/>
            <header
                className="fixed top-0 left-0 right-0 z-50 px-4 py-6 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                    <a href="#" onClick={scrollToTop} className="flex items-center space-x-2">
                        <MapPin className="h-8 w-8 text-pink-500"/>
                        <span
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              SpotAlert
            </span>
                    </a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><a href="#features" onClick={() => scrollToSection('features')}
                               className="hover:text-pink-400 transition-colors">Features</a></li>
                        <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}
                               className="hover:text-pink-400 transition-colors">How It Works</a></li>
                    </ul>
                </nav>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu className="h-6 w-6 text-white"/>
                </button>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex items-center justify-center">
                    <nav className="text-center">
                        <ul className="space-y-4">
                            <li><a href="#features" onClick={() => scrollToSection('features')}
                                   className="text-2xl hover:text-pink-400 transition-colors">Features</a></li>
                            <li><a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}
                                   className="text-2xl hover:text-pink-400 transition-colors">How It Works</a></li>
                            <li>
                                <button onClick={() => setIsMenuOpen(false)}
                                        className="text-2xl hover:text-pink-400 transition-colors">Close
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            <main className="space-y-32">
                <section id="hero"
                         className="min-h-screen flex flex-col justify-center items-center px-4 relative pt-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                            Location-Based Reminders Made Simple
                        </h1>
                        <p className="text-xl mb-12">
                            Get notified about important places as you move. Your smart location companion for sports,
                            events, and more.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={handleButtonClick}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center border-2 border-pink-300 hover:border-pink-400"
                            >
                                Start with Telegram Bot
                                <Send className="ml-3 h-6 w-6"/>
                            </Button>
                        </div>
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
                                    <MapPin className="h-16 w-16 mb-6 text-pink-500 mx-auto"/>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">Save Places</h3>
                                    <p className="text-center text-lg">Easily save any location you want to remember</p>
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-10 p-8 rounded-lg h-full flex flex-col justify-between">
                                <div>
                                    <Navigation className="h-16 w-16 mb-6 text-purple-500 mx-auto"/>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">Location Tracking</h3>
                                    <p className="text-center text-lg">Share your location to enable proximity
                                        alerts</p>
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-10 p-8 rounded-lg h-full flex flex-col justify-between">
                                <div>
                                    <Bell className="h-16 w-16 mb-6 text-blue-500 mx-auto"/>
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
                            {[
                                {
                                    step: 1,
                                    title: "Search and Add",
                                    description: "Use /search command to find places and add them to your list",
                                    details: [
                                        "Type /search followed by your query",
                                        "Browse the results",
                                        "Add interesting places to your list"
                                    ]
                                },
                                {
                                    step: 2,
                                    title: "Manage Your List",
                                    description: "Use /list command to view and manage your saved places",
                                    details: [
                                        "Type /list to see all saved places",
                                        "Remove unwanted places directly from the list",
                                        "Keep your list updated and relevant"
                                    ]
                                },
                                {
                                    step: 3,
                                    title: "Get Notified",
                                    description: "Share your location and receive proximity alerts",
                                    details: [
                                        "Share your real-time location with the bot",
                                        "Receive notifications when within 200m of a saved place",
                                        "Explore places you've been meaning to visit"
                                    ]
                                }
                            ].map((item, index) => (
                                <div key={item.step} className="text-center">
                                    <div
                                        className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                    <p className="text-lg mb-4">{item.description}</p>
                                    <ul className="text-sm text-left list-disc list-inside space-y-2">
                                        {item.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="get-started" className="py-32 px-4 text-center min-h-screen flex items-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
                        <p className="text-xl mb-12 max-w-2xl mx-auto">
                            Join SpotAlert today and never miss an important location again. Start using our Telegram
                            bot and experience the future of location-based reminders for sports enthusiasts and
                            event-goers.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={handleButtonClick}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center border-2 border-pink-300 hover:border-pink-400"
                            >
                                Start with Telegram Bot
                                <Send className="ml-3 h-6 w-6"/>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 px-4 text-center border-t border-white border-opacity-20">
                <p>&copy; 2023 SpotAlert. All rights reserved.</p>
            </footer>
        </div>
    )
}