import React from "react";

import {
  Container,
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

export const ProfileUserDataInputs = () => {
  return (
    <Container>
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
    </Container>
  )
};