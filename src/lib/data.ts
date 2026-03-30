import type { NavItem, HeroSlide, Solution, Industry, Partner, NewsItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'AI Labs',
    href: '#labs',
    children: [
      { label: 'Context Engineering', href: '#labs' },
      { label: 'Agentic Workflow', href: '#labs' },
      { label: 'Meta-Prompting', href: '#labs' },
    ],
  },
  {
    label: 'AI Solutions',
    href: '#solutions',
    children: [
      { label: 'Mobility AI', href: '#mobility' },
      { label: 'Smart Assets OS', href: '#solutions' },
      { label: 'Fleet Management', href: '#solutions' },
      { label: 'Subscription Advisory', href: '#solutions' },
    ],
  },
  { label: 'Business Cases', href: '#cases' },
  {
    label: 'Company',
    href: '#about',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Newsroom', href: '#news' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
]

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'Context Engineering',
    headline: 'Structured Intelligence\nfor Any Operation.',
    subheadline: 'Turn fragmented data into decisive context.',
    description:
      '파편화된 운영 데이터를 지능형 컨텍스트로 구조화하여 의사결정 속도를 혁신합니다.',
    cta: 'Explore AI Labs →',
    ctaHref: '#labs',
    bgColor: 'from-[#001A3D] to-[#003087]',
  },
  {
    id: 2,
    tag: 'Agentic Workflow',
    headline: 'AI Agents That\nThink and Execute.',
    subheadline: 'Industry-specific agent pipelines built to act.',
    description:
      '스스로 사고하고 실행하는 산업별 맞춤형 AI 에이전트 파이프라인을 구축합니다.',
    cta: 'See Solutions →',
    ctaHref: '#solutions',
    bgColor: 'from-[#002060] to-[#1450A3]',
  },
  {
    id: 3,
    tag: 'Wegooli Mobility Lab',
    headline: 'Real-World Data.\nProven Intelligence.',
    subheadline: 'Mobility domain meets Hailor AI technology.',
    description:
      '위굴리의 모빌리티 도메인 지식과 Hailor AI 기술이 결합된 실증 연구소.',
    cta: 'View Mobility Lab →',
    ctaHref: '#mobility',
    bgColor: 'from-[#001230] to-[#003087]',
  },
  {
    id: 4,
    tag: 'Fleet Management',
    headline: 'AI-Driven Fleet\nOperations at 90%.',
    subheadline: 'Automate fine management & risk prediction.',
    description:
      '과태료 자동이관 및 사고 리스크 관리 에이전트 구축 — Freez Mobility 실증 사례.',
    cta: 'View Case →',
    ctaHref: '#cases',
    bgColor: 'from-[#003087] to-[#0044CC]',
  },
  {
    id: 5,
    tag: 'Time Quality Agency',
    headline: 'We Exist to Make\nYour Time Valuable.',
    subheadline: 'Surgical partners in technology-driven life quality.',
    description:
      '단순한 대행을 넘어, 기술로 삶의 퀄리티를 혁신하는 외과의사 같은 파트너.',
    cta: 'Our Philosophy →',
    ctaHref: '#about',
    bgColor: 'from-[#001A3D] to-[#002B6B]',
  },
]

export const SOLUTIONS: Solution[] = [
  {
    id: 1,
    number: '01',
    tag: 'Core AI',
    title: 'Context Engineering',
    description:
      '파편화된 운영 데이터를 지능형 컨텍스트로 구조화하여 의사결정 속도를 혁신합니다. AI가 이해할 수 있는 언어로 비즈니스 현실을 번역합니다.',
    features: [
      'Operational Data Structuring',
      'Knowledge Graph Construction',
      'Real-time Context Streaming',
      'Decision Acceleration',
    ],
  },
  {
    id: 2,
    number: '02',
    tag: 'Automation',
    title: 'Agentic Workflow',
    description:
      '스스로 사고하고 실행하는 산업별 맞춤형 AI 에이전트 파이프라인을 구축합니다. 반복 업무를 자동화하고 운영 효율을 극대화합니다.',
    features: [
      'Multi-Agent Orchestration',
      'Industry-Specific Pipelines',
      'Task Automation Design',
      'Continuous Self-Optimization',
    ],
  },
  {
    id: 3,
    number: '03',
    tag: 'Precision AI',
    title: 'Meta-Prompting',
    description:
      '모델의 한계를 넘어서는 고차원적 프롬프트 제어로 정교한 결과물을 도출합니다. LLM 성능을 최대치로 끌어올리는 고급 제어 기술.',
    features: [
      'High-Order Prompt Control',
      'Model Boundary Expansion',
      'Output Precision Tuning',
      'Multi-Model Coordination',
    ],
  },
]

export const INDUSTRIES: Industry[] = [
  { id: 1, label: 'Mobility', icon: '🚗' },
  { id: 2, label: 'Real Estate', icon: '🏢' },
  { id: 3, label: 'Manufacturing', icon: '🏭' },
  { id: 4, label: 'Logistics', icon: '📦' },
  { id: 5, label: 'Healthcare', icon: '🏥' },
  { id: 6, label: 'Finance', icon: '💹' },
  { id: 7, label: 'Retail', icon: '🛍️' },
  { id: 8, label: 'Smart Cities', icon: '🌆' },
  { id: 9, label: 'Construction', icon: '🏗️' },
  { id: 10, label: 'Defense', icon: '🛡️' },
  { id: 11, label: 'Education', icon: '📚' },
  { id: 12, label: 'Public Safety', icon: '🔐' },
]

export const PARTNERS: Partner[] = [
  { id: 1, name: 'Wegooli' },
  { id: 2, name: 'Freez Mobility' },
  { id: 3, name: 'NVIDIA' },
  { id: 4, name: 'AWS' },
  { id: 5, name: 'Microsoft Azure' },
  { id: 6, name: 'Google Cloud' },
  { id: 7, name: 'OpenAI' },
  { id: 8, name: 'Anthropic' },
  { id: 9, name: 'Living Space' },
  { id: 10, name: 'Samsung SDS' },
  { id: 11, name: 'SK Telecom' },
  { id: 12, name: 'LG CNS' },
]

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: 'March 20, 2026',
    category: 'Product',
    title: 'Hailor AI Launches Context Engineering Platform for Enterprise Operations',
    excerpt:
      '비즈니스 운영 데이터를 실시간으로 지능형 컨텍스트로 변환하는 엔터프라이즈 플랫폼을 공식 출시합니다.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    date: 'March 6, 2026',
    category: 'Case Study',
    title: 'Freez Mobility Achieves 90% Fleet Automation with Hailor AI Agents',
    excerpt:
      'AI 에이전트 기반 차량 관제 시스템으로 과태료 자동이관 및 사고 리스크 예측을 실현한 실증 사례.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    date: 'February 18, 2026',
    title: 'Hailor AI × Wegooli: Mobility AI Lab Opens for Real-World Testing',
    category: 'Partnership',
    excerpt:
      '위굴리와의 파트너십으로 설립된 모빌리티 AI 실증 연구소가 공식 운영을 시작합니다.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80',
  },
]

export const BLOG_POSTS: NewsItem[] = [
  {
    id: 1,
    date: 'March 23, 2026',
    category: 'Tech Blog',
    title: 'Why Context Engineering Will Define the Next Wave of Enterprise AI',
    excerpt:
      'RAG를 넘어, 컨텍스트 엔지니어링이 어떻게 AI의 실용성을 새로운 차원으로 끌어올리는지 설명합니다.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    date: 'March 15, 2026',
    category: 'Tech Blog',
    title: 'Building Industry-Specific Agentic Pipelines: A Mobility Case Study',
    excerpt:
      '모빌리티 산업에 특화된 AI 에이전트 파이프라인 설계 방법론과 실제 구축 경험을 공유합니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    date: 'March 3, 2026',
    category: 'Tech Blog',
    title: 'Meta-Prompting: Pushing the Boundaries of What LLMs Can Do',
    excerpt:
      '고차원 프롬프트 제어 기법으로 LLM의 성능 한계를 뛰어넘는 방법을 기술적으로 분석합니다.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80',
  },
]
