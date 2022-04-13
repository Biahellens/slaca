import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'primaryBold' | 'secondary' | 'title' | 'span'
} & HTMLAttributes<HTMLElement>
