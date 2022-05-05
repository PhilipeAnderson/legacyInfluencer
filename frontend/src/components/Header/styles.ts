import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};

  align-items: center;
  justify-content: space-between;
  flex-direction: row
`;

export const UserData = styled.View`
  width: 50%;
  height: 100%;  
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const UserPic = styled.Image`
  width: 70px;
  height: 70px;
`;

export const UserGreeting  = styled.View`
  max-width: 150px;
  padding: 10px;
`;

export const TextGreeting = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight}
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;