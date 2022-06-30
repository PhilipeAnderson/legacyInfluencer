import React, { ReactNode } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, SocialImg } from './styles';

interface SignButtonPTextProps{
  title: string
  page: string
}

export const SignInButtonToken = ({ title, page }: SignButtonPTextProps  ) => {
  
  function openScreen() {
    const navigation = useNavigation();
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Title onPress={openScreen}>
        { title }
      </Title>
    </Container>
  );
};