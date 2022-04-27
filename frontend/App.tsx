import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Login />
    </ThemeProvider>
  );
}