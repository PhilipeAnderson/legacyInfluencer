import React from 'react';
import { SignInButtonToken } from '../../components/SignInButtonToken';

import { 
  Container, 
  Header, 
  Content, 
  Logo,
  TextLogin 
} from './styles';

export const LoginToken = () => {

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo.png')} />
      </Header>
      <Content>
        <TextLogin>
          Faça seu Login
        </TextLogin>
        <SignInButtonToken
          title="Entrar"
          navig="Home"
        />
        <SignInButtonToken
          title="Entrar com o Google"
          navig="Home"
        />
      </Content>
    </Container>
  )
};