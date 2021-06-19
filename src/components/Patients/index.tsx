import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableWithoutFeedback } from "react-native";
import { useAuth } from "../../hooks/auth";

import { PatientsContainer, MainTitle, Patient, PatientTitle, AddPatientButton, AddPatientIcon } from "./styles";
import AddButton from '../../assets/addButton.png';
import { Ionicons } from '@expo/vector-icons';


interface PatientData {
  name: string;
  reason: string;
  hda: string;
  hpp: string;
  observations?: string;
  id: string;
}

export function Patients( { navigation }: any ): JSX.Element {

  const { user } = useAuth();
  const dataKey = `@fisiopront:patients_user:${user.id}`;
  const [patients, setPatients] = useState([] as Array<PatientData>)

  async function loadPatientStorageData() {
    const patientStorage = await AsyncStorage.getItem(dataKey);

    if ( patientStorage ) {
      setPatients(JSON.parse(patientStorage) as Array<PatientData>);
      return
    }
  }

  useEffect(() => {
    loadPatientStorageData()
  }, [ patients ])

  useEffect(() => {
    loadPatientStorageData()
  }, [])

  function deletePatient(id: string) {
    const newPatientsList = patients.filter(patient => patient.id != id)
    setPatients(newPatientsList)
    AsyncStorage.setItem(dataKey, JSON.stringify(newPatientsList));
  }

  return (
    <PatientsContainer>
        <MainTitle>Pacientes</MainTitle>
        { patients && patients.map(patient => (
          <TouchableWithoutFeedback key={patient.id} onPress={() => navigation.navigate('Paciente', { patient })}>
          <Patient>
            <PatientTitle>{ patient.name }</PatientTitle>
            <TouchableWithoutFeedback onPress={() => deletePatient(patient.id)}>
              <Ionicons name="remove-outline" size={24} color="#fafafa" />
            </TouchableWithoutFeedback>
          </Patient>
        </TouchableWithoutFeedback>
        )) }
        <AddPatientButton>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('CreatePatient')}>
            <AddPatientIcon source={AddButton} />
          </TouchableWithoutFeedback>
        </AddPatientButton>
    </PatientsContainer>
  )
}