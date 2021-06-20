import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Header } from '../../components/Header';
import { Patients } from '../../components/Patients';
import { useSearch } from '../../hooks/search';

import { Container } from '../Home/styles';

export function AllPatients(): JSX.Element {
  const { setSearch } = useSearch();

  useFocusEffect(
    useCallback(() => {
      setSearch('');
    }, [setSearch]),
  );

  return (
    <Container>
      <Header />
      <Patients />
    </Container>
  );
}
