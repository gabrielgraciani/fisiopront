import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { CreatePatient } from '../pages/CreatePatient';
import { IndexesAndScales } from '../pages/IndexesAndScales';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="CreatePatient" component={CreatePatient} />
      <Screen name="ínicio" component={Home} />
      <Screen name="Escalas e índices" component={IndexesAndScales} />
    </Navigator>
  );
}
