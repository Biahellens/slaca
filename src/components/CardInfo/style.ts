//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxContent = styled(Box)<BoxProps>`
 width: 100%;
 min-height: 200px;

 padding: 0 0 40px 200px;

 justify-content: center;
 align-items: center;
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

export const BoxText = styled(Box)<BoxProps>`
  width: 600px;
  padding: 4vh;

  display: flex;
  text-align: center;
`

export const BoxImages = styled(Box)<BoxProps>`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BoxImage = styled(Box)<BoxProps>`
  padding: 20px;
`
