import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { ButtonProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      color: '#FFFFFF',
      bg: '#ED7839',
      width: '140px',
    },

    secondary: {
      color: '#FFFFFF',
      bg: '#ED7839',
      width: '40px',
    }
  }
}

export const ButtonStyled = styled('button')<ButtonProps>(
  {
    height: '30px',
    fontSize: '14px',

    borderColor: '#ED7839',
    borderRadius: '4px',

    display: 'inline-block',
    textAlign: 'center',
    margin: '2px',

    alignItems: 'center',
  },
variant(variants))
