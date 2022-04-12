// dependencies
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const AppBar = styled(Box)<BoxProps>`
   position: relative;

   display: flex;
   justify-content: space-between;

   padding: 2px;
   background-color: #FDF1EB;
   color: #725C5C;

   height: 68px;
   width: 1446px;
`

export const Container = styled(Box)<BoxProps>`
  flex-wrap: wrap;
`

export const ToolBox = styled(Box)<BoxProps>`
 display: flex;
 justify-content: space-between;

 width: 1200px;
`


export const BoxProfile = styled(Box)<BoxProps>`
 display: flex;
 align-content: center;

 padding: 1.4vh;
`

export const SelectLanguage = styled.select`
  width: 97px;
  height: 35px;

  background-color: #FDF1EB;

  border: 1px solid #CCCCCC;

`
