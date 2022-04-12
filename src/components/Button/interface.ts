import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>
