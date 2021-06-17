import React from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Header } from '../../components/Header';
import { Scales } from '../../components/Scales';

import AddButton from '../../assets/addButton.png';

import {
  Container,
  Main,
  MainTitle,
  PatientsContainer,
  Patient,
  PatientTitle,
  AddPatientButton,
  AddPatientIcon,
} from './styles';

export function Home({ navigation }: any): JSX.Element {
  return (
    <Container>
      <Header navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Main>
        <Scales navigation={navigation} />
        <PatientsContainer>
          <MainTitle>Pacientes</MainTitle>
          <TouchableWithoutFeedback>
            <Patient>
              <PatientTitle>A.R.U</PatientTitle>
            </Patient>
          </TouchableWithoutFeedback>
          <AddPatientButton>
            <TouchableWithoutFeedback>
              <AddPatientIcon source={AddButton} />
            </TouchableWithoutFeedback>
          </AddPatientButton>
        </PatientsContainer>
      </Main>
    </Container>
  );
}
