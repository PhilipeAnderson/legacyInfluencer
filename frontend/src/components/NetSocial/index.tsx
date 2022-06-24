import React from 'react';
import {
  Container,
  Images,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  Text
} from './styles';


export const NetSocial = () => {
  return(
    <Container>
      <Text>Acesse as redes da: Nathalia</Text>
      <Images>
      <Instagram source={require('../../assets/instagram.png')}/>
            <Facebook source={require('../../assets/facebook.png')} />
            <LinkedIn source={require('../../assets/linkedin.png')} />
            <YouTube source={require('../../assets/youtube.png')}/>
      </Images>
    </Container>
  )
}