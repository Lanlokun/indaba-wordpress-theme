'use client'

import Image, { StaticImageData } from 'next/image'

interface PersonCardProps {
  name: string
  role: string
  position: string
  image: StaticImageData | string
}

export default function PersonCard({ name, role, position, image }: PersonCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-primary border-2 border-transparent transition-all duration-300 transform hover:-translate-y-3 h-full animate-fadeIn card-interactive">
      {/* Image Container with Hover Effect */}
      <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden card-image-hover">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/images/Ousman-Bah.webp'
          }}
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:scale-125 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <span className="text-xs">in</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hover:scale-125 transition-transform duration-300"
              aria-label="Twitter"
            >
              <span className="text-xs">𝕏</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 relative">
        {/* Top Border Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        <h3 className="text-lg md:text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs md:text-sm font-semibold text-primary mb-2">{role}</p>
        <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {position}
        </p>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
      </div>
    </div>
  )
}
