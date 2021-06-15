import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
