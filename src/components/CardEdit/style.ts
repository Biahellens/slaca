//dependencias
import styled from 'styled-components'

// components
import { Box, BoxProps } from 'reflexbox'

export const BoxContent = styled(Box)<BoxProps>`
 width: 100%;
 min-height: 200px;

 padding: 0 0 40px 80px;

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
  width: 100%;
  padding: 4vh;

  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
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

export const BoxDetails = styled(Box)<BoxProps>`
 width: 1000px;
 min-height: 154px;

 padding: 2vh;

 border: 1px solid #ECECEC;
 border-radius: 3px;

 box-shadow: 2px 2px #E7E7E7;
`

export const BoxTextComment = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: start;
`

export const BoxOpacity = styled(Box)<BoxProps>`
  background: #E7E7E7;

  width: 1004px;
  min-height: 154px;
  padding: 2vh;

  opacity: 0.9;
  position: absolute;

  border: 1px solid #ECECEC;
  border-radius: 3px;
`
