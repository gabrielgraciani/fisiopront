import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { useAuth } from './src/hooks/auth';
import { AppProvider } from './src/hooks';

import theme from './src/styles/theme';

import { Routes } from './src/routes';

export default function App(): ReactElement {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
}
