import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { RedirectUserData } from '../../components/RedirectUserData';

import {
  Container,
  Content,
  ViewData,
  TitleData,
  RedirectData,
  AboutUser,
  AboutTitle,
  AboutText,
  ViewButtons
} from './styles';

export const ProfileUser = () => {
  return(
    <Container>
      <Header title="Perfil Do Usuário" />
      <Content>
        <ViewData>
          <TitleData>
            Dados para ser contactado:
          </TitleData>
          <RedirectData>
            <RedirectUserData />
          </RedirectData>  
        </ViewData>
        <AboutUser>
          <AboutTitle>Sobre:</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </AboutText>
        </AboutUser>
        <ViewButtons>
          <Button 
            title="Voltar para o App"
            navig="Home"
          />
          <Button
            title="Sair do App"
            navig="Login"
          />
        </ViewButtons>
      </Content>
    </Container>
  )
};