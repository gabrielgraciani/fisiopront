import React from 'react'

import { Header } from '../../components/Header'
import { Patients } from '../../components/Patients'

import { Container } from '../Home/styles'

export function AllPatients( { navigation }: any ): JSX.Element {
    return(
        <Container>
            <Header navigation={navigation}/>
            <Patients navigation={navigation}/>
        </Container>
    )
}