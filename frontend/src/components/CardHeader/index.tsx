import React from 'react';

import {
  Container
} from './styles';

import { HighlightCard } from './HighlightCard';

export const CardHeader = () => {
  return(
    <Container>
      <HighlightCard 
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
      <HighlightCard 
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
      <HighlightCard 
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
    </Container>
  )
}