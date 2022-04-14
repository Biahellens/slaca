//dependencies
import React, { useState } from 'react'

//componentes
import { BoxButtons, BoxDecoration, BoxDetails, BoxImage, BoxInfo, BoxText, BoxTitle, Container } from './style'

import Text from '../Text'

//images
import favorito from '../../assets/images/favorito.svg'
import maisInformacoes from '../../assets/images/maisInformacoes.svg'

export default function CardComment() {
  return (
    <Container>
      <BoxDetails>
        <BoxTitle>
           <Text variant="title">Assunto da pergunta aparece aqui</Text>
        </BoxTitle>
        <BoxText>
          <Text>Carlos Henrique Santos</Text>

          <Text>Comecinho da pergunta aparece aqui resente relato inscreve-se
            no campo da análise da dimensão e impacto de processo formativo
            situado impacto de processo formativo processo...</Text>
        </BoxText>

        <BoxButtons>
          <BoxDecoration>
            <BoxImage>
              <img src={maisInformacoes} width='4px' />
            </BoxImage>
            <BoxImage>
              <img src={favorito} width='30px' />
            </BoxImage>
            <BoxInfo>
              <Text>1 Like</Text>
            </BoxInfo>
            <BoxInfo>
              <Text>1 Resposta</Text>
            </BoxInfo>
          </BoxDecoration>

        </BoxButtons>

      </BoxDetails>
    </Container>
  )
}
