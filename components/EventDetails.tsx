'use client'

import { Target, Calendar, Zap, Users } from 'lucide-react'

const eventDetails = [
  {
    icon: Target,
    title: 'Mission',
    content: 'Building a sustainable pan-African community of AI expertise',
  },
  {
    icon: Calendar,
    title: 'Founded',
    content: '2023 - Connecting researchers, professionals, and innovators',
  },
  {
    icon: Zap,
    title: 'Focus Areas',
    content: 'AI, Machine Learning, Deep Learning, Data Science',
  },
  {
    icon: Users,
    title: 'Members',
    content: 'Growing community of researchers and professionals',
  },
]

export default function EventDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {eventDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2"
          >
            <Icon className="w-10 h-10 text-primary mb-4" />
            <h4>{detail.title}</h4>
            <p className="text-gray-600 leading-relaxed">{detail.content}</p>
          </div>
        )
      })}
    </div>
  )
}
