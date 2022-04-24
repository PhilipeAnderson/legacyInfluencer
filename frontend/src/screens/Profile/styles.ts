import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

//Header ==========================
export const Header = styled.View`
  height: ${RFPercentage(3)}%;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textBlack};
  font-size: ${RFValue(20)}px;
`;

//Content =========================
export const Content = styled.View`
  align-items: center;
  justify-content: center;

`;

export const TextMain = styled.Text`
  margin-top: ${RFPercentage(3)}%;
  text-align: center;
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.textWhite};
`;

