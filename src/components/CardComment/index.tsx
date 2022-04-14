//dependencies
import React, { useState } from 'react'

//componentes
import { Container } from './style'

//componentes
import Accordion from './Accordion'

import { Comments, CommentsAC } from './Comments'

//images
import check from '../../assets/images/check.svg'

export default function CardComment() {
  const accordionItems = [
    {
      title: 'Accordion comentarios',
      content: (
        <Container>
          <CommentsAC  name='Adriano da Silva'
          comment='Resposta do autor é aqui. Relato inscreve-se no campo da
          análise da dimensão e impacto de processo formativo situado impacto
          de processo formativo processo resente relato inscreve-se no campo da
          análise da dimensão e impacto de processo formativo situado impacto de
          processo formativo processo.'
          type='Autor'/>

          <Comments  name='Carlos Henrique Santos'
          comment='Consegui entender melhor agora! Parece que a variação da
          análise da dimensão e impacto de processo formativo situado impacto
          de processo formativo.

          Obrigada pela resposta, muito interessante o seu trabalho! '
          />

          <CommentsAC  name='Carmila Ferreira Andrade'
          comment='Também ínteressante lembrar que o relato inscreve-se no campo
           da análise da dimensão e impacto de processo formativo situado impacto
           de processo formativo processo resente relato inscreve-se no campo da
           análise da dimensão e impacto de processo formativo situado impacto de
           processo formativo processo.

          Situado impacto de processo formativo processo resente relato inscreve-se
          no campo da análise da dimensão e impacto de processo formativo situado
          impacto de processo formativo processo.'
          type='Coautor'/>

          <CommentsAC  name='Ana Carolina'
          comment='Resposta do autor é aqui. Relato inscreve-se no campo da análise
          da dimensão e impacto de processo formativo situado impacto de processo
          formativo processo resente relato inscreve-se no campo da análise da
          dimensão e impacto de processo formativo situado impacto de processo
          formativo processo.'
          type='Coautor'/>
        </Container>
      ),
    },
  ]
  return (
    <Container>
      <Accordion items={accordionItems} />
    </Container>
  )
}
