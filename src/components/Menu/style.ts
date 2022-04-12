import styled from 'styled-components'

// components
import { Flex, Box, BoxProps } from 'reflexbox'

export const Paper = styled.div`
  width: 220;
  max-Width: 100%;
  height: 100%;

  box-shadow: 4px 0 #E7E7E7;
`

export const BoxTop = styled(Box)<BoxProps>`
  width: 100%;
  height: 68px;

  background-image: linear-gradient(#FFB354, #EE7A3A);
  color: #FFFFFF;

  display: flex;
  text-align: center;
  justify-Content: center;

`

export const BoxImage = styled(Box)<BoxProps>`
  max-width: 220px;
  min-height: 260px;
  padding: 0.5;
  display: flex;
  justify-Content: center;
`

export const BoxMenu = styled(Box)<BoxProps>`
  max-width: 220px;
  padding: 0.5;
  display: flex;
  flex-wrap: wrap;
  justify-Content: center;
`
export const Button = styled.button`
  width: 100%;
  padding: 1.2vh;
  margin-left: 4px;

  font-size: 15px;

  text-align: start;

  background: none;
  color: #725C5C;

  border-width: 0 0 2px 0;
  border-color: #E7E7E7;

`
