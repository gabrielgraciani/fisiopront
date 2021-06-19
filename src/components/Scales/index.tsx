import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainTitle, Scale, ScalesContainer, ScaleTitle } from './styles';

export function Scales(): JSX.Element {
  const navigation = useNavigation();

  return (
    <ScalesContainer>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Escalas e índices')}
      >
        <MainTitle>Escalas e índices</MainTitle>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Scale>
          <ScaleTitle>MOBILITY SCALE</ScaleTitle>
        </Scale>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Scale>
          <ScaleTitle>ÍNDICE DE BARTHEL</ScaleTitle>
        </Scale>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Scale>
          <ScaleTitle>ESCALA DE MRC</ScaleTitle>
        </Scale>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Scale>
          <ScaleTitle>ÍNDICE DE HACOR</ScaleTitle>
        </Scale>
      </TouchableWithoutFeedback>
    </ScalesContainer>
  );
}
