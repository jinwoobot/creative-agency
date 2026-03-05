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
    title: 'Hyper-Operation',
    description: 'We eliminate operational inefficiency at its root. Using AI-based automation design, we reduce operating costs and maximize productivity — turning your business into a high-performance engine.',
    items: ['Operational Process Optimization', 'AI Automation Design', 'Digital Planning & Execution', 'Business UX Systems'],
  },
  {
    id: 2,
    title: 'OS Architecture',
    description: 'We design the operating system of your business. Every workflow, every decision point — mapped, optimized, and built to scale. Our Business OS adapts to your environment like a living system.',
    items: ['Business OS Consulting', 'Custom Automation Roadmap', 'Workflow Intelligence', 'System Integration'],
  },
  {
    id: 3,
    title: 'AI Empowerment',
    description: 'We don\'t just build systems — we build the people who run them. Our AI training elevates your team\'s intelligence so they can optimize their own work long after we\'re gone.',
    items: ['AI Tool Mastery', 'Prompt Engineering', 'Team Intelligence Upgrade', 'AI Workflow Training'],
  },
  {
    id: 4,
    title: 'Creative & Brand',
    description: 'Strategy, design, and storytelling that makes brands impossible to ignore. We build visual identities and campaigns engineered for cultural impact.',
    items: ['Brand Strategy', 'Visual Identity', 'Creative Campaigns', 'Content & Social'],
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Jinwoo Choi',
    role: 'Executive Creative Director',
    bio: 'Leads creative vision with a decade of brand-building across Seoul and global markets.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
  {
    id: 2,
    name: 'Sung-a Park',
    role: 'Head of Strategy',
    bio: 'Turns cultural tension into brand opportunity. Former TBWA and BBDO.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
  {
    id: 3,
    name: 'Sun Kim',
    role: 'Creative Lead',
    bio: 'Award-winning designer obsessed with the space between emotion and aesthetics.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
  {
    id: 4,
    name: 'Selena',
    role: 'Director of Content',
    bio: 'Storyteller at heart. Shapes narratives that move across cultures and platforms.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
  {
    id: 5,
    name: 'Junhyuk Jang',
    role: 'Director of Technology',
    bio: 'Full-stack engineer who believes the best code is invisible but unforgettable.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
  {
    id: 6,
    name: 'KYU',
    role: 'Motion & 3D Director',
    bio: 'Brings brands to life through motion, 3D, and the unexpected.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&crop=faces&w=400&h=500&q=80',
  },
]
