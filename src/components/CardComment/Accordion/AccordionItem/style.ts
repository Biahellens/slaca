//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxDetails = styled(Box)<BoxProps>`
 width: 100%;
 min-height: 150px;

 padding: 2vh;

 border: 1px solid #ECECEC;
 border-radius: 3px;

 box-shadow: 2px 2px #E7E7E7;
`

export const Container = styled(Box)<BoxProps>`
  width: 100%;

  display:flex;
  flex-wrap: wrap;
`

export const BoxTitle = styled(Box)<BoxProps>`
  display: flex;
  justify-content: start;
`

export const BoxText = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: start;
`

export const BoxButtons = styled(Box)<BoxProps>`
  width: 100%;

  display: flex;
  justify-content: space-around;
`

export const BoxDecoration = styled(Box)<BoxProps>`
  width: 100%;
  padding-top: 4vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const BoxImage = styled(Box)<BoxProps>`
  padding-right: 1vh;
`

export const BoxInfo = styled(Box)<BoxProps>`
  padding-right: 1vh;
`
