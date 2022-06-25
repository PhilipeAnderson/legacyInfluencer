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
  color: ${({ theme }) => theme.colors.backgroundLight};
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
  justify-content: space-evenly;
  flex-direction: row;
`;

export const ChoiceQuantity = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ChoiceQuantityText = styled.Text`
  margin-left: -150px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ChoiceStoriesPostEvent = styled.View`
  align-items: center;
  justify-content: space-evenly;

`;

export const ChoiceStories = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ChoiceStoriesText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ChoicePost = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ChoicePostText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight}
`;

export const ChoiceEvent = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ChoiceEventText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight}
`;


