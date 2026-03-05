import type { Project, Service, TeamMember, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Redefining Brand Identity',
    client: 'Nexus Global',
    category: 'Brand Design',
    year: '2025',
    description: 'A complete visual identity overhaul positioning a Fortune 500 company for the intelligence age.',
    tags: ['Strategy', 'Identity', 'Motion'],
  },
  {
    id: 2,
    title: 'AI-Powered Product Experience',
    client: 'Luminary Labs',
    category: 'Product Design',
    year: '2025',
    description: 'Designed and built an adaptive product interface that learns from user behavior in real time.',
    tags: ['UX', 'AI', 'Prototyping'],
  },
  {
    id: 3,
    title: 'Global Campaign: The Future Is Now',
    client: 'Vortex Motors',
    category: 'Campaign',
    year: '2024',
    description: 'An integrated campaign across 12 markets that redefined how an automotive brand speaks to Gen Z.',
    tags: ['Campaign', 'Content', 'Social'],
  },
  {
    id: 4,
    title: 'Commerce Reinvented',
    client: 'Aether Store',
    category: 'Digital Experience',
    year: '2024',
    description: 'A next-generation e-commerce platform combining editorial storytelling with seamless transactions.',
    tags: ['E-Commerce', 'Design', 'Engineering'],
  },
]

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Brand Design',
    description: 'We craft visual identities that endure. From strategy to symbol, we build brands that mean something.',
    items: ['Brand Strategy', 'Visual Identity', 'Verbal Identity', 'Brand Systems'],
  },
  {
    id: 2,
    title: 'Product & Experience Design',
    description: 'We design products people love — intuitive, beautiful, and built for how humans actually think.',
    items: ['UX Research', 'Interface Design', 'Interaction Design', 'Design Systems'],
  },
  {
    id: 3,
    title: 'Campaign & Content',
    description: 'Ideas that travel. We create campaigns that cut through noise and land with cultural precision.',
    items: ['Creative Campaigns', 'Content Strategy', 'Social & Digital', 'Film & Production'],
  },
  {
    id: 4,
    title: 'Technology & Engineering',
    description: 'We build what we design. From front-end to full-stack, our engineers bring visions to life.',
    items: ['Web Development', 'App Development', 'AI Integration', 'Performance Engineering'],
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Ji-won Park',
    role: 'Executive Creative Director',
    bio: '20 years shaping global brands across Seoul, New York, and London.',
  },
  {
    id: 2,
    name: 'Mia Kang',
    role: 'Head of Strategy',
    bio: 'Former TBWA and R/GA. Turns cultural tension into brand opportunity.',
  },
  {
    id: 3,
    name: 'David Lim',
    role: 'Director of Technology',
    bio: 'Ex-Google engineer obsessed with the intersection of design and code.',
  },
  {
    id: 4,
    name: 'Seo-yeon Cho',
    role: 'Head of Production',
    bio: 'Award-winning producer who makes the impossible happen on time.',
  },
]
