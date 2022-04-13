import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '12px',
      color: 'text.main',
    },

    primaryBold: {
      fontSize: '12px',
      color: 'text.main',
      fontWeight: 'bold'
    },

    secondary: {
      fontSize: '18px',
      color: 'text.main',
    },

    title: {
      fontSize: '20px',
      color: 'text.dark',
      fontWeight: 'bold',
    },

    span: {
      fontSize: '14px',
      color: '#ED7839',
    }
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)
