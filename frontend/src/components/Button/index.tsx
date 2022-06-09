import React from 'react';

import { Container, TitleButton } from './styles';

interface titleProps {
  title: string
}

export const Button = ({ title }: titleProps) => {
  return(
    <Container>
      <TitleButton>
        { title }
      </TitleButton>
    </Container>
  )
}