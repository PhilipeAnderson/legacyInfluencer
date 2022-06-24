import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;