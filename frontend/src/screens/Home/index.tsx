import React from 'react';

import { Header } from '../../components/Header';

import { Container, Content} from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};