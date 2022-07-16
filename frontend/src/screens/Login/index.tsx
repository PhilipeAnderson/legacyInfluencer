import React from 'react';
import { SignInButton } from '../../components/SignInButton';

import GoogleSvg from '../../assets/icon-google.svg';

import { 
  Container, 
  Header, 
  Content, 
  Logo, 
  TextContent, 
  TextLogin 
} from './styles';

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
          uma das suas contas
        </TextLogin>
        <SignInButton
          title="Entrar com o Google"
          navig="Home"
          svg={GoogleSvg}
        />
      </Content>
    </Container>
  )
};