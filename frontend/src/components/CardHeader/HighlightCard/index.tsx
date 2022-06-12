import React from 'react';

import { 
  Container, 
  Content, 
  Image, 
  InfoSquare, 
  SocialNets,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  DetailsInfluencer,
  Occupation,
  Followers,
  NumberFollowers
} from './styles';

interface DetailsProps{
  influencer: string,
  occupation: string,
  numberFollowers: string
}

export const HighlightCard = ({ influencer, occupation, numberFollowers }: DetailsProps) => {
  return (
    <Container>
      <Content>
        <Image source={require('../../../assets/model01.jpg')}/>
        <InfoSquare>
          <SocialNets>
            <Instagram source={require('../../../assets/instagram.png')}/>
            <Facebook source={require('../../../assets/facebook.png')} />
            <LinkedIn source={require('../../../assets/linkedin.png')} />
            <YouTube source={require('../../../assets/youtube.png')}/>
          </SocialNets>
          <DetailsInfluencer>
            { influencer }
            {'\n'}
            <Occupation>
              { occupation }
            </Occupation>
            {'\n'}
            <Followers>
              Seguidores em todas as Redes
            </Followers>
            {'\n'}
            <NumberFollowers>
              Total: { numberFollowers }
            </NumberFollowers>
          </DetailsInfluencer>
        </InfoSquare>
      </Content>
    </Container>
  );
};