import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 270px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault };

  align-items: center;
  justify-content: center;

`;