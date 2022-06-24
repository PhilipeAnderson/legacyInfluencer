import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: space-around;
`;

export const TitlePage = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.backgroundLight };
`;

export const FrequencyBudget = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const FrequencyBudgetText = styled.Text`
margin-left: -235px;
font-size: 18px;
color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const FrequencyDayWeekMonth = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;


