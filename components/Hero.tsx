'use client'

import { eventInfo } from '@/data/event'

export default function Hero() {
  const stats = [
    { number: '500+', label: 'Community Members', icon: '👥' },
    { number: '50+', label: 'Events Hosted', icon: '🎯' },
    { number: '15+', label: 'Countries Represented', icon: '🌍' },
    { number: '100+', label: 'Research Initiatives', icon: '🔬' },
  ]

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-accent opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-accent-2 opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Main Content */}
        <div className="text-center mb-20 animate-slideIn">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-semibold border border-primary border-opacity-30 backdrop-blur">
              🚀 Building Africa's AI Future
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
              ARTIFICIAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-gradient-shift text-white">
              INTELLIGENCE
            </span>
            <br />
            <span className="text-white">
              GAMBIA <span className="text-primary">NETWORK</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-subheading text-gray-300 mb-4 max-w-3xl mx-auto">
            {eventInfo.subtitle}
          </p>

          {/* Location & Date */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-accent">📍</span>
              {eventInfo.location}
            </span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="flex items-center gap-2">
              <span className="text-accent">📅</span>
              {eventInfo.dateRange}
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <a
              href={eventInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 animate-glow"
            >
              <span className="flex items-center gap-2">
                🎫 Join The Network
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:bg-opacity-10 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 blur-xl"></div>

              <div className="relative">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <p className="text-body text-white mb-6">
            {eventInfo.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm border border-primary border-opacity-20">
              Research
            </span>
            <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-sm border border-accent border-opacity-20">
              Community
            </span>
            <span className="px-3 py-1 bg-accent-2 bg-opacity-10 text-accent-2 rounded-full text-sm border border-accent-2 border-opacity-20">
              Innovation
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
    </section>
  )
}
