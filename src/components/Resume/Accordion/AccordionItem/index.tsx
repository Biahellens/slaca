//dependencies
import React, { useEffect, useRef, useState } from 'react';
import { getRefValue } from '../../../../hooks';
import { AccordionData } from '../type';

//componentes
import Text from '../../../Text';
import { Container } from './style';

//style
import './style.css';

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
      <Container justifyContent="space-between" className="accordion-btn" onClick={btnOnClick}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis
          mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros
          sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet
          enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem
          vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis
          et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
          scelerisque, ac gravida eros vestibulum.
        </Text>
        <a
          style={{ marginLeft: '2px' }}
        >
          <Text variant='span'>ver mais</Text>
        </a>
      </Container>
      <div className="accordion-item-container" style={{ height }}>
        <Container ref={contentRef} marginTop="20px">
          {data.content}
        </Container>
      </div>
    </Container>
  );
}

export default AccordionItem;
