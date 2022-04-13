//dependencies
import React, { useState } from 'react'
import styled from 'styled-components'

//componentes
import { BoxDetails, BoxTop, Container } from './style'

import Accordion from './Accordion'

import Text from '../Text'

export default function Resume() {
  const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <div style={{textAlign: 'justify'}}>
          <div>
            <Text>
              Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna.
              Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum
              augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id.
              Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit
              interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat
              ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac
              porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim.
              Etiam in laoreet odio.
            </Text>
          </div>
          <div style={{marginTop: '20px'}}>
            <Text>
              Nam eget tristique elit, at fermentum tellus. Mauris scelerisque
              ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus.
              Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus
              maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus
              semper, efficitur facilisis turpis. Praesent blandit elementum ultricies.
              Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur
              non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet,
              viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi
              vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris
              odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum
              sapien. Aenean in porta arcu. Maecenas eu maximus massa.
            </Text>
          </div>
          <div style={{marginTop: '20px'}}>
            <Text>
            Praesent velit dolor, dignissim sed quam ac, efficitur porta justo.
            Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi.
            Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus
            luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh,
            viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu.
            Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus
            placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        </div>
      ),
    },
  ]
  return (
    <BoxDetails>
      <BoxTop>
        <Text variant="title"> Resumo </Text>
      </BoxTop>
      <Container display="flex" justifyContent="felx-start" padding="2vh">
        <Accordion items={accordionItems} />
      </Container>
    </BoxDetails>
  )
}
