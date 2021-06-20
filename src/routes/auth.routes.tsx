import React from 'react';
import { useTheme } from 'styled-components';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';
import { Splash } from '../pages/Splash';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.shape,
        },
      }}
      headerMode="none"
      initialRouteName="Splash"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
