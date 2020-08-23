import React from 'react';
import {
  Container,
  Background,
  ContentContainer,
  Title,
  CardsContainer,
} from './styles';

import InfoCard from '../../components/InfoCard';

export default function AboutSection() {
  return (
    <Container>
      <Background />

      <ContentContainer>
      <Title>
        Stay in Trend With EleShoply
      </Title>
      <CardsContainer>
        <InfoCard
          icon='https://static.live.templately.com/2020/06/bcbacb9d-icon-1.svg'
          title='Latest Styles'
        >
        Our designs follow the latest fashion styles to help 
        you stay updated with new trends.
        </InfoCard>
        <InfoCard
          icon='https://static.live.templately.com/2020/06/f0f8cd3c-icon-2.svg'
          title='Best Prices'
        >
        Enjoy the best prices for high quality clothing
        and accessories.
        </InfoCard>
        <InfoCard
          icon='https://static.live.templately.com/2020/06/2bfc222e-icon-3.svg'
          title='Free Shipping'
        >
       We provide free shipping world wide. You can
       order from anywhere, anytime.
        </InfoCard>
      </CardsContainer>
      </ContentContainer>
    </Container>
  );
}