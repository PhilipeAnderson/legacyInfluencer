import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.colors.backgroundScape};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Logo = styled.Image`
  width: ${RFValue(370)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

export const TextContent = styled.Text`
  text-align: center;
  font-size: ${RFValue(36)}px;
  margin-top: ${RFValue(54)}px;
  color: ${({ theme }) => theme.colors.textLight}
`;

export const TextLogin = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.textLight}

`;