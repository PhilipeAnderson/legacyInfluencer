import React from 'react';

import { Header } from '../../components/Header';
import { NetSocial } from '../../components/NetSocial';
import { ButtonFrequency } from '../../components/ButtonFrequency';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  TitlePage,
  FrequencyBudget,
  FrequencyBudgetText,
  FrequencyDayWeekMonth,
  ChoiceQuantity,
  ChoiceQuantityText,
  ChoiceStoriesPostEvent,
  ChoiceStories,
  ChoiceStoriesText,
  ChoicePost,
  ChoicePostText,
  ChoiceEvent,
  ChoiceEventText
} from './styles';

export const BudgetInfluencer = () => {

  return (
    <>
    <Header title="Orçamento"/>
    <Container>
      <Content>
        <TitlePage>Orçamento</TitlePage>
        <NetSocial title="Selecione as redes sociais"/>
        <FrequencyBudget>
          <FrequencyBudgetText>Frequência</FrequencyBudgetText>
          <FrequencyDayWeekMonth>
            <ButtonFrequency title="DIA"/>
            <ButtonFrequency title="SEMANA"/>
            <ButtonFrequency title="MÊS"/>
          </FrequencyDayWeekMonth>
        </FrequencyBudget>
        <ChoiceQuantity>
          <ChoiceQuantityText>Escolha a Quantidade</ChoiceQuantityText>
          <ChoiceStoriesPostEvent>
            <ChoiceStories>
              <ChoiceStoriesText>Número de Stories</ChoiceStoriesText>
              <Input title="04"/>
            </ChoiceStories>
            <ChoicePost>
              <ChoicePostText>Número de Post</ChoicePostText>
              <Input title="06"/>
            </ChoicePost>
            <ChoiceEvent>
              <ChoiceEventText>Número de Post</ChoiceEventText>
              <Input title="01"/>
            </ChoiceEvent>
          </ChoiceStoriesPostEvent>
        </ChoiceQuantity>
        <Button title="Contratar"/>
      </Content>
    </Container>
    </>
  )
}