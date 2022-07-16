import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const ViewData = styled.View`
  width: 100%;
  height: 36%;
  padding: 0 10px;
`;

export const TitleData = styled.Text`
  font-size: 26px;
  margin-top: 10px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const RedirectData = styled.View`
  margin: 50px;
`;

export const AboutUser = styled.View`
  width: 100%;
  height: 30%;
  padding: 0 10px;
  margin-top: -5px;
`;

export const AboutTitle = styled.Text`
  font-size: 26px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const AboutText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const ViewButtons = styled.View`
  width: 100%;
  height: 33%;
  align-items: center;
  justify-content: space-evenly;
`;
