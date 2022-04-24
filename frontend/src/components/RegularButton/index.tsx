import React from 'react';

import { Container, Title } from './styles';

interface RegularButtonProps {
  name: string
}

export const RegularButton = ({ name }: RegularButtonProps) => {
  return (
    <Container>
      <Title> { name } </Title>
    </Container>
  );
};