'use client'

import { whyJoin } from '@/data/event'
import { Zap, Users, TrendingUp, BookOpen, Briefcase, Award } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Users,
  TrendingUp,
  BookOpen,
  Briefcase,
  Award,
}

export default function WhyJoin() {
  return (
    <section id="why-join" className="py-20 lg:py-28 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 animate-slideIn">Why Join <span className="text-primary">AI-GAMNET?</span></h2>
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
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {Icon && <Icon className="w-12 h-12 text-primary mb-4" />}
                <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
