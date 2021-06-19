import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { CreatePatient } from '../pages/CreatePatient';
import { IndexesAndScales } from '../pages/IndexesAndScales';
import { Patient } from '../pages/Patient';
import { Splash } from '../pages/Splash';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="CreatePatient" component={CreatePatient} />
      <Screen name="Escalas e índices" component={IndexesAndScales} />
      <Screen name="Paciente" component={Patient} />
    </Navigator>
  );
}
