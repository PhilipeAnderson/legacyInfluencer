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
  height: 33%;
`;

export const TitleData = styled.Text`
  font-size: 26px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const EntryData = styled.View`
  width: 100%;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const NameUser = styled.View`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const EmailUser = styled.View`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const WhatsUser = styled.View`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;


export const AboutUser = styled.View`
  width: 100%;
  height: 33%;
  padding: 0 10px;
  margin-top: -40px;
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

