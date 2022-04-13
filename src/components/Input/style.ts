import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { InputProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      minHeight: '40px',
      bg: 'none',
      color: 'black'
    },

    secondary: {
      minHeight: '100px',
      bg: 'none',
      color: 'text.main',
      borderBottom: 'none',
    },
  }
}

export const InputStyled = styled('input')<InputProps>(
  {
    width: '100%',
    fontSize: '14px',
    padding: 'm',

    borderColor: '#CCCCCC',
    borderRadius: '2px',

    boxSizing: 'border-box',
		display: 'block',

    marginTop: '2px',
  },
variant(variants))
