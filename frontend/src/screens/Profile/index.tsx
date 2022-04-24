import React from 'react';
import { Container, Header, Title, Content, TextMain } from './styles';
import { HeaderSession } from '../../components/HeaderSession';

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
      </Content>
    </Container>
  );
};