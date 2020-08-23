import React from 'react';

import { 
  Container,
  CardInfo,
  CardName,
  CardTitle,
  CardDescription,
  CardImage,
  CardButton,
 } from './styles';

export default function CollectionsCard({ name, title, description, button, image }) {
  return (
    <Container>
      <CardInfo>
        <CardName>
          {name}
        </CardName>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <CardButton>
          {button}
        </CardButton>
      </CardInfo>
      <CardImage 
      src={image}
      />
    </Container>
  );
}