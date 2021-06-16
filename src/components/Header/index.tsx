import React from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { HeaderContainer, HeaderTextContainer, HeaderText, MenuButton, TopHeader, BottomHeader, TextInput, SearchIcon } from './styles'

export function Header() {
    return(
        <HeaderContainer>
            <TopHeader>
            <HeaderTextContainer>
                <HeaderText>Olá,</HeaderText>
                <HeaderText>Fernanda!</HeaderText>
            </HeaderTextContainer>
            <MenuButton>
                <TouchableWithoutFeedback>
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