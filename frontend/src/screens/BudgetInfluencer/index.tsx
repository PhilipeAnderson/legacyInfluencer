import React from 'react';
import { Header } from '../../components/Header';
import { NetSocial } from '../../components/NetSocial';

import {
  Container,
  Content,
  TitlePage
} from './styles';

export const BudgetInfluencer = () => {
  return (
    <>
    <Header title="Orçamento"/>
    <Container>
      <Content>
        <TitlePage>Orçamento</TitlePage>
        <NetSocial title="Selecione as redes sociais"/>
      </Content>
    </Container>
    </>
  )
}