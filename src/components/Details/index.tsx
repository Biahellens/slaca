//dependencies
import React from 'react'

//componentes
import { BoxDetails, BoxTop, Container } from './style'

import Text from '../Text'

export default function Details() {
  return (
    <BoxDetails>
      <BoxTop>
        <Text variant='title'> Detalhes </Text>
      </BoxTop>
      <Container display='flex' justifyContent='felx-start' padding='2vh'>
        <Container>
          <Text>Tipo de Apresentação: <Text variant='primaryBold'>Pôster</Text></Text>
          <br />
          <Text>Eixo temático: <Text variant='primaryBold'>Alimentação e saúde (AS)</Text></Text>
          <br />
          <Text>Palavras-chaves: <Text variant='primaryBold'>Alimentos funcionais, alimentação escolar</Text></Text>
        </Container>

        <Container marginTop='20px'>
          <Text variant='primaryBold'>Autores:</Text>
          <br />
          <Text>Galileo Galilei¹</Text>
          <br />
          <Text>Berta Lange de Morretes²</Text>
          <br />
          <Text>Isaac Newton³</Text>
          <br />
          <Text>Cesar Lattes¹</Text>
          <br />
          <Text>Stephen Hawking⁴</Text>
        </Container>

        <Container marginTop='30px'>
          <Text>¹Universidade Estadual de Campinas</Text>
          <br />
          <Text>²Universidade de São Paulo</Text>
          <br />
          <Text>³Instituto Nacional de Pesquisas Espaciais</Text>
          <br />
          <Text>⁴Universidade Federal do Rio de Janeiro</Text>
        </Container>
      </Container>
    </BoxDetails>
  );
}
