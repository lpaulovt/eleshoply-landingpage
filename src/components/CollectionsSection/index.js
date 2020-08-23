import React from 'react';

import { Container, ContentContainer } from './styles';
import CollectionsCard from '../../components/CollectionCard/index';

export default function CollectionsSection() {
  return (
    <Container>
      <ContentContainer>
        <CollectionsCard 
        name='New Arrivals'
        title='The black beauty'
        description='Look sophisticated in our new collection of all-black clothing ensemble.'
        button='Browse Collection'
        image='https://static.live.templately.com/2020/06/9ceb18f7-image-b.png'
        />
        <CollectionsCard 
        name='Winter collection'
        title="Winter's best"
        description='Check out our best winter collection to stay warm in style this season.'
        button='Discover More'
        image='https://static.live.templately.com/2020/06/2f67452f-image-a.png'
        />
      </ContentContainer>
    </Container>
  );
}