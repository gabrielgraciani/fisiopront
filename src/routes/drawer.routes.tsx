import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { IndexesAndScales } from '../pages/IndexesAndScales';
import { AllPatients } from '../pages/AllPatients'
import { StackRoutes } from './stack.routes';

const Drawer = createDrawerNavigator();

export function DrawerRoutes(): JSX.Element {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ínicio" component={StackRoutes} />
      <Drawer.Screen name="Escalas e índices" component={IndexesAndScales} />
      <Drawer.Screen name='Pacientes' component={AllPatients} />
    </Drawer.Navigator>
  );
}
