'use client'

import { useState } from 'react'
import { Calendar, Users, Zap, BarChart3, Award, ArrowRight, Github } from 'lucide-react'
import { indabaEvents, indabaAbout, indabaStats, type IndabaEvent } from '@/data/indaba-events'

export default function IndabaXSection() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcomingEvents = indabaEvents.filter(e => e.category === 'upcoming')
  const pastEvents = indabaEvents.filter(e => e.category === 'past')
  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents

  const IndabaEventCard = ({ event }: { event: IndabaEvent }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2">
      {/* Header with Year Badge */}
      <div className="relative h-40 bg-gradient-to-br from-primary via-accent to-primary/80 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="relative flex items-end justify-between p-6 h-full">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur">
              IndabaX {event.year}
            </span>
          </div>
          <div className="text-4xl font-black text-white opacity-20 group-hover:opacity-40 transition-opacity">
            {event.year}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm font-semibold text-primary mb-3">{event.subtitle}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{event.startDate} - {event.endDate}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users className="w-4 h-4 text-primary" />
            <span>{event.speakers} Speakers • {event.participants} Participants</span>
          </div>
        </div>

        {/* Key Topics */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {event.keyTopics.slice(0, 3).map((topic, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg"
              >
                {topic}
              </span>
            ))}
            {event.keyTopics.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                +{event.keyTopics.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          {event.category === 'upcoming' && event.registrationUrl ? (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Register
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : event.category === 'past' && event.archiveUrl ? (
            <a
              href={event.archiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Archive
              <Github className="w-4 h-4" />
            </a>
          ) : null}
          <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <section id="indaba-x" className="py-12 lg:py-16 bg-gradient-to-br from-dark via-dark to-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 backdrop-blur">
              🏆 Annual Flagship Event
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Deep Learning IndabaX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {indabaAbout.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Award, label: 'Events', value: indabaStats.totalEvents },
            { icon: Users, label: 'Total Participants', value: `${indabaStats.totalParticipants}+` },
            { icon: Zap, label: 'Speakers', value: `${indabaStats.totalSpeakers}+` },
            { icon: BarChart3, label: 'Years', value: indabaStats.yearsFounded },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-primary">Mission</h3>
            <p className="text-gray-300 leading-relaxed">{indabaAbout.mission}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-primary">Vision</h3>
            <p className="text-gray-300 leading-relaxed">{indabaAbout.vision}</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {indabaAbout.values.map((value, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 hover:border-primary/50 text-center transition-all duration-300 group hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Tabs and Grid */}
        <div>
          {/* Tab Buttons */}
          <div className="flex gap-4 mb-12 justify-center">
            {(['upcoming', 'past'] as const).map((tab) => {
              const count = tab === 'upcoming' ? upcomingEvents.length : pastEvents.length
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 capitalize ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg hover:shadow-xl hover:shadow-primary/50'
                      : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {tab === 'upcoming' ? `Upcoming (${count})` : `Past Events (${count})`}
                </button>
              )
            })}
          </div>

          {/* Events Grid */}
          {displayedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedEvents.map((event) => (
                <IndabaEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No {activeTab} events at this time.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl rounded-xl border border-primary/30 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Attend or Participate?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join Africa's premier AI conference and connect with leading researchers, practitioners, and innovators shaping the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScMO0feFXXiCUNxzRPUWJ6Yh4aVuKIV8JTMZE6PCXEuJxAMHg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Register for 2026
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white">
                Get Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
