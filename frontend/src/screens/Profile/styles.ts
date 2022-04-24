import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { theme } from '../../theme/theme';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

//Header ==========================
export const Header = styled.View`
  height: 20%;
  align-items: center;
  justify-content: flex-end;
  background-color: #1DCDB8;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
`;

export const InfoSession = styled.View`
  height:50%;
  background-color: red;
`;

export const InfoUser = styled.View`

`;

export const PhotoUser = styled.Image`

`;

export const Greeting = styled.Text`

`;

export const NameUser = styled.Text`

`;

export const Logout = styled.Text`

`;









//Content =========================
export const Content = styled.View`
  align-items: center;
  justify-content: center;

`;

export const TextMain = styled.Text`
  margin-top: ${RFPercentage(20)}px;
  text-align: center;
  font-size: ${RFValue(33)}px;
  color: ${({ theme }) => theme.colors.text};
`;

