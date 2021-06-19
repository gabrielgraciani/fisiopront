import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { IPatient } from '../../domains/Patient';

import {
  Container,
  Header,
  PatientName,
  HomeButton,
  Main,
  DataContainer,
  Data,
  DataContainerTitle,
  DataText,
} from './styles';

interface Params {
  patient: IPatient;
}

export function Patient(): JSX.Element {
  const route = useRoute();
  const { patient } = route.params as Params;
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <PatientName>{patient.name}</PatientName>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <HomeButton>
            <AntDesign name="home" size={24} color={theme.colors.text} />
          </HomeButton>
        </TouchableWithoutFeedback>
      </Header>
      <Main>
        <DataContainerTitle>Dados</DataContainerTitle>
        <DataContainer>
          <Data>
            <DataText>M.I</DataText>
            <DataText>{patient.reason}</DataText>
          </Data>
          <Data>
            <DataText>HDA</DataText>
            <DataText>{patient.hda}</DataText>
          </Data>
          <Data>
            <DataText>HPP</DataText>
            <DataText>{patient.hpp}</DataText>
          </Data>
        </DataContainer>
      </Main>
    </Container>
  );
}
