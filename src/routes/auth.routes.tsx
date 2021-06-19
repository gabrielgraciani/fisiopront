import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';
import { Splash } from '../pages/Splash';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
