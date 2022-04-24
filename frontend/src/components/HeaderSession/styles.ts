import styled from 'styled-components/native'
;
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

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
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const PhotoUser = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;

export const Greeting = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Logout = styled(Feather)`
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: 33px;
`;