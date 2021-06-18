import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Header, PatientName, HomeButton, Main, DataContainer, Data, DataContainerTitle, DataText } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface PatientData {
    name: string;
    reason: string;
    hda: string;
    hpp: string;
    observations?: string;
    id: string;
  }

export function Patient( { route }: any ): JSX.Element {

    const patient = route.params.patient as PatientData
    const navigation = useNavigation()

    return (
        <Container>
            <Header>
                <PatientName>{ patient.name }</PatientName>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <HomeButton>
                        <AntDesign name="home" size={24} color="#fafafa" />
                    </HomeButton>
                </TouchableWithoutFeedback>
            </Header>
            <Main>
                <DataContainerTitle>Dados</DataContainerTitle>
                <DataContainer>
                    <Data>
                        <DataText>
                            M.I
                        </DataText>
                        <DataText>
                            { patient.reason }
                        </DataText>
                    </Data>
                    <Data>
                        <DataText>
                            HDA
                        </DataText>
                        <DataText>
                            { patient.hda }
                        </DataText>
                    </Data>
                    <Data>
                        <DataText>
                            HPP
                        </DataText>
                        <DataText>
                            { patient.hpp }
                        </DataText>
                    </Data>
                </DataContainer>
            </Main>
        </Container>
    )
}