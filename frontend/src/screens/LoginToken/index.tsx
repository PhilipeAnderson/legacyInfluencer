import React from 'react';
import { SignInButtonToken } from '../../components/SignInButtonToken';

//import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Header, 
  Content, 
  Logo, 
  TextContent, 
  TextLogin 
} from './styles';

export const LoginToken = () => {

  // const navigation = useNavigation();

  // function openScreen() {
  //   navigation.navigate('Home');
  // }

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo.png')} />
      </Header>
      <Content>
        <TextContent>
          Para um mercado {'\n'}
          diversificado seu {'\n'}
          influencer {'\n'}
          personalizado
        </TextContent>
        <TextLogin>
          Faça seu Login com {'\n'}
          uma das contas abaixo
        </TextLogin>
        <SignInButtonToken
          title="Logar"
          navig="ProfileInfluencer"
        />
      </Content>
    </Container>
  )
};