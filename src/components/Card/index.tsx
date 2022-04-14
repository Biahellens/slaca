//dependencies
import React, { useState } from 'react'
import styled from 'styled-components'

//componentes
import { BoxDetails, BoxTitle, Container } from './style'

import Text from '../Text'

export default function Card({title, children}:{title: string; children: any}) {
  return (
    <BoxDetails>
      <BoxTitle>
        <Text variant="title">{title}</Text>
      </BoxTitle>
      <Container>
        {children}
      </Container>
    </BoxDetails>
  )
}
