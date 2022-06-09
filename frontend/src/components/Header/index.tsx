import React from 'react';

import { 
  Container,
  Content,
  UserData,
  UserPic,
  UserGreeting,
  TextGreeting,
  Icon,
  TitlePageHeader
} from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <UserData>
          <UserPic source={require('../../assets/user.png')} />
          <UserGreeting>
            <TextGreeting>Olá , </TextGreeting>
            <TextGreeting>Usuário</TextGreeting>
          </UserGreeting>
        </UserData>
        <Icon source={require('../../assets/power.png')}/>  
      </Content>
      <TitlePageHeader>Confirmação</TitlePageHeader>
    </Container>
  );
};