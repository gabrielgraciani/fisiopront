import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { StackRoutes } from './stack.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(): JSX.Element {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
