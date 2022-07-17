import React from 'react';
import * as AuthSession from 'expo-auth-session';
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

  async function handleSignIn() {
    const CLIENT_ID = '1079107334277-nemhjhca87eup937lfjq2u7nno33h5sk.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@philipeacampos/frontend';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);
  }

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
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  )
};