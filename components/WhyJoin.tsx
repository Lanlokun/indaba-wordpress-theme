'use client'

import { whyJoin } from '@/data/event'
import { Zap, Users, TrendingUp, BookOpen, Briefcase, Award, Brain, Network, Cpu } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Users,
  TrendingUp,
  BookOpen,
  Briefcase,
  Award,
}

export default function WhyJoin() {
  const floatingIcons = [
    { icon: Brain, delay: 0, top: '8%', left: '5%' },
    { icon: Network, delay: 1, top: '10%', left: '92%' },
    { icon: Cpu, delay: 2, top: '70%', left: '8%' },
    { icon: Zap, delay: 3, top: '75%', left: '90%' },
    { icon: Users, delay: 4, top: '35%', left: '3%' },
    { icon: Award, delay: 5, top: '55%', left: '95%' },
  ]

  return (
    <section id="why-join" className="relative py-12 lg:py-16 bg-gradient-to-br from-light via-white to-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Softer for light background */}
        <div className="absolute top-10 -left-32 w-96 h-96 bg-primary opacity-8 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-accent opacity-8 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-2 opacity-6 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Additional Orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary opacity-6 rounded-full filter blur-2xl animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent opacity-6 rounded-full filter blur-2xl animate-blob animation-delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Circuit Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-8" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradientLight)" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradientLight)" strokeWidth="2" />
          {/* Horizontal lines */}
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradientLight)" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradientLight)" strokeWidth="1" opacity="0.2" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradientLight)" strokeWidth="1" opacity="0.2" />
        </svg>

        {/* Floating AI Icons */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="absolute text-primary/25 animate-float"
              style={{
                top: item.top,
                left: item.left,
                animationDelay: `${item.delay * 0.5}s`,
                animation: `float 6s ease-in-out infinite`,
              }}
            >
              <Icon className="w-8 h-8" />
            </div>
          )
        })}

        {/* Pulsing Dots Network */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent rounded-full opacity-22 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-2 rounded-full opacity-18 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-accent rounded-full opacity-20 animate-pulse animation-delay-3000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="animate-slideIn">Why Join <span className="text-primary">AI-GAMNET?</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            AI-GamNet aims to build a sustainable pan-African community of AI expertise,<br />
            create local leadership in AI across The Gambia,<br /> and
            recognise excellence in research and application of AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {whyJoin.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl shadow-md hover:shadow-2xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-3 animate-fadeIn overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                {/* Icon Container with Animation */}
                <div className="relative mb-4">
                  <div className="inline-block p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300">
                    {Icon && (
                      <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <h4 className="relative text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-3 rounded-xl transition-opacity duration-300 blur-xl pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-15"></div>

      {/* Float Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-20px) translateX(5px);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  )
}
