import React from 'react';
let image = "https://cdn-cosmos.bluesoft.com.br/products/7896004755892";

import {
  Container,
  ContentImage,
  ContentInfo,
  ContentName,
  ContentFollowers,
  ContentFooter,
  ContentSocial,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  ContentButton,
  ContentButtonText
} from './styles';

export const ListCards = () => {
  return(
    <Container>
      <ContentImage source={require('../../../assets/model01.jpg')}/>
      <ContentInfo>
        <ContentName>
          Patrícia Mendonça
        </ContentName>
        <ContentFollowers>
          Total: 1.245.877
        </ContentFollowers>
        <ContentFooter>
          <ContentSocial>
            <Instagram source={require('../../../assets/instagram.png')}/>
            <Facebook source={require('../../../assets/facebook.png')} />
            <LinkedIn source={require('../../../assets/linkedin.png')} />
            <YouTube source={require('../../../assets/youtube.png')}/>
          </ContentSocial>
          <ContentButton>
            <ContentButtonText>Acessar Perfil</ContentButtonText>
          </ContentButton>
        </ContentFooter>
      </ContentInfo>
    </Container>
  )
}