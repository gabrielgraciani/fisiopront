import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { IndexName, BackButton, Header } from './styles';

interface IndexHeaderProps {
  indexName: string;
}

export function IndexHeader({ indexName }: IndexHeaderProps): JSX.Element {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Header>
      <IndexName>{indexName}</IndexName>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <BackButton>
          <AntDesign name="home" size={24} color={theme.colors.text} />
        </BackButton>
      </TouchableWithoutFeedback>
    </Header>
  );
}
