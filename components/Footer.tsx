'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">AI-GAMNET</h3>
            <p className="text-gray-400">
              Building a sustainable pan-African community of AI expertise through research, innovation, and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#event" className="nav-link text-gray-400">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#speakers" className="nav-link text-gray-400">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#schedule" className="nav-link text-gray-400">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Location</h4>
            <p className="text-gray-400">
              University of The Gambia
              <br />
              Peace Building, Kanifing
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            Designed and Developed by <span className="text-primary font-semibold">AI-GAMNET</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
          </button>
        </div>
      </div>
    </footer>
  )
}
