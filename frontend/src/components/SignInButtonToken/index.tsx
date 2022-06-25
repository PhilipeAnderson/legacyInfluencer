import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title, SocialImg } from './styles';

interface SignButtonPTextProps{
  title: string
}

export const SignInButtonToken = ({ title }: SignButtonPTextProps  ) => {

  return (
    <Container>
      <Title>
        { title }
      </Title>
    </Container>
  );
};