import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'clicked' | 'discussion'
} & ButtonHTMLAttributes<HTMLButtonElement>
