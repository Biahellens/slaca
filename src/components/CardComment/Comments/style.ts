//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxDetails = styled(Box)<BoxProps>`
 width: 1000px;
 min-height: 120px;

 padding: 2vh;

 border: 1px solid #ECECEC;
 border-radius: 0 0 3px 3px;

 box-shadow: 2px 2px #E7E7E7;
`

export const Container = styled(Box)<BoxProps>`
  width: 100%;
  margin: 0;

  display:flex;
  flex-wrap: wrap;
`

export const BoxTop = styled(Box)<BoxProps>`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const BoxText = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;
`

export const BoxComment = styled(Box)<BoxProps>`
  width: 95%;
  display: flex;
  flex-wrap: wrap;

  justify-content: justify;
`

export const BoxInfo = styled(Box)<BoxProps>`
  padding-right: 4vh;

`
