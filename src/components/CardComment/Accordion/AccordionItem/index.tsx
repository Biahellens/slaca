//dependencies
import React, { useEffect, useRef, useState } from 'react';
import { getRefValue } from '../../../../hooks';
import { AccordionData } from '../type';

//componentes
import Text from '../../../Text';
import {
  BoxButtons,
  BoxDecoration,
  BoxDetails,
  BoxInfo,
  BoxImage,
  BoxText,
  BoxTitle,
  Container
} from './style';

//style
import './style.css';

//images
import favorito from '../../../../assets/images/favorito.svg'
import maisInformacoes from '../../../../assets/images/maisInformacoes.svg'

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <Container className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <Container className="accordion-comment-btn" onClick={btnOnClick}>
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
      <div className="accordion-item-container" style={{ height }}>
        <Container ref={contentRef}>
          {data.content}
        </Container>
      </div>
    </Container>
  );
}

export default AccordionItem;
