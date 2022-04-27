import React from 'react';

import { SignInButton } from '../../components/SignInButton';
import { Container, Header, Content, Logo, TextContent, TextLogin } from './styles';

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
          title="Login com o Google"
          
        />
        <SignInButton 
          title="Login com a Apple"

        />
      </Content>
    </Container>
  );
};