import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
