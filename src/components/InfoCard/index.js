import React from 'react'; 

import {
  Container,
  Icon,
  Title,
  Description,
  ButtonReadMore,
} from './styles';

export default function InfoCard( { icon, title, children } ) {
  return (
    <Container>
      <Icon
      src={icon}
      />
      <Title>
        {title}
      </Title>
      <Description>
        {children}
      </Description>
      <ButtonReadMore>
        Read More
      </ButtonReadMore>
    </Container>
  );
}