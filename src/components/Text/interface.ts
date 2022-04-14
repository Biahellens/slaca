import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'primaryBold' | 'secondary' | 'title' | 'span' | 'input' | 'link'
} & HTMLAttributes<HTMLElement>
