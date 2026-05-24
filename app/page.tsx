import Hero from '@/components/Hero'
import EventDetails from '@/components/EventDetails'
import WhyJoin from '@/components/WhyJoin'
import PersonGrid from '@/components/PersonGrid'
import UpcomingEvents from '@/components/UpcomingEvents'
import IndabaXSection from '@/components/IndabaXSection'
import Sponsors from '@/components/Sponsors'
import { speakers, organizers, volunteers } from '@/data/people'
import { eventInfo } from '@/data/event'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Event Details */}
      <section id="event" className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-center animate-slideIn">
              About <span className="text-primary">AI-GAMNET</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              {eventInfo.description}
            </p>
          </div>
          <EventDetails />
        </div>
      </section>

      {/* Why Join */}
      <WhyJoin />

      {/* Featured Thought Leaders */}
      <PersonGrid
        title="Featured Thought Leaders"
        subtitle="Meet the researchers, professionals, and innovators driving AI innovation and excellence in Africa."
        people={speakers}
      />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* IndabaX Section */}
      <IndabaXSection />

      {/* Sponsors */}
      <Sponsors />

      {/* Organizers */}
      <PersonGrid title="Executive" people={organizers} />

      {/* Volunteers */}
      <PersonGrid title="Volunteer Members" people={volunteers} />
    </main>
  )
}
