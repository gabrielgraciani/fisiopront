import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { IPatient } from '../../domains/Patient';

import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

import {
  PatientsContainer,
  MainTitle,
  Patient,
  PatientTitle,
  AddPatientButton,
  AddPatientIcon,
} from './styles';
import AddButton from '../../assets/addButton.png';

export function Patients(): JSX.Element {
  const { user } = useAuth();
  const { search } = useSearch();
  const navigation = useNavigation();
  const theme = useTheme();
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [isLoadingPatients, setIsLoadingPatients] = useState(true);
  const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);

  const dataKey = `@fisiopront:patients_user:${user.id}`;

  const loadPatientStorageData = useCallback(async () => {
    const response = await AsyncStorage.getItem(dataKey);
    const patientStorage = response ? JSON.parse(response) : [];

    setPatients(patientStorage);

    setIsLoadingPatients(false);
  }, [dataKey]);

  useFocusEffect(
    useCallback(() => {
      loadPatientStorageData();
    }, [loadPatientStorageData]),
  );

  function deletePatient(id: string) {
    const newPatientsList = patients.filter(patient => patient.id !== id);
    setPatients(newPatientsList);
    AsyncStorage.setItem(dataKey, JSON.stringify(newPatientsList));
  }

  useEffect(() => {
    const newPatients = patients.filter(patient =>
      patient.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFilteredPatients(newPatients);
  }, [patients, search]);

  return (
    <PatientsContainer>
      <MainTitle>Pacientes</MainTitle>
      {isLoadingPatients ? (
        <ActivityIndicator color={theme.colors.main} size="large" />
      ) : (
        filteredPatients.map(patient => (
          <TouchableWithoutFeedback
            key={patient.id}
            onPress={() => navigation.navigate('Paciente', { patient })}
          >
            <Patient>
              <PatientTitle>{patient.name}</PatientTitle>
              <TouchableWithoutFeedback
                onPress={() => deletePatient(patient.id)}
              >
                <Ionicons
                  name="remove-outline"
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableWithoutFeedback>
            </Patient>
          </TouchableWithoutFeedback>
        ))
      )}
      <AddPatientButton>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CreatePatient')}
        >
          <AddPatientIcon source={AddButton} />
        </TouchableWithoutFeedback>
      </AddPatientButton>
    </PatientsContainer>
  );
}
