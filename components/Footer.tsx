'use client'

import Link from 'next/link'
import { ArrowUp, Mail, MapPin, Phone, Linkedin, Twitter, Github, Send } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/aig1.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscriptionMessage('Thank you for subscribing!')
      setEmail('')
      setTimeout(() => setSubscriptionMessage(''), 3000)
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Mail, href: 'mailto:info@aigamnet.com', label: 'Email', color: 'hover:text-red-400' },
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Top Section - Branding, Links, Contact, Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Branding Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <Image 
                  src={logo} 
                  alt="AI-GAMNET Logo" 
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                />
                <span className="text-2xl font-black text-white">
                  AI <span className="text-primary">GAMNET</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Building a sustainable pan-African community of AI expertise through research, innovation, and collaboration.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-125 ${link.color}`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b-2 border-primary">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About', href: '#event' },
                  { label: 'Why Join', href: '#why-join' },
                  { label: 'Speakers', href: '#speakers' },
                  { label: 'Schedule', href: '#schedule' },
                  { label: 'Events', href: '#events' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b-2 border-primary">Contact</h4>
              <div className="space-y-4">
                <div className="flex gap-3 group">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:info@aigamnet.com"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      info@aigamnet.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
                    <p className="text-gray-400 text-sm">
                      University of The Gambia<br />
                      Peace Building, Kanifing
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 group">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                    <a 
                      href="tel:+220XXXXXXX"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      +220 XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-2 border-b-2 border-primary">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with the latest news, events, and opportunities in AI-GAMNET.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscriptionMessage && (
                <p className="text-green-400 text-sm mt-2 animate-fadeIn">
                  {subscriptionMessage}
                </p>
              )}
            </div>
          </div>

          {/* Community CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
            <p className="text-gray-300 mb-4">
              Be part of Africa's growing AI community. Connect with researchers, professionals, and innovators.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScMO0feFXXiCUNxzRPUWJ6Yh4aVuKIV8JTMZE6PCXEuJxAMHg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105"
            >
              Become a Member
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>

      {/* Bottom Footer - Copyright & Actions */}
      <div className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} <span className="text-primary font-semibold">AI-GAMNET</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Designed and Developed with <span className="text-primary">❤</span> for Africa's AI Community
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
