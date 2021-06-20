import React, { useCallback } from 'react';
import { StatusBar, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { Scales } from '../../components/Scales';
import { Patients } from '../../components/Patients';

import { Container, Main } from './styles';
import { useSearch } from '../../hooks/search';

export function Home(): JSX.Element {
  const { setSearch } = useSearch();

  useFocusEffect(
    useCallback(() => {
      setSearch('');
    }, [setSearch]),
  );

  return (
    <Container>
      <ScrollView>
        <Header />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <Main>
          <Scales />
          <Patients />
        </Main>
      </ScrollView>
    </Container>
  );
}
