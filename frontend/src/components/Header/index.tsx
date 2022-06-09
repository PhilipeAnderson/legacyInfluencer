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

interface titleProps {
  title: string
}

export const Header = ({ title }: titleProps) => {
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
      <TitlePageHeader>{ title }</TitlePageHeader>
    </Container>
  );
};