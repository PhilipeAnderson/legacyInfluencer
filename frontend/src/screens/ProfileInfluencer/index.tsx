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
              {/* <TopDataInfluencerStars> * * * * * </TopDataInfluencerStars> */}
              <SafeAreaView style={styles.containerStar}>
                <View style={styles.containerStar}>
                  <Text style={styles.textStyle}>
                    Classifique a sua experiência
                  </Text>
                  <RatingBar />
                  <Text style={styles.textStyle}>
                    {defaultRating} / {Math.max.apply(null, maxRating)}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={() => alert(defaultRating)}>
                    <Text style={styles.buttonTextStyle}>
                      Obter Valor Selecionado
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </TopDataInfluencerStarring>
          </TopDataInfluencer>

        </DataInfluencer>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  containerStar: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
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