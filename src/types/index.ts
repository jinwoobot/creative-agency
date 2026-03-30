export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface HeroSlide {
  id: number
  tag: string
  headline: string
  subheadline: string
  description: string
  cta: string
  ctaHref: string
  bgColor: string
}

export interface Solution {
  id: number
  number: string
  tag: string
  title: string
  description: string
  features: string[]
}

export interface Industry {
  id: number
  label: string
  icon: string
}

export interface Partner {
  id: number
  name: string
}

export interface NewsItem {
  id: number
  date: string
  category: string
  title: string
  excerpt: string
  image: string
}
