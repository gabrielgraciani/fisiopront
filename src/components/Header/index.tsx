import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { HeaderContainer, HeaderTextContainer, HeaderText, MenuButton, TopHeader, BottomHeader, TextInput, SearchIcon } from './styles'

import { useAuth } from '../../hooks/auth';

export function Header( { navigation }: any ) {

    const { user } = useAuth();
    const userName = user.name.split(' ')[0] // Pega só a primeira palavra do nome

    return(
        <HeaderContainer>
            <TopHeader>
            <HeaderTextContainer>
                <HeaderText>Olá,</HeaderText>
                <HeaderText>{userName}!</HeaderText>
            </HeaderTextContainer>
            <MenuButton>
                <TouchableWithoutFeedback onPress={() =>  navigation.openDrawer() }>
                <Entypo name="menu" size={32} color="#fafafa" />
                </TouchableWithoutFeedback>
            </MenuButton>
            </TopHeader>
            <BottomHeader>
            <SearchIcon>
                <FontAwesome name="search" size={24} color="#fafafa" />
            </SearchIcon>
            <TextInput placeholder="Procurar" placeholderTextColor="#fafafa" />
            </BottomHeader>
      </HeaderContainer>
    )
}