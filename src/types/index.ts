export interface Project {
  id: number
  title: string
  client: string
  category: string
  year: string
  description: string
  tags: string[]
  image: string
}

export interface Service {
  id: number
  title: string
  description: string
  items: string[]
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

export interface NavItem {
  label: string
  href: string
}
