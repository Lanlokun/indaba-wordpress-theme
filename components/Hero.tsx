'use client'

import { eventInfo } from '@/data/event'
import { Brain, Network, Zap, Code2, Cpu, Microscope } from 'lucide-react'

export default function Hero() {
  const stats = [
    { number: '500+', label: 'Community Members', icon: Brain },
    { number: '50+', label: 'Events Hosted', icon: Network },
    { number: '15+', label: 'Countries Represented', icon: Zap },
    { number: '100+', label: 'Research Initiatives', icon: Microscope },
  ]

  const aiIcons = [
    { icon: Brain, size: 'w-8 h-8', delay: 0, top: '10%', left: '5%' },
    { icon: Cpu, size: 'w-6 h-6', delay: 1, top: '15%', left: '92%' },
    { icon: Code2, size: 'w-7 h-7', delay: 2, top: '70%', left: '8%' },
    { icon: Network, size: 'w-8 h-8', delay: 3, top: '75%', left: '88%' },
    { icon: Zap, size: 'w-7 h-7', delay: 4, top: '40%', left: '3%' },
    { icon: Microscope, size: 'w-6 h-6', delay: 5, top: '50%', left: '95%' },
  ]

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-dark">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs - Larger & More Visible */}
        <div className="absolute top-10 -left-32 w-96 h-96 bg-primary opacity-15 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-accent opacity-15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-2 opacity-15 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Additional Floating Orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full filter blur-2xl animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent opacity-10 rounded-full filter blur-2xl animate-blob animation-delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>

        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
          {/* Horizontal lines */}
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Floating AI Icons */}
        {aiIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className={`absolute text-primary/50 animate-float`}
              style={{
                top: item.top,
                left: item.left,
                animationDelay: `${item.delay * 0.5}s`,
                animation: `float 6s ease-in-out infinite`,
              }}
            >
              <Icon className={item.size} />
            </div>
          )
        })}

        {/* Pulsing Dots Network */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent rounded-full opacity-35 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-2 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-30 animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-accent rounded-full opacity-30 animate-pulse animation-delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Main Content */}
        <div className="text-center mb-20 animate-slideIn">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-semibold border border-primary border-opacity-40 backdrop-blur animate-glow">
              🧠 AI-Powered Community & Innovation Hub
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
              ARTIFICIAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
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
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 text-gray-300">
            <span className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="inline-block animate-pulse">📍</span>
              {eventInfo.location}
            </span>
            <span className="hidden md:inline text-gray-600">•</span>
            <span className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="inline-block animate-pulse animation-delay-1000">📅</span>
              {eventInfo.dateRange}
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <a
              href={eventInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:shadow-primary/60 animate-glow shadow-lg"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:animate-spin" />
                Join The Network
                <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
              </span>
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="group relative p-6 md:p-8 bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl border border-white border-opacity-10 hover:border-opacity-40 transition-all duration-300 hover:bg-opacity-10 hover:shadow-2xl hover:shadow-primary/40 animate-fadeIn transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 blur-xl"></div>

                <div className="relative">
                  <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:animate-spin" />
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
            )
          })}
        </div>

        {/* Description Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <p className="text-body text-white mb-8 leading-relaxed">
            {eventInfo.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-primary bg-opacity-15 text-primary rounded-full text-sm border border-primary border-opacity-30 hover:border-opacity-60 transition-colors cursor-default">
              🔬 Research
            </span>
            <span className="px-4 py-2 bg-accent bg-opacity-15 text-accent rounded-full text-sm border border-accent border-opacity-30 hover:border-opacity-60 transition-colors cursor-default">
              👥 Community
            </span>
            <span className="px-4 py-2 bg-accent-2 bg-opacity-15 text-accent-2 rounded-full text-sm border border-accent-2 border-opacity-30 hover:border-opacity-60 transition-colors cursor-default">
              ⚡ Innovation
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) translateX(5px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}
