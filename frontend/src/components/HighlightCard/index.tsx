import React from 'react';

import { 
  Container, 
  Content, 
  Image, 
  InfoSquare, 
  SocialNets,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube 
} from './styles';

export const HighlightCard = () => {
  return (
    <Container>
      <Content>
        <Image source={require('../../assets/model01.jpg')}/>
        <InfoSquare>
          <SocialNets>
            <Instagram source={require('../../assets/instagram.png')}/>
            <Facebook source={require('../../assets/facebook.png')} />
            <LinkedIn source={require('../../assets/linkedin.png')} />
            <YouTube source={require('../../assets/youtube.png')}/>
          </SocialNets>
        </InfoSquare>
      </Content>
    </Container>
  );
};