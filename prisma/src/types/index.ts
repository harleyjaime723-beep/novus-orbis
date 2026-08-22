import { NextAuthOptions, Session } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

export type UserRole = 'admin' | 'editor' | 'user'

export interface CustomSession extends Session {
  user?: {
    id: string
    email: string
    name: string
    role: UserRole
  }
}

export interface CustomJWT extends JWT {
  id: string
  role: UserRole
}

export interface Project {
  id: string
  slug: string
  
  titlePt: string
  titleEn: string
  titleFr: string
  titleEs: string
  titleDe: string
  titleZh: string
  
  descriptionPt: string
  descriptionEn: string
  descriptionFr: string
  descriptionEs: string
  descriptionDe: string
  descriptionZh: string
  
  category: 'Software' | 'HVAC' | 'Oil & Gas' | 'Energias'
  year: string
  startDate: Date
  endDate?: Date
  
  videoUrl?: string
  backgroundVideoUrl?: string
  imageUrls: string[]
  
  technologies: string[]
  results: string
  teamSize: number
  client?: string
  impact: string
  
  published: boolean
  
  createdAt: Date
  updatedAt: Date
  
  documents?: Document[]
}

export interface Document {
  id: string
  projectId: string
  titlePt: string
  titleEn: string
  type: 'Technical' | 'UserGuide' | 'CaseStudy' | 'Proposal' | 'WhitePaper'
  url: string
  fileSize?: number
  createdAt: Date
}

export interface ContactInfo {
  id: string
  email: string
  phone: string
  whatsapp?: string
  address: string
  district: string
  postalCode: string
  reference?: string
  latitude: number
  longitude: number
  mondayFriday: string
  saturday: string
  sunday: string
  updatedAt: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface ProjectFormData {
  titlePt: string
  titleEn: string
  titleFr: string
  titleEs: string
  titleDe: string
  titleZh: string
  
  descriptionPt: string
  descriptionEn: string
  descriptionFr: string
  descriptionEs: string
  descriptionDe: string
  descriptionZh: string
  
  category: string
  year: string
  startDate: Date
  endDate?: Date
  
  videoUrl?: string
  backgroundVideoUrl?: string
  imageUrls: string[]
  
  technologies: string[]
  results: string
  teamSize: number
  client?: string
  impact: string
  published: boolean
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
}

export interface AuthContextType {
  user?: CustomSession['user']
  isLoading: boolean
  isAuthenticated: boolean
  logout: () => Promise<void>
}