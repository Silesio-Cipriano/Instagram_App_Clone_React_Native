import React from 'react';
import { Feed } from './src/screens/Feed';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script'

export default function App() {
  const [fontsLoading] = useFonts(
    {
      Roboto_700Bold,
      Roboto_400Regular,
      Roboto_500Medium,
      DancingScript_400Regular,
      DancingScript_500Medium,
      DancingScript_700Bold
    }
  );

  if (!fontsLoading) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        hidden
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}

      />
      <Feed />
    </ThemeProvider>
  );
}

