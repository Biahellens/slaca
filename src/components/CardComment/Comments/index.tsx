//dependencies
import React, { useEffect, useRef, useState } from 'react';

//componentes
import Text from '../../Text';
import {
  BoxComment,
  BoxDetails,
  BoxInfo,
  BoxText,
  BoxTop,
  Container
} from './style';

export default function CommentsAC({name, type, comment}:{
  name: string;
  type: string;
  comment: string
}){

  return (
      <Container>
      <BoxDetails backgroundColor='#E7E7E7'>
        <BoxText>
          <BoxTop>
            <BoxInfo>
              <Text>{name}</Text>
            </BoxInfo>
            <BoxInfo>
              <Text variant='title'>{type}</Text>
            </BoxInfo>
          </BoxTop>
          <BoxComment>
            <Text>{comment}</Text>
          </BoxComment>
        </BoxText>
      </BoxDetails>
      </Container>
  )
}

function Comments({name, comment}:{
  name: string;
  comment: string
}){

  return (
      <Container>
      <BoxDetails>
        <BoxText>
          <BoxTop>
            <BoxInfo>
              <Text>{name}</Text>
            </BoxInfo>
          </BoxTop>
          <BoxComment>
            <Text>{comment}</Text>
          </BoxComment>
        </BoxText>
      </BoxDetails>
      </Container>
  )
}

export { Comments, CommentsAC }
