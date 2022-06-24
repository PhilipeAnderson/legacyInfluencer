import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { RectButtonProps } from 'react-native-gesture-handler';

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
  TopDataInfluencerStars,
  RatingBarStyle,
  StarImageStyle,
  CallInfluencer,
  RequestContact,
  RequestContactAsk,
  RequestContactButton,
  RequestContactButtonText,
  RequestContactText,
  AboutInfluencer,
  AboutTitle,
  AboutText


} from './styles';

import {
  TouchableOpacity,
} from 'react-native';

export const ProfileInfluencer = () => {

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <RatingBarStyle>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <StarImageStyle
                source={
                  item <= defaultRating
                    ? require('../../assets/starFull.png')
                    : require('../../assets/starEmpty.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </RatingBarStyle>
    );
  };

  return (
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
              <TopDataInfluencerStars>
                <RatingBar />
              </TopDataInfluencerStars>
            </TopDataInfluencerStarring>
          </TopDataInfluencer>
          <CallInfluencer>
            <RequestContact>
              <RequestContactAsk>Solicitar Contato?</RequestContactAsk> 
              <RequestContactButton>
                <RequestContactButtonText>SIM</RequestContactButtonText>
              </RequestContactButton>
            </RequestContact>
            <RequestContactText>
              Nathalia receberá um aviso em seu aplicativo
            </RequestContactText>
          </CallInfluencer>
          <AboutInfluencer>
            <AboutTitle>Sobre:</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </AboutText>
          </AboutInfluencer>
        </DataInfluencer>
      </Content>
    </Container>
  )
}