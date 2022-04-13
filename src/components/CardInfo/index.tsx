//dependencies
import React from 'react'

//componentes
import { BoxContent, BoxText, BoxTitle, BoxImage, BoxImages, Container } from './style'

import Text from '../Text'
import Button from '../Button'

//images
import icone1 from '../../assets/images/icone1.svg'
import icone2 from '../../assets/images/icone2.svg'
import icone3 from '../../assets/images/icone3.svg'

import iconCriar from '../../assets/images/iconCriar.svg'

export default function CardInfo(){
  return(
    <Container>
      <BoxContent>
      <BoxTitle>
        <Text variant='span'>Compartilhe suas ideias ou dúvidas com os autores!</Text>
      </BoxTitle>

      <BoxImages>
        <BoxImage>
          <img src={icone1} width='50px' />
        </BoxImage>
        <BoxImage>
          <img src={icone2} width='50px' />
        </BoxImage>
        <BoxImage>
          <img src={icone3} width='50px' />
        </BoxImage>
      </BoxImages>

      <BoxText>
        <Text>Sabia que o maior estímulo no desenvolvimento científico e cultural
          é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</Text>
      </BoxText>

      <Container>
       <Button variant='discussion'><img src={iconCriar} width='17px'/> Criar Tópico</Button>
      </Container>
      </BoxContent>
    </Container>
  )
}
