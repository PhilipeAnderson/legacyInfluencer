import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Profile } from './src/screens/Profile';

import theme from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Profile />
    </ThemeProvider>
  );
}