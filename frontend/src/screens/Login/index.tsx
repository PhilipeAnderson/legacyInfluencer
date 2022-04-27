import React from 'react';

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
      </Content>
    </Container>
  );
};