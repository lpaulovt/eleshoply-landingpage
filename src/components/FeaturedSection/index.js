import React from 'react';

import { 
  Container,
  SideBar, 
  ContainerContent, 
  Featured, 
  FeaturedContent, 
  FeaturedImage,
  Title,
  Description,
  Price,
  PriceLabel,
  Value,
  SocialNetwork,
} from './styles';

import Facebook from '../../assets/facebookIcon.svg';
import Instagram from '../../assets/instagramIcon.svg';
import Linkedin from '../../assets/linkedinIcon.svg';
import Twitter from '../../assets/twitterIcon.svg';

import Button from '../Button/index';

export default function FeaturedSection() {
  return (
    <Container>
      <SideBar>
        <SocialNetwork 
          src={Instagram}
        />
        <SocialNetwork 
          src={Linkedin}
        />
        <SocialNetwork 
          src={Twitter}
        />
        <SocialNetwork 
          src={Facebook}
        />
      </SideBar>
      <ContainerContent>
        <Featured>
          <FeaturedContent>
            <Title>
              Winter 21'
            </Title>
            <Description>
              Winter layer season is here. Check out our trendy new winter 
              collection to stay warm in style.
            </Description>
            <Price>
              <PriceLabel>Price</PriceLabel>
              <Value> $117.99</Value>
            </Price>
            <Button>
              Shop Now
            </Button>
          </FeaturedContent>
          <FeaturedImage 
          src='https://static.live.templately.com/2020/06/de17b27a-image-1.png'
          />
        </Featured>
      </ContainerContent>
    </Container>
  );
}