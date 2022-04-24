import React from 'react';

import { Container, InfoUser, PhotoUser, Greeting, NameUser, Logout } from './styles';

export const HeaderSession = () => {
  return (
    <Container>
      <InfoUser> 
        <PhotoUser>

        </PhotoUser>
        <Greeting>
          Olá, {'\n'}Philipe
        </Greeting>
      </InfoUser>
      <Logout>
        Logout
      </Logout>
    </Container>
  );
};