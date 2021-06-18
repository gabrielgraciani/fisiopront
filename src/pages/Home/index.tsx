import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { Scales } from '../../components/Scales';
import { Patients } from '../../components/Patients';

import {
  Container,
  Main,
} from './styles';


export function Home({ navigation }: any): JSX.Element {
  return (
    <Container>
      <ScrollView>
        <Header navigation={navigation} />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Main>
          <Scales navigation={navigation} />
          <Patients navigation={navigation} />
        </Main>
      </ScrollView>
    </Container>
  );
}
