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

export const DataUser = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const ButtonConfirm = styled.View`
  width: 100%;
  margin: 60px;

`;

