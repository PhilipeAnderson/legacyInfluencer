import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80px;
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 5px;;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Text = styled.TextInput`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundDark}
`;