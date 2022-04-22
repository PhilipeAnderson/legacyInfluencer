import React from 'react';
import { Login } from './src/screens/Login';

import { 
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from 'expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { theme } from './src/theme/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={ theme } >
      <Login />
    </ThemeProvider>
  );
}