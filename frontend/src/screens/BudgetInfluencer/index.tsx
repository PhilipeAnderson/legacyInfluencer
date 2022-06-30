import React from 'react';

import { Header } from '../../components/Header';
import { NetSocial } from '../../components/NetSocial';
import { ButtonFrequency } from '../../components/ButtonFrequency';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
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
  ChoiceEventText,
  ContractValue,
  ContractValueText,
  ContractValueMoney
} from './styles';

export const BudgetInfluencer = () => {

  return (
    <>
    <Header title="Orçamento"/>
    <Container>
      <Content>
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
              <ChoiceStoriesText>Número de Story</ChoiceStoriesText>
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
        <ContractValue>
          <ContractValueText>Valor:</ContractValueText>
          <ContractValueMoney>R$: 15.000,00</ContractValueMoney>
        </ContractValue>
        <Button 
          title="Contratar"
          navig="Contract"  
        />
      </Content>
    </Container>
    </>
  )
}