import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: ${RFValue(120)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  font-size: ${RFValue(16)}px;
`;