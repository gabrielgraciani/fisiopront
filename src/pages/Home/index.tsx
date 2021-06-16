import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Text } from './styles';

export function Home(): JSX.Element {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Text>Fisio home</Text>
    </Container>
  );
}
