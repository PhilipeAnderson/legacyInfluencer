import React from 'react';
import { Button } from '../Button';

import {
  Container
} from './styles';

export const RedirectUserData = () => {
  return(
    <Container>
      <Button 
        title="Mais info sobre você"
        navig="ProfileUserData"
      />
    </Container>
  )
}