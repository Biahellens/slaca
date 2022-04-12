//dependencias
import React, { useState } from 'react'

//components
import { BoxMenu, BoxImage, Button, BoxTop, Paper } from './style'

import slaca from '../../assets/images/slaca.png'

export default function Menu() {
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked((prev) => !prev)

  return (
    <Paper>
      <BoxTop>
        <h2>SLACA 2019</h2>
      </BoxTop>
      <BoxImage>
        <img src={slaca} width='180px'/>'
      </BoxImage>
      <BoxMenu>
        <Button>
          Apresentação
        </Button>
        <Button>
          Comitês
        </Button>
        <Button>
          Autores
        </Button>
        <Button>
          Eixos temáticos
        </Button>
        <Button
          onClick={toggleClicked}
          style={{ backgroundColor: clicked ? '#FDF1EB' : '#FFFFFF', }}
        >
          Trabalhos
        </Button>
        <Button>
          Contato
        </Button>
      </BoxMenu>
    </Paper>
  );
}
