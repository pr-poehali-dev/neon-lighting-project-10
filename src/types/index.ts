import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  image?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}