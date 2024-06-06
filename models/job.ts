export interface Job extends JobData {
  id: number
}

export interface JobData {
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: Requirements
  role: Role
}

export interface Requirements {
  content: string
  items: string[]
}

export interface Role {
  content: string
  items: string[]
}

export interface dbJob extends dbJobData {
  id: number
}

export interface dbJobData {
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: string
  role: string
}
