import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'secondary'
} & HTMLAttributes<HTMLElement>
