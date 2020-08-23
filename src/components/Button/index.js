import React from 'react';

import { Container } from './styles';

export default function Button(props){
  return (
    <Container>
      {props.children}
    </Container>
  );
}