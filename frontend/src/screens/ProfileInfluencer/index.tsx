import React, { useState } from 'react';

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

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export const ProfileInfluencer = () => {

  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('../../assets/starFull.png')
                    : require('../../assets/starEmpty.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
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

        </DataInfluencer>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});