//dependencies
import React from 'react'

//componentes
import {
  BoxContent,
  BoxDetails,
  BoxText,
  BoxTextComment,
  BoxTitle,
  BoxImages,
  BoxOpacity,
  Container
} from './style'

import Text from '../Text'
import Button from '../Button'

import check from '../../assets/images/check.svg'


export default function CardEdit(){
  return(
    <Container flexWrap='wrap'>
      <BoxContent>
      <BoxTitle>
        <Text variant='title'>Seu tópico foi enviado com sucesso! :D</Text>
      </BoxTitle>

      <BoxText>
        <Text variant='secondary'>Agradecemos por sua contribuição, uma
        notificação será enviada ao seu email assim que seu tópico for respondido!</Text>
        <Text variant='link'>Descubra outros trabalhos!</Text>
      </BoxText>

      <Container>
       <Button variant='discussion'>Criar Novo Tópico</Button>
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
