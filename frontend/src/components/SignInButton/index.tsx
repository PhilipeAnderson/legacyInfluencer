import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface SignInButtonProps extends RectButtonProps {
  title: string;
}


export const SignInButton = ({title}: SignInButtonProps) => {
  return (
    <Container>
      <Title>{ title }</Title>
    </Container>
  );
};