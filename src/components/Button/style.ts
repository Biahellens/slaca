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
      minwidth: '140px',
    },

    clicked: {
      color: '#ED7839',
      bg: 'none',
      width: '10px',
    },

    discussion: {
      color: '#FFFFFF',
      minWidth: '130px',
      backgroundImage: 'linear-gradient(#FFB354, #EE7A3A)',
    }
  }
}

export const ButtonStyled = styled('button')<ButtonProps>(
  {
    height: '30px',
    fontSize: '14px',

    borderColor: '#ED7839',
    borderRadius: '4px',

    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '2px',

    alignItems: 'center',
  },
variant(variants))
