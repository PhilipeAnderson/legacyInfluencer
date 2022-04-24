import React from 'react';
import { Container, Header, Title, Content, TextMain } from './styles';
import { HeaderSession } from '../../components/HeaderSession';

import { RegularButton } from '../../components/RegularButton';

export const Profile = () => {
  return (
    <Container>
      <Header>
        <HeaderSession />
        <Title>Seu Perfil</Title>
      </Header>
      <Content>
        <TextMain>
          Escolha umas das duas{'\n'}
          opções para iniciar{'\n'}
          sua jornada pelo{'\n'}
          Legacy Influencer
        </TextMain>

        <RegularButton name="Influencer" />
        <RegularButton name="Influencer" />
      </Content>
    </Container>
  );
};