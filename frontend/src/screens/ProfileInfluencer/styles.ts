import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const DataInfluencer = styled.View`
  width: 100%;
  height: 125px;
  margin-top: 50px;
`;

export const TopDataInfluencer = styled.View`
  width: 100%;
  height: 50px;
  padding: 14px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImageInfluencer = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 100px;
`;

export const TopDataInfluencerStarring = styled.View`
  width: 225px;
  height: 30px;
  margin-top: -100px;
  align-items: center;
`;

export const TopDataInfluencerName = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const TopDataInfluencerCity = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const TopDataInfluencerSegment = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const TopDataInfluencerStars = styled.View`
  width: 100%;
  margin-top: -25px;
`;