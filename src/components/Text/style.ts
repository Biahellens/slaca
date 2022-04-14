import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '12px',
      color: 'text.main',
      marginTop: '4px',
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
      fontSize: '18px',
      color: '#ED7839',
      fontWeight: 'bold',
    },

    span: {
      fontSize: '14px',
      color: '#ED7839',
    },

    input: {
      fontSize: '16px',
      color: '#ED7839',
      fontWeight: 'bold',
      marginTop: '10px',
    },

    link: {
      fontSize: '14px',
      color: '#ED7839',
      marginTop: '40px',
      textDecoration: 'underline'
    }
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)
