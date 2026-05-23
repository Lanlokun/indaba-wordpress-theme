'use client'

import Image from 'next/image'
import { sponsors } from '@/data/sponsors'
// import images from '@/assets/images'

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 lg:py-28 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 animate-slideIn">Our <span className="text-primary">Partners</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Proud to be involved with the following institutions, we thank them for helping to be part of this initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.link}
              className="group flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-48 h-32 overflow-hidden rounded-lg">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Ousman-Bah.webp'
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
