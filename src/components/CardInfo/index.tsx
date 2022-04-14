//dependencies
import React from 'react'

//componentes
import {
  BoxContent,
  BoxDetails,
  BoxText,
  BoxTextComment,
  BoxTitle,
  BoxImage,
  BoxImages,
  BoxOpacity,
  Container
} from './style'

import Text from '../Text'
import Button from '../Button'

//images
import icone1 from '../../assets/images/icone1.svg'
import icone2 from '../../assets/images/icone2.svg'
import icone3 from '../../assets/images/icone3.svg'

import iconCriar from '../../assets/images/iconCriar.svg'

import check from '../../assets/images/check.svg'


export default function CardInfo(){
  return(
    <Container>
      <BoxContent>
      <BoxTitle height='20px'>
        <Text variant='title'>Compartilhe suas ideias ou dúvidas com os autores!</Text>
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
        <Text variant='secondary'>Sabia que o maior estímulo no desenvolvimento científico e cultural
          é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</Text>
      </BoxText>

      <Container>
       <Button variant='discussion'><img src={iconCriar} width='17px'/> Criar Tópico</Button>
      </Container>
      </BoxContent>
      <Container paddingBottom='2vh'>
          <BoxOpacity>
            <BoxImages>
              <img src={check} width='30px' />
            </BoxImages>
          <BoxTitle>
            <Text variant='primaryBold'>Aguardando feedback dos autores</Text>
          </BoxTitle>
          <Container>
            <Text variant='link'>Editar Tópico</Text>
          </Container>
          </BoxOpacity>
          <BoxDetails>
            <BoxTitle>
              <Text variant='title'>Assunto da pergunta aparece aqui</Text>
            </BoxTitle>
            <BoxTextComment>
              <Text>Carlos Henrique Santos</Text>

              <Text>Comecinho da pergunta aparece aqui resente relato inscreve-se
                no campo da análise da dimensão e impacto de processo formativo
                situado impacto de processo formativo processo...</Text>
            </BoxTextComment>
          </BoxDetails>
        </Container>
    </Container>
  )
}
