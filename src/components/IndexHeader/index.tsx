import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { IndexName, BackButton, Header } from './styles'

export function IndexHeader( { indexName }: any ) {

    const navigation = useNavigation()

    return (
        <Header>
            <IndexName>{ indexName }</IndexName>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <BackButton>
                        <AntDesign name="home" size={24} color="#fafafa" />
                    </BackButton>
                </TouchableWithoutFeedback>
        </Header>
    )
}