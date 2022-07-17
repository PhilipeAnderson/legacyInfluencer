import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/auth';

import { 
  Container,
  Content,
  UserData,
  UserPic,
  UserGreeting,
  TextGreeting,
  UserProfile,
  Icon,
  TitlePageHeader
} from './styles';

interface titleProps {
  title: string;
}

type DataUser = {
  nameTeste: any;
}

export const Header = ({ title }: titleProps) => {

  const { nameTeste }: DataUser = useContext(AuthContext);

  const navigation = useNavigation();

  const openNextScreen = () => {
    navigation.navigate('ProfileUser');
  };

  return (
    <Container>
      <Content>
        <UserData>
          <UserPic source={require('../../assets/user.png')} />
          <UserGreeting>
            <TextGreeting>Olá , </TextGreeting>
            <TextGreeting>{ nameTeste }</TextGreeting>
          </UserGreeting>
        </UserData>
        <UserProfile onPress={ openNextScreen }>
          <Icon source={require('../../assets/power.png')} />  
        </UserProfile>
      </Content>
      <TitlePageHeader>{ title }</TitlePageHeader>
    </Container>
  );
};