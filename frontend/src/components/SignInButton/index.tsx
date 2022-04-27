import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title, SocialImg } from './styles';

interface SignInButtonProps extends RectButtonProps {
  icon: React.FC<SvgProps>,
  title: string
}


export const SignInButton = ({icon: Svg, title}: SignInButtonProps) => {
  return (
    <Container>
      <SocialImg>
        <Svg />
      </SocialImg>
      <Title>
        { title }
      </Title>
    </Container>
  );
};