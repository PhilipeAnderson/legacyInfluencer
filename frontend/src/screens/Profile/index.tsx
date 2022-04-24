import React from 'react';

import { Container, Header, InfoSession, InfoUser,PhotoUser,Greeting,NameUser,Logout,Title, Content, TextMain } from './styles';

export const Profile = () => {
  return (
    <Container>
      <Header>
        <InfoSession>
          <InfoUser>
            <PhotoUser>

            </PhotoUser>
            <Greeting>

            </Greeting>
            <NameUser>

            </NameUser>
          </InfoUser>
          <Logout>

          </Logout>
        </InfoSession>

        <Title>
          Seu Perfil
        </Title>
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