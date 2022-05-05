import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';


import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Home />
    </ThemeProvider>
  );
}






