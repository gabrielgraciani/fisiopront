import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Header } from '../../components/Header';
import { Scales } from '../../components/Scales';
import { useSearch } from '../../hooks/search';

import { Container } from './styles';

export function IndexesAndScales(): JSX.Element {
  const { setSearch } = useSearch();

  useFocusEffect(
    useCallback(() => {
      setSearch('');
    }, [setSearch]),
  );
  return (
    <Container>
      <Header />
      <Scales />
    </Container>
  );
}
