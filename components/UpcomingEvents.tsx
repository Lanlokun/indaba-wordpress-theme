'use client'

import { upcomingEvents } from '@/data/events'
import { Calendar, MapPin, Clock } from 'lucide-react'

const categoryColors: Record<string, string> = {
  Workshop: 'bg-blue-100 text-blue-800',
  Webinar: 'bg-purple-100 text-purple-800',
  Networking: 'bg-green-100 text-green-800',
  Conference: 'bg-red-100 text-red-800',
  Mentorship: 'bg-yellow-100 text-yellow-800',
  Collaboration: 'bg-indigo-100 text-indigo-800',
}

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-12 lg:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="animate-slideIn">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, webinars, and networking opportunities. Be part of the AI-GAMNET community and stay updated with the latest in AI and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fadeIn"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      categoryColors[event.category] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {event.category}
                  </span>
                </div>

                <h3 className="mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 group/icon hover:text-primary transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-primary transition-transform duration-300 group-hover/icon:scale-110" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 group/icon hover:text-primary transition-colors duration-300">
                    <Clock className="w-4 h-4 text-primary transition-transform duration-300 group-hover/icon:scale-110" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 group/icon hover:text-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary transition-transform duration-300 group-hover/icon:scale-110" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <a
                  href={event.registration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full btn-primary text-center"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
