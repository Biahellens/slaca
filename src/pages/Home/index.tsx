//dependencias
import React from 'react'

//componentes
import { IconButton } from '@mui/material'

import { Button, Details, Menu, ResponsiveAppBar, Text } from '../../components'

import { Container, Wrapper } from './style'

//images
import download from '../../assets/images/download.svg'
import favoritar from '../../assets/images/favoritar.svg'
import doi from '../../assets/images/doi.svg'
import videoApresentacao from '../../assets/images/video-apresentacao.png'

export function Home(){
  return(
    <Wrapper>
      <Container width={[1/3, 0.17]}>
        <Menu />
      </Container>
      <Container width={[1/2, 0.8]}>
        <ResponsiveAppBar />

        <Container padding='3vh'>
          <Container display='flex' justifyContent='space-between'>
            <Container  width={[0.7, 0.6]} >
              <h3 style={{color: '#ED7839'}}>
                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
              </h3>
            </Container>

            <Container alignItems='flex-end'>
              <Button variant="primary"> <img src={download} width='20px'/> Dowload</Button>
              <Button variant="secondary"> <img src={favoritar} width='20px'/></Button>
              <Button variant="secondary"> <img src={doi} width='20px'/></Button>
            </Container>
          </Container>

          <Container display='flex'  justifyContent='space-between'>

            <Container width={[1, 3/4]} paddingTop='1vh'>
              <img src={videoApresentacao} width='700px'/>
            </Container>
            <Container >
              <Details />
            </Container>
          </Container>
        </Container>
      </Container>
    </Wrapper>
  )
}
