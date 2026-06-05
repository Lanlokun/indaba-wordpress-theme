'use client'

import Image, { StaticImageData } from 'next/image'
import { Mail, Linkedin } from 'lucide-react'

interface PersonCardProps {
  name: string
  role: string
  position: string
  image: StaticImageData | string
  variant?: 'vertical' | 'horizontal' | 'compact'
  bio?: string
  tags?: string[]
  email?: string
  linkedIn?: string
}

<<<<<<< Updated upstream
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
=======
export default function PersonCard({
  name,
  role,
  position,
  image,
  variant = 'vertical',
  bio,
  tags,
  email,
  linkedIn,
}: PersonCardProps) {
  // Vertical Layout (Original)
  if (variant === 'vertical') {
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
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:scale-125 transition-transform duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hover:scale-125 transition-transform duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
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
          <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-3">
            {position}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
        </div>
      </div>
    )
  }

  // Horizontal Layout (Left image, right content)
  if (variant === 'horizontal') {
    return (
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border-l-4 border-primary transition-all duration-300 h-full animate-fadeIn flex">
        {/* Image Container */}
        <div className="relative w-32 h-40 min-w-[8rem] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = '/images/Ousman-Bah.webp'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base md:text-lg font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-xs font-semibold text-primary mb-1">{role}</p>
            <p className="text-xs text-gray-600 leading-snug">{position}</p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Social Links */}
          {(email || linkedIn) && (
            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="text-primary hover:text-accent transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Compact Layout (Minimal card)
  if (variant === 'compact') {
    return (
      <div className="group bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-200 hover:border-primary transition-all duration-300 animate-fadeIn p-4">
        <div className="flex items-start gap-3">
          {/* Small Image */}
          <div className="relative w-16 h-16 min-w-[4rem] rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = '/images/Ousman-Bah.webp'
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-dark group-hover:text-primary transition-colors">
              {name}
            </h4>
            <p className="text-xs font-semibold text-primary line-clamp-1">{role}</p>
            <p className="text-xs text-gray-600 line-clamp-1">{position}</p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.slice(0, 1).map((tag, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return null
>>>>>>> Stashed changes
}
