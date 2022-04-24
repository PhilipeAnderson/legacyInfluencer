import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFPercentage(100)}%;
  height:${RFValue(80)}px;
  margin-bottom: ${RFValue(1)}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const InfoUser = styled.View`
  width: 12%;
  height: ${RFValue(80)}px;
  background-color: green;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const PhotoUser = styled.Image`
  width: 70px;
  height: 70px;
  background-color: red;;
`;

export const Greeting = styled.Text`

`;

export const NameUser = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Logout = styled.Text`
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: 20px;
`;