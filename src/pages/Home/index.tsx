//dependencies
import React from 'react'

//componentes
import { IconButton } from '@mui/material'

import { Button, Details, Discussion, Menu, ResponsiveAppBar, Resume, Text } from '../../components'

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

        <Container padding='3vh' minWidth='1100px'>
          <Container display='flex' justifyContent='space-between'>
            <Container  width={[1/2, 0.7, 0.6]} >
              <h3 style={{color: '#ED7839'}}>
                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
              </h3>
            </Container>

            <Container flex-wrap='wrap'>
              <Container width={[1]} display='flex' alignItems='center' marginLeft='30px'>
                <Button> <img src={download} width='20px'/> Dowload</Button>
                <Button> <img src={favoritar} width='20px'/></Button>
                <Button> <img src={doi} width='20px'/></Button>
              </Container>

              <Container width={[1/2, 1]} padding='2vh' alignItems='flex-end'>
                <Text variant='span'>COMO CITAR ESSE TRABALHO?</Text>
              </Container>
            </Container>
          </Container>

          <Container display='flex'  justifyContent='space-between' >

            <Container  paddingTop='1vh'>
              <img src={videoApresentacao} width='700px'/>
            </Container>
            <Container >
              <Details />
            </Container>
          </Container>

          <Container marginTop='4vh'>
            <Resume />
          </Container>

          <Container marginTop='4vh'>
            <Discussion />
          </Container>

        </Container>
      </Container>
    </Wrapper>
  )
}
