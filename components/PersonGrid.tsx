'use client'

import { StaticImageData } from 'next/dist/shared/lib/image-external'
import PersonCard from './PersonCard'

interface Person {
  id: number
  name: string
  role: string
  position: string
  image: StaticImageData | string
  tags?: string[]
  bio?: string
  email?: string
  linkedIn?: string
}

interface PersonGridProps {
  title: string
  subtitle?: string
  people: Person[]
  variant?: 'vertical' | 'horizontal' | 'compact'
  gridCols?: string
}

export default function PersonGrid({
  title,
  subtitle,
  people,
  variant = 'vertical',
  gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}: PersonGridProps) {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, '-')} className="py-12 lg:py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="animate-slideIn">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
        </div>

        <div className={`grid ${gridCols} gap-6 lg:gap-8`}>
          {people.map((person) => (
            <PersonCard
              key={person.id}
              name={person.name}
              role={person.role}
              position={person.position}
              image={person.image}
              variant={variant}
              tags={person.tags}
              bio={person.bio}
              email={person.email}
              linkedIn={person.linkedIn}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
