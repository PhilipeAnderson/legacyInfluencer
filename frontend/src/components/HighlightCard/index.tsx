import React from 'react';

import { Container, Content, Image, InfoSquare } from './styles';

export const HighlightCard = () => {
  return (
    <Container>
      <Content>
        <Image source={require('../../assets/model01.jpg')}/>
        <InfoSquare />
      </Content>
        

    </Container>
  );
};