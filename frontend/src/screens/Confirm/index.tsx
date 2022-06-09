import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Content, Congratulations, ConfirmText, ConfirmPic } from './styles';

export const Confirm = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Congratulations>Parabéns !</Congratulations>
        <ConfirmText>
          O contrato com Nathalia {'\n'}
          foi efetivado com sucesso!  
        </ConfirmText>
        <ConfirmPic source={require('../../assets/checkIn.png')}/>
        <Button title="Voltar a Tela Inicial" />
      </Content>
    </Container>
  );
};