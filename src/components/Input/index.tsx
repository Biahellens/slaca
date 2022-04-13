//dependencies
import React from 'react'

//componentes

import { InputStyled } from './style'

import { InputProps } from './interface'

export const InputS = ({
  variant = 'primary',
  children
}: InputProps) => {
  return (
    <InputStyled variant={variant}>
      {children}
    </InputStyled>
  )
}

export default InputS
