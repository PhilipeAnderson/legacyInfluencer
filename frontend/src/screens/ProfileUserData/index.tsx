import React from "react";

import { Header } from "../../components/Header";
import { ProfileUserDataInputs } from "../../components/ProfileUserDataInputs";

import {
  Container,
  Content
} from './styles';

export const ProfileUserData = () => {
  return(
    <Container>
      <Header title="Dados do Usuário"/>
      <Content>
        <ProfileUserDataInputs />
      </Content>
    </Container>
  )
};