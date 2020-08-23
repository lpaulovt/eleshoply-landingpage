import React from 'react';

import { 
  Container,
  ContentContainer,
  CardInfo,
  CardTitle,
  CardDescription,
  Price,
  PriceLabel,
  Value,
  CardImage,
 } from './styles';

import Button from '../../components/Button/index';

export default function ProductSection() {
  return (
    <Container>
      <ContentContainer>
      <CardInfo>
        <CardTitle>
          Winter wear for ladies
        </CardTitle>
        <CardDescription>
          Ladies, bring out the inner fashionista in you with our beautiful winter collection.
        </CardDescription>
        <Price>
          <PriceLabel>Price</PriceLabel>
          <Value>$177.99</Value>
        </Price>
        <Button>
          Shop Now
        </Button>
      </CardInfo>
      <CardImage 
      src='https://static.live.templately.com/2020/06/26f3e8ee-product-10.jpg'
      />
      </ContentContainer>
    </Container>
  );
}