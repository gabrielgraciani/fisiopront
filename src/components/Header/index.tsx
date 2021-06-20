import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import {
  HeaderContainer,
  HeaderTextContainer,
  HeaderText,
  MenuButton,
  TopHeader,
  BottomHeader,
  TextInput,
  SearchIcon,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

export function Header(): JSX.Element {
  const { user } = useAuth();
  const { setSearch, search } = useSearch();
  const theme = useTheme();
  const userName = user.name.split(' ')[0];
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <HeaderContainer>
      <TopHeader>
        <HeaderTextContainer>
          <HeaderText>Olá,</HeaderText>
          <HeaderText>{userName}!</HeaderText>
        </HeaderTextContainer>
        <MenuButton>
          <TouchableWithoutFeedback onPress={handleOpenDrawer}>
            <Entypo name="menu" size={32} color={theme.colors.shape} />
          </TouchableWithoutFeedback>
        </MenuButton>
      </TopHeader>
      <BottomHeader>
        <SearchIcon>
          <FontAwesome name="search" size={24} color={theme.colors.shape} />
        </SearchIcon>
        <TextInput
          placeholder="Procurar"
          placeholderTextColor={theme.colors.text_opacity65}
          onChangeText={setSearch}
          value={search}
        />
      </BottomHeader>
    </HeaderContainer>
  );
}
