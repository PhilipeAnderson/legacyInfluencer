import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundScape};
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: black
`;