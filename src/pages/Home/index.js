import React from 'react';

import Header from './../../components/Header/index';
import FeaturedSection from './../../components/FeaturedSection/index';
import AboutSection from './../../components/AboutSection/index';
import CollectionsSection from './../../components/CollectionsSection/index';
import ProductSection from './../../components/ProductSection/index';

import { Container } from './styles';

export default function Home() {
  return (
    <Container >
      <Header />
      <FeaturedSection />
      <AboutSection />
      <CollectionsSection />
      <ProductSection />
    </ Container>
  )
}