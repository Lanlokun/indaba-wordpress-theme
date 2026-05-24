export interface IndabaEvent {
  id: number
  year: number
  title: string
  subtitle: string
  description: string
  startDate: string
  endDate: string
  location: string
  speakers: number
  participants: number
  category: 'past' | 'upcoming'
  highlightImages: string[]
  registrationUrl?: string
  archiveUrl?: string
  imageUrl?: string
  keyTopics: string[]
}

export const indabaEvents: IndabaEvent[] = [
  // Upcoming/Current Events
  {
    id: 1,
    year: 2026,
    title: 'IndabaX 2026 - Flagship Conference',
    subtitle: 'Advancing AI for Social Impact Across Africa',
    description: 'The third annual Deep Learning Indaba X Gambia brings together leading AI researchers, practitioners, and innovators to discuss the latest developments in machine learning and AI applications solving real-world African challenges.',
    startDate: 'July 20, 2026',
    endDate: 'July 22, 2026',
    location: 'University of The Gambia, Kanifing',
    speakers: 25,
    participants: 150,
    category: 'upcoming',
    keyTopics: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'AI for Social Impact',
      'Ethical AI',
    ],
    highlightImages: [],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScMO0feFXXiCUNxzRPUWJ6Yh4aVuKIV8JTMZE6PCXEuJxAMHg/viewform',
    imageUrl: '/images/indaba-2026.jpg',
  },

  // Past Events
  {
    id: 2,
    year: 2025,
    title: 'IndabaX 2025 - Building Africa\'s AI Future',
    subtitle: 'Research, Innovation, and Community Excellence',
    description: 'The second annual Deep Learning Indaba X Gambia brought together over 120 participants for three days of keynotes, workshops, and networking focused on practical AI applications and capacity building across West Africa.',
    startDate: 'July 23, 2025',
    endDate: 'July 25, 2025',
    location: 'University of The Gambia, Kanifing',
    speakers: 18,
    participants: 120,
    category: 'past',
    keyTopics: [
      'Deep Learning Applications',
      'Computer Vision',
      'Data Science',
      'AI Ethics',
      'Industry Perspectives',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2025.jpg',
  },

  {
    id: 3,
    year: 2024,
    title: 'IndabaX 2024 - The Application of Deep Learning in Agriculture',
    subtitle: 'Pioneering AI Solutions for Sustainable African Agriculture',
    description: 'The inaugural Deep Learning Indaba X Gambia conference brought together 70 participants across three days of intensive learning, networking, and collaboration focused on applying deep learning to agricultural challenges.',
    startDate: 'July 25, 2024',
    endDate: 'July 27, 2024',
    location: 'University of The Gambia, Kanifing',
    speakers: 12,
    participants: 70,
    category: 'past',
    keyTopics: [
      'Deep Learning',
      'Computer Vision in Agriculture',
      'Crop Prediction',
      'Soil Analysis',
      'Research Presentations',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2024.jpg',
  },
  {
    id: 4,
    year: 2023,
    title: 'IndabaX 2023 - Building Africa\'s AI Future',
    subtitle: 'Research, Innovation, and Community Excellence',
    description: 'The second annual Deep Learning Indaba X Gambia brought together over 120 participants for three days of keynotes, workshops, and networking focused on practical AI applications and capacity building across West Africa.',
    startDate: 'July 23, 2023',
    endDate: 'July 25, 2023',
    location: 'University of The Gambia, Kanifing',
    speakers: 12,
    participants: 70,
    category: 'past',
    keyTopics: [
      'Deep Learning',
      'Computer Vision in Agriculture',
      'Crop Prediction',
      'Soil Analysis',
      'Research Presentations',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2023.jpg',
  },

  {
    id: 5,
    year: 2022,
    title: 'IndabaX 2022 - AI for Sustainable Development',
    subtitle: 'Innovation and Collaboration for a Better Future',
    description: 'The Deep Learning Indaba X Gambia 2022 convened leading AI researchers and practitioners to explore applications of machine learning in sustainable development and addressing societal challenges.',
    startDate: 'July 20, 2022',
    endDate: 'July 22, 2022',
    location: 'University of The Gambia, Kanifing',
    speakers: 10,
    participants: 55,
    category: 'past',
    keyTopics: [
      'Machine Learning',
      'Sustainable Development',
      'Data Analytics',
      'Industry Collaboration',
      'Student Engagement',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2022.jpg',
  },

  {
    id: 6,
    year: 2021,
    title: 'IndabaX 2021 - Virtual Conference on AI Innovation',
    subtitle: 'Connecting Africa\'s AI Community in the Digital Era',
    description: 'The inaugural IndabaX Gambia was held as a virtual conference, bringing together over 40 participants from across Africa to discuss AI applications, research opportunities, and community building initiatives.',
    startDate: 'July 22, 2021',
    endDate: 'July 24, 2021',
    location: 'Virtual',
    speakers: 8,
    participants: 40,
    category: 'past',
    keyTopics: [
      'Artificial Intelligence',
      'Virtual Learning',
      'Network Building',
      'Research Opportunities',
      'Community Initiatives',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2021.jpg',
  },

  {
    id: 7,
    year: 2020,
    title: 'IndabaX 2020 - Foundation Year',
    subtitle: 'Establishing AI Excellence in The Gambia',
    description: 'The foundation year of IndabaX Gambia gathered a dedicated group of 25 AI enthusiasts, researchers, and students to establish the community and discuss the future of artificial intelligence in West Africa.',
    startDate: 'July 18, 2020',
    endDate: 'July 20, 2020',
    location: 'Virtual',
    speakers: 5,
    participants: 25,
    category: 'past',
    keyTopics: [
      'AI Fundamentals',
      'Community Building',
      'Research Networking',
      'Capacity Building',
      'Vision & Direction',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2020.jpg',
  },

  {
    id: 8,
    year: 2019,
    title: 'IndabaX 2019 - Inaugural Gathering',
    subtitle: 'Launching AI-GAMNET Community',
    description: 'The very first IndabaX event in The Gambia brought together 15 AI researchers, academics, and professionals to explore collaboration opportunities and establish the foundation for the AI-GAMNET community.',
    startDate: 'July 15, 2019',
    endDate: 'July 17, 2019',
    location: 'University of The Gambia',
    speakers: 4,
    participants: 15,
    category: 'past',
    keyTopics: [
      'Community Foundation',
      'AI Applications',
      'Research Discussions',
      'Networking',
      'Strategic Planning',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2019.jpg',
  },

  {
    id: 9,
    year: 2018,
    title: 'IndabaX 2018 - Preparatory Workshop',
    subtitle: 'Building the Foundation for AI Excellence',
    description: 'A preparatory workshop bringing together a core group of 10 AI enthusiasts and academics to discuss the vision for establishing IndabaX in The Gambia and planning future initiatives.',
    startDate: 'August 10, 2018',
    endDate: 'August 12, 2018',
    location: 'University of The Gambia',
    speakers: 3,
    participants: 10,
    category: 'past',
    keyTopics: [
      'Strategic Planning',
      'AI Research',
      'Workshop Series',
      'Community Goals',
      'Resource Development',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2018.jpg',
  },

  {
    id: 10,
    year: 2017,
    title: 'IndabaX 2017 - Initiative Launch',
    subtitle: 'The Beginnings of AI-GAMNET',
    description: 'The initiative to establish IndabaX in The Gambia began with a small gathering of 8 AI pioneers and academics who shared a vision of building Africa\'s AI community and promoting research excellence in the region.',
    startDate: 'July 20, 2017',
    endDate: 'July 22, 2017',
    location: 'University of The Gambia',
    speakers: 3,
    participants: 8,
    category: 'past',
    keyTopics: [
      'Initiative Launch',
      'Vision Setting',
      'AI Advocacy',
      'Research Collaboration',
      'Community Outreach',
    ],
    highlightImages: [],
    archiveUrl: 'https://github.com/Lanlokun/indaba-wordpress-theme/tree/indabaX',
    imageUrl: '/images/indaba-2017.jpg',
  },
]

export const indabaStats = {
  totalEvents: indabaEvents.length,
  totalParticipants: indabaEvents.reduce((sum, event) => sum + event.participants, 0),
  totalSpeakers: indabaEvents.reduce((sum, event) => sum + event.speakers, 0),
  yearsFounded: Math.max(...indabaEvents.map(e => e.year)) - Math.min(...indabaEvents.map(e => e.year)) + 1,
}

export const indabaAbout = {
  title: 'Deep Learning Indaba X Gambia',
  tagline: 'Africa\'s Premier AI Conference',
  description: 'The Deep Learning Indaba X is a locally-organised conference bringing together experts, researchers, professionals, and students to discuss the latest developments in AI and Machine Learning. Our mission is to strengthen the African AI community, build capacity, and showcase how AI can solve real-world challenges across the continent.',
  mission: 'To advance artificial intelligence research and applications in Africa through community engagement, knowledge sharing, and collaborative innovation.',
  vision: 'To position The Gambia and West Africa as a growing hub for AI excellence and innovation.',
  values: [
    'Community-driven learning and collaboration',
    'Practical applications of AI research',
    'Inclusive representation across Africa',
    'Ethical and responsible AI development',
    'Mentorship and capacity building',
  ],
}
