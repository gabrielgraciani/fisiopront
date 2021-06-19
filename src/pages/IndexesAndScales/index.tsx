import React from 'react';

import { Header } from '../../components/Header';
import { Scales } from '../../components/Scales';

import { Container } from './styles';

export function IndexesAndScales(): JSX.Element {
  return (
    <Container>
      <Header />
      <Scales />
    </Container>
  );
}
