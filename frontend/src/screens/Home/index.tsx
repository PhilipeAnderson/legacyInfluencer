import React, { useState, useEffect } from 'react';

import { useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { CardHeader } from '../../components/CardHeader';

import { 
  Container, 
  Content
} from './styles';

type Params = {
  token: string;
}

type Profile = {
  name: string;
  email: string;
  locale: string;
  picture: string;
  given_name: string;
  family_name: string;
}


import { ListInfluencers } from '../../components/ListInfluencers';

export const Home = () => {
  const [ profile, setProfile ] = useState({} as Profile);

  const route = useRoute();
  const { token } = route.params as Params;

 async function loadProfile() {
  const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
  const userInfo = await response.json();
  setProfile(userInfo);
 };

  useEffect(() => {
    loadProfile();
  },[]);

  return (
    <Container>
      <Header title="  "/>
      <Content>
        <CardHeader />
      </Content>
      <ListInfluencers />
    </Container>
  );
};