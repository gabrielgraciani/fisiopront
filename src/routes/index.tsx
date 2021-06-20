import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import AppRoutes from './app.routes';

export function Routes(): JSX.Element {
  const { user, userStorageLoading } = useAuth();
  const theme = useTheme();

  if (userStorageLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.main,
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.shape} />
      </View>
    );
  }

  return user.id ? <AppRoutes /> : <AuthRoutes />;
}
