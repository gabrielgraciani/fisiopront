import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
