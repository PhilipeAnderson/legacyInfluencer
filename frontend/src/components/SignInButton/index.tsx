import React from 'react';

import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title, SocialImg } from './styles';
interface SignInButtonProps extends RectButtonProps {
  svg: React.FC<SvgProps>,
  title: string,
  navig: string
}

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
}

export const SignInButton = ({ title, navig, svg: Svg }: SignInButtonProps,) => {
  
  const navigation = useNavigation();

  async function handleSignIn() {
    const CLIENT_ID = '1079107334277-nemhjhca87eup937lfjq2u7nno33h5sk.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@philipeacampos/frontend';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = await AuthSession
      .startAsync({ authUrl }) as AuthResponse;
    
      if(type === 'success'){
        navigation.navigate(navig, { token: params.access_token });
      }

  }
  
  // Page for login with Google
  return (
    <Container>
      <SocialImg>
        <Svg />
      </SocialImg>
      <Title onPress={ handleSignIn }>
        { title }
      </Title>
    </Container>
  );
};