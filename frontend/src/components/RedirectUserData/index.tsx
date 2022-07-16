import React from 'react';
import { Button } from '../Button';

import {
  Container
} from './styles';

export const RedirectUserData = () => {
  return(
    <Container>
      <Button 
        title="Preencha Seus Dados"
        navig="ProfileUserData"
      />
    </Container>
  )
}