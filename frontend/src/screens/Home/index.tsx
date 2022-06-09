import React from 'react';

import { Header } from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';

import { Container, Content } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header title="  "/>
      <Content>
        <HighlightCard />
      </Content>
    </Container>
  );
};