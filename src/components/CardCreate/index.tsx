//dependencies
import React from 'react'

//componentes
import { BoxButton, BoxButtons, BoxContent, BoxDecoration, BoxTitle, BoxImage, BoxInput, Container } from './style'

import Text from '../Text'
import Button from '../Button'
import InputS from '../Input'

//images
import bold from '../../assets/images/bold.svg'
import italic from '../../assets/images/italic.svg'


export default function CardInfo(){
  return(
    <Container minWidth='980px'>
      <BoxContent>
      <BoxTitle>
        <Text>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</Text>
      </BoxTitle>

      <BoxInput>
        <Text variant='input'>Assunto</Text>
        <InputS type='text'/>
        <Text variant='input'>Conteúdo</Text>
        <InputS type='text' variant='secondary' />
      </BoxInput>

      <BoxButtons>
        <BoxDecoration>
          <BoxImage>
            <img src={bold} width='13px'/>
          </BoxImage>
          <BoxImage>
            <img src={italic} width='13px' />
          </BoxImage>
        </BoxDecoration>
        <BoxButton><Button variant='discussion'>Enviar</Button></BoxButton>
      </BoxButtons>
      </BoxContent>
    </Container>
  )
}
