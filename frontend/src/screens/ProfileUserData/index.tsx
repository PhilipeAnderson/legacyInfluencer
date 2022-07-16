import React from "react";

import { Header } from "../../components/Header";
import { ProfileUserDataInputs } from "../../components/ProfileUserDataInputs";
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  DataUser,
  ButtonConfirm
} from './styles';

export const ProfileUserData = () => {
  return (
    <Container>
      <Header title="Dados do Usuário" />
      <Content>
        <DataUser>
          <ProfileUserDataInputs />
        </DataUser>
        <ButtonConfirm>
          <Button
            title="Confirmar"
            navig="ProfileUser"
          />
        </ButtonConfirm>
      </Content>
    </Container>
  )
};