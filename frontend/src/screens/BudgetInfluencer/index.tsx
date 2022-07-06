import React,{ useState } from 'react';

import { StyleSheet } from 'react-native';

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
  ContractValue,
  ContractValueText,
  ContractValueMoney
} from './styles';

export const BudgetInfluencer = () => {

  const [frequencyDay, setFrequencyDay] = useState(true);
  const [frequencyWeek, setFrequencyWeek] = useState(true);
  const [frequencyMonth, setFrequencyMonth] = useState(true);

  const contractFrequencyDay = () => {
    frequencyDay === true ? setFrequencyDay(false) : setFrequencyDay(true)
    if(frequencyDay){
      let back = styles.back
      return back
    }
  }

  const contractFrequencyWeek = () => {
    frequencyWeek === true ? setFrequencyWeek(false) : setFrequencyWeek(true)
    if(frequencyWeek){
      let back = styles.back
      return back
    }
  }

  const contractFrequencyMonth = () => {
    frequencyMonth === true ? setFrequencyMonth(false) : setFrequencyMonth(true)
    if(frequencyMonth){
      let back = styles.back
      return back
    }
  }

  return (
    <>
    <Header title="Orçamento"/>
    <Container>
      <Content>
        <NetSocial title="Selecione as redes sociais"/>
        <FrequencyBudget>
          <FrequencyBudgetText>Frequência</FrequencyBudgetText>
          <FrequencyDayWeekMonth>
            <ButtonFrequency 
              style={frequencyDay === true ? styles.back : ''}
              title="DIA"
              onPress={ contractFrequencyDay }
            />
            <ButtonFrequency  
              style={frequencyWeek === true ? styles.back : ''}
              title="SEMANA"
              onPress={ contractFrequencyWeek }
            />
            <ButtonFrequency 
              style={frequencyMonth === true ? styles.back : ''}
              title="MÊS"
              onPress={ contractFrequencyMonth }
            />
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

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#626262'
  }
})