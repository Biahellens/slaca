import React from 'react'

import { ButtonStyled } from './style'

import { ButtonProps } from './interface'

export const Button = ({
  variant = 'primary',
  children
}: ButtonProps) => {
  return (
    <ButtonStyled variant={variant}>
      {children}
    </ButtonStyled>
  )
}

export default Button
