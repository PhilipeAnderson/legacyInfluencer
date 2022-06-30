import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, SocialImg } from './styles';

interface SignInButtonTokenTextProps{
  title: string;
  navig: string;
}

export const SignInButtonToken = ({ title, navig }: SignInButtonTokenTextProps ) => {
  
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate( navig );
  }

  return ( 
    <Container>
      <Title onPress={openScreen}>
        { title }
      </Title>
    </Container>
  )
};