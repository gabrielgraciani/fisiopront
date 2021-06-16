import React from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Header } from '../../components/Header'

import { Container, Text,  Main, ScalesContainer, MainTitle, Scale, ScaleTitle, PatientsContainer, Patient, PatientTitle, AddPatientButton, AddPatientIcon } from './styles';
 
export function Home(): JSX.Element {
  return (
    <Container>
      <Header/>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />  
      <Main>
        <ScalesContainer>
          <MainTitle>
            Escalas e índices
          </MainTitle>
          <TouchableWithoutFeedback>
            <Scale>
                <ScaleTitle>
                  MOBILITY SCALE
                </ScaleTitle>
            </Scale>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Scale>
                <ScaleTitle>
                  ÍNDICE DE BARTHEL
                </ScaleTitle>
            </Scale>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Scale>
                <ScaleTitle>
                  ESCALA DE MRC
                </ScaleTitle>
            </Scale>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Scale>
                <ScaleTitle>
                  ÍNDICE DE HACOR
                </ScaleTitle>
            </Scale>
          </TouchableWithoutFeedback>
        </ScalesContainer>
        <PatientsContainer>
          <MainTitle>
            Pacientes
          </MainTitle>
          <TouchableWithoutFeedback>
            <Patient>
                <PatientTitle>
                  A.R.U
                </PatientTitle>
            </Patient>
          </TouchableWithoutFeedback>
          <AddPatientButton>
            <TouchableWithoutFeedback>
              <AddPatientIcon source={require('../../assets/addButton.png')}/>
            </TouchableWithoutFeedback>
          </AddPatientButton>
        </PatientsContainer>
      </Main>
    </Container>
  );
}
