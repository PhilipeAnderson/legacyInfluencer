import React from 'react';

import { Header } from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';

import { Container, Content} from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <HighlightCard />
      </Content>
    </Container>
  );
};