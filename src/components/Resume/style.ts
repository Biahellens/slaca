//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxDetails = styled(Box)<BoxProps>`
 width: 1034px;
 min-height: 190px;

 border: 1px solid #ECECEC;
 border-radius: 3px;
`

export const BoxTop = styled(Box)<BoxProps>`
  padding: 1.5vh;
  background-color: #FDF1EB;
  color: #725C5C;

  height: 45px;
  width: 100%;
`

export const Container = styled(Box)<BoxProps>`
  flex-wrap: wrap;
`
export const BoxResume = styled(Box)<BoxProps>`
   padding: 1.5vh;
   background-color: #FDF1EB;
   color: #725C5C;

   height: 45px;
   width: 100%;
`

export const BoxClicked = styled.div`
   padding: 1.5vh;
   background-color: #FDF1EB;
   color: #725C5C;

   height: 45px;
   width: 100%;
`
