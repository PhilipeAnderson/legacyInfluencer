import React from 'react';

import { Header } from '../../components/Header';

import {
  Container,
  Content,
  DataInfluencer,
  TopDataInfluencer,
  ImageInfluencer,
  TopDataInfluencerStarring,
  TopDataInfluencerName,
  TopDataInfluencerCity,
  TopDataInfluencerSegment,
  TopDataInfluencerStars
} from './styles';

export const ProfileInfluencer = () => {
  return(
    <Container>
      <Header title="Perfil Influencer" />
      <Content>
        <DataInfluencer>
          <TopDataInfluencer>
            <ImageInfluencer source={require('../../assets/model01.jpg')} />
            <TopDataInfluencerStarring>
              <TopDataInfluencerName>Nathalia Amaral</TopDataInfluencerName>
              <TopDataInfluencerCity>Cidade: Rio De Janeiro</TopDataInfluencerCity>
              <TopDataInfluencerSegment>Segmento: Alimentação</TopDataInfluencerSegment>
              <TopDataInfluencerStars> * * * * * </TopDataInfluencerStars>
            </TopDataInfluencerStarring>
          </TopDataInfluencer>
          
        </DataInfluencer>
      </Content>
    </Container>
  )
}