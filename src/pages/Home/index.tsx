import React from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Container, Text } from './styles';

export function Home(): JSX.Element {
  const { user } = useAuth();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Text>Olá {user.name}</Text>
    </Container>
  );
}
