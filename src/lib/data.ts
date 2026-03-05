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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'AI-Powered Product Experience',
    client: 'Luminary Labs',
    category: 'Product Design',
    year: '2025',
    description: 'Designed and built an adaptive product interface that learns from user behavior in real time.',
    tags: ['UX', 'AI', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Global Campaign: The Future Is Now',
    client: 'Vortex Motors',
    category: 'Campaign',
    year: '2024',
    description: 'An integrated campaign across 12 markets that redefined how an automotive brand speaks to Gen Z.',
    tags: ['Campaign', 'Content', 'Social'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Commerce Reinvented',
    client: 'Aether Store',
    category: 'Digital Experience',
    year: '2024',
    description: 'A next-generation e-commerce platform combining editorial storytelling with seamless transactions.',
    tags: ['E-Commerce', 'Design', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
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
    name: 'Jinwoo Choi',
    role: 'Executive Creative Director',
    bio: 'Leads creative vision with a decade of brand-building across Seoul and global markets.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Sung-a Park',
    role: 'Head of Strategy',
    bio: 'Turns cultural tension into brand opportunity. Former TBWA and BBDO.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Sun Kim',
    role: 'Creative Lead',
    bio: 'Award-winning designer obsessed with the space between emotion and aesthetics.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Selena',
    role: 'Director of Content',
    bio: 'Storyteller at heart. Shapes narratives that move across cultures and platforms.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Junhyuk Jang',
    role: 'Director of Technology',
    bio: 'Full-stack engineer who believes the best code is invisible but unforgettable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'KYU',
    role: 'Motion & 3D Director',
    bio: 'Brings brands to life through motion, 3D, and the unexpected.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
]
