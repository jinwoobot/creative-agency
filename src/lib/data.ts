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
    title: 'Carsharing Operations OS',
    client: 'MoovX',
    category: 'Hyper-Operation',
    year: '2025',
    description: 'End-to-end operational redesign of a carsharing platform — reducing idle asset time by 40% through AI scheduling and demand forecasting.',
    tags: ['Automation', 'AI', 'Asset Optimization'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Business OS Architecture',
    client: 'PropShare',
    category: 'OS Architecture',
    year: '2025',
    description: 'Designed a living business OS for a co-living operator — custom-built automation workflows that eliminated 60% of recurring manual tasks.',
    tags: ['Strategy', 'Workflow Design', 'Systems'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Enterprise AI Empowerment',
    client: 'KorpTech',
    category: 'AI Training',
    year: '2024',
    description: 'Upskilled 200+ employees across 3 divisions to fully integrate AI tools into their daily workflows — measurable productivity lift within 90 days.',
    tags: ['AI Education', 'Change Management', 'Culture'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Digital UX Optimization',
    client: 'Aether Commerce',
    category: 'Hyper-Operation',
    year: '2024',
    description: 'Rebuilt a legacy e-commerce UX around behavioral data — aligning user experience with business logic to lift conversion by 2.8×.',
    tags: ['UX', 'Digital', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
  },
]

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Operations Process Optimization',
    description: 'We map and rebuild your core operations using AI-based automation design — lowering operational cost while dramatically increasing throughput and accuracy.',
    items: ['Process Audit & Mapping', 'AI Automation Design', 'Workflow Engineering', 'KPI Dashboard Setup'],
  },
  {
    id: 2,
    title: 'Digital Planning & Execution',
    description: 'We build digital systems where user experience and business logic interlock perfectly — from UX architecture to full-stack delivery.',
    items: ['UX Research & Architecture', 'Interface Design', 'Full-Stack Development', 'Conversion Optimization'],
  },
  {
    id: 3,
    title: 'Business OS Consulting',
    description: 'Every business runs on a different operating environment. We analyze yours and design a custom automation roadmap — a living system that adapts as you grow.',
    items: ['Operating Environment Analysis', 'Automation Roadmap Design', 'Systems Integration', 'Ongoing Optimization Retainer'],
  },
  {
    id: 4,
    title: 'AI Empowerment Training',
    description: "We train your team to fully own AI as a tool — building internal capability so your organization can self-optimize long after we're done.",
    items: ['AI Tool Integration Training', 'Role-Specific Workflow Modules', 'Hands-On Practice Sessions', 'Organizational Intelligence Upgrade'],
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
    bio: 'Former TBWA and R/GA. Turns operational friction into growth opportunity.',
  },
  {
    id: 3,
    name: 'David Lim',
    role: 'Director of Technology',
    bio: 'Ex-Google engineer obsessed with the intersection of AI and operational design.',
  },
  {
    id: 4,
    name: 'Seo-yeon Cho',
    role: 'Head of AI Training',
    bio: 'Built and scaled AI empowerment programs across Fortune 500 organizations.',
  },
]
