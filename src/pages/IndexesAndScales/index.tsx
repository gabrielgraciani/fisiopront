import React from 'react'

import { Header } from '../../components/Header'
import { Scales } from '../../components/Scales'

import { Container } from './styles'

export function IndexesAndScales( { navigation }: any ): JSX.Element {
    return (
        <Container>
            <Header navigation={navigation}/>
            <Scales navigation={navigation} />
        </Container>
    )
}