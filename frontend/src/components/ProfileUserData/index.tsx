import React from "react";

import { Header } from "../Header";

import {
  Container,
  Content,
  EntryData,
  NameUser,
  NameLabelUser,
  NameInputUser,
  EmailUser,
  EmailLabelUser,
  EmailInputUser,
  WhatsUser,
  WhatsLabelUser,
  WhatsInputUser,
  IconTrash,
  IconEdit,


} from './styles';

export const ProfileUserData = () => {
  return (
    <Container>
      <Header title='Dados Do Usuário' />
      <Content>
        <EntryData>
          <NameUser>
            <NameLabelUser>Nome:</NameLabelUser>
            <NameInputUser />
            <IconTrash name="edit" />
            <IconEdit name="trash-2" />
          </NameUser>
          <EmailUser>
            <EmailLabelUser>E-mail:</EmailLabelUser>
            <EmailInputUser />
            <IconTrash name="edit" />
            <IconEdit name="trash-2" />
          </EmailUser>
          <WhatsUser>
            <WhatsLabelUser>Whats:</WhatsLabelUser>
            <WhatsInputUser />
            <IconTrash name="edit" />
            <IconEdit name="trash-2" />
          </WhatsUser>
        </EntryData>
      </Content>
    </Container>
  )
};