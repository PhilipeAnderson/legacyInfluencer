import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Content, ContractTitle, ContractText } from './styles';

export const Contract = () => {
  return (
    <Container>
      <Header title="Contrato com Nathalia" />
      <Content>
        <ContractTitle>Contrato</ContractTitle>
        <ContractText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          {'\n'}{'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ContractText>
        
        <Button title="Aceitar Contrato" />
      </Content>
    </Container>
  );
};