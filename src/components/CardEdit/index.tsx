//dependencies
import React from 'react'

//componentes
import { BoxContent, BoxText, BoxTitle, Container } from './style'

import Text from '../Text'
import Button from '../Button'

export default function CardEdit(){
  return(
    <Container>
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
    </Container>
  )
}
