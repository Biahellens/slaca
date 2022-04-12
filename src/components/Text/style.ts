import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '10px',
      color: 'text.main',
    },

    secondary: {
      fontSize: '18px',
      color: 'text.main',
    },
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: 0,
},
variant(variants), typography)
