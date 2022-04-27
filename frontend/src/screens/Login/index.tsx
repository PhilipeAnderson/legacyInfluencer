import React from 'react';

import { SignInButton } from '../../components/SignInButton';
import { Container, Header, Content, Logo, TextContent, TextLogin } from './styles';

import GoogleImg from '../../assets/icon-google.svg';
import AppleImg from '../../assets/icon-apple.svg';

export const Login = () => {
  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo.png')} />
      </Header>
      <Content>
        <TextContent>
          Para um mercado {'\n'}
          diversificado seu {'\n'}
          influencer {'\n'}
          personalizado
        </TextContent>
        <TextLogin>
          Faça seu Login com {'\n'}
          uma das contas abaixo
        </TextLogin>
        <SignInButton 
          icon={ GoogleImg }
          title="Entrar com o Google"
        />
        <SignInButton 
          icon={ AppleImg }
          title="Entrar com a Apple"
        />
      </Content>
    </Container>
  );
};

