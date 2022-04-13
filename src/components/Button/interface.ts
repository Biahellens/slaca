import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'clicked'
} & ButtonHTMLAttributes<HTMLButtonElement>
