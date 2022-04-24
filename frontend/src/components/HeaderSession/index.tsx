import React from 'react';

import { Container, InfoUser, PhotoUser, Greeting, Logout } from './styles';

export const HeaderSession = () => {
  return (
    <Container>
      <InfoUser> 
        <PhotoUser source={require('../../assets/user.png')}/>
        <Greeting>
          Olá, {'\n'}Philipe
        </Greeting>
      </InfoUser>
      <Logout name="power" />
    </Container>
  );
};