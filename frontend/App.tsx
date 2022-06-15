import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';


import { LoginToken } from './src/screens/LoginToken';
import { Home } from './src/screens/Home';
import { Confirm } from './src/screens/Confirm';
import { Payment } from './src/screens/Payment';
import { Contract } from './src/screens/Contract';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <LoginToken />
    </ThemeProvider>
  );
}