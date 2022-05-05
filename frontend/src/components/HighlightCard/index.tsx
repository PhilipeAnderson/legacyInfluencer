import React from 'react';

import { Container, Content, Image, InfoSquare, QRCode } from './styles';

export const HighlightCard = () => {
  return (
    <Container>
      <Content>
        <Image source={require('../../assets/model01.jpg')}/>
        <InfoSquare>
          <QRCode source={require('../../assets/qrcode.png')}/>
        </InfoSquare>
      </Content>
        

    </Container>
  );
};