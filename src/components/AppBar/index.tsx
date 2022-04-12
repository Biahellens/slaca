import * as React from 'react';

import {
  Avatar,
  Tooltip,
} from '@mui/material';

//import SelectLanguage from '../SelectLanguage'

import {
  AppBar,
  BoxProfile,
  Container,
  SelectLanguage,
  ToolBox,
} from './style';

import { Text } from '../Text'

//images
import avatar from '../../assets/images/avatar.svg';

export default function ResponsiveAppBar() {
  return (
    <AppBar>
      <ToolBox>
        <Container width={[1 / 2]} padding="1vh" justifyContent="flex-start">
          <Text>
            Anais do Simpósio Latino Americano de Ciências de Alimentos
          </Text>
          <br />
          <Text variant={'secondary'}>
            Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
          </Text>
          <br />
          <Text>ISSN: 1234-5678</Text>
        </Container>
        <Container width={[1/3]}>
          <BoxProfile>
            <Container>
              <SelectLanguage>
                <option value="1">PT, BR</option>
              </SelectLanguage>
            </Container>
            <Container paddingLeft='1vh' paddingRight='1vh'>
                <Text style={{ fontSize: '12px' }}>Bem vindo!</Text>
                <br />
                <Text style={{ fontSize: '12px' }}>alguem12@galoascience.com</Text>
              </Container>
              <Tooltip title="Open settings">
                <Avatar alt="Avatar" src={avatar}/>
              </Tooltip>
          </BoxProfile>
        </Container>
      </ToolBox>
    </AppBar>
  );
}
