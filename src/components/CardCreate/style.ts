//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxContent = styled(Box)<BoxProps>`
 width: 100%;
 min-height: 200px;

 padding: 2vh;

 justify-content: start;
 align-items: start;
`

export const Container = styled(Box)<BoxProps>`
  display:flex;
  justify-content: center;
`

export const BoxTitle = styled(Box)<BoxProps>`
  height: 20px;
  width: 100%;

  display: flex;
  justify-content: center;
`

export const BoxButtons = styled(Box)<BoxProps>`
  width: 100%;

  display: flex;
  justify-content: space-around;

  background-color: #EAF1F2;
  border: 1px #CCCCCC;
  border-radius: 0 0 4px 4px;
`

export const BoxInput = styled(Box)<BoxProps>`
  width: 100%;

  padding-top: 2vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const BoxDecoration = styled(Box)<BoxProps>`
  width: 100%;

  display: flex;
  justify-content: flex-start;
`

export const BoxImage = styled(Box)<BoxProps>`
  padding: 1vh;
`

export const BoxButton = styled(Box)<BoxProps>`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`
