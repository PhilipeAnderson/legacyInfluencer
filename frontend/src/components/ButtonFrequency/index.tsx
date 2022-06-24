import React from 'react';

import { Container, Title } from './styles';

interface TitleProps{
  title: string;
}

export const ButtonFrequency = ({ title } : TitleProps) => {
  return (
    <Container>
      <Title>
        { title }
      </Title>
    </Container>
  );
};