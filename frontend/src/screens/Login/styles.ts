import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const Header = styled.View`
  height: 34%;
  background: #000;
`;

export const LogoLegacy = styled.Image`
  height: 350px;
  width: 400px;
`;

export const Content = styled.View`
  height: 66%;
  background: #1DCDB8;
  align-items: center;
  `;

export const Title = styled.Text`
  text-align: center;
  font-size: 36px;
  color: #FFF;
  margin-top: 40px;
`;

export const CallToAction = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const LoginIn = styled.View`

`;