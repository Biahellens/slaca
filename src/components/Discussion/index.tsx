//dependencies
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { getRefValue } from '../../hooks';
import { AccordionData } from './type';

//componentes
import { BoxDetails, BoxTop, Container } from './style'

//import AccordionComments from './Accordion'

import Text from '../Text'

import './style.css'

export default function Discussion(){
  var btn = document.getElementById('btn-div');
  var container = document.querySelector('.container');
  btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
      }
  });

  return (
    <BoxDetails>
      <BoxTop>
        <Text variant="title"> Discussões </Text>
      </BoxTop>
      <Container>
        <div className="container">
          <p>Esta div não será exibida</p>
        </div>
      <button id='btn-div'>Ocultar/mostrar div</button>
      </Container>
    </BoxDetails>
  )
}
