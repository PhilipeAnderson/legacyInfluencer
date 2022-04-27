import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(60)}px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.colors.backgroundLight};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 18px;
`;

