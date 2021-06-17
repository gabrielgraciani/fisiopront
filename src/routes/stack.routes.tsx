import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { CreatePatient } from '../pages/CreatePatient';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CreatePatient" component={CreatePatient} />
    </Navigator>
  );
}
