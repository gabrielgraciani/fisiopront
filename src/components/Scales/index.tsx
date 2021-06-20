import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { scales } from '../../utils/scales';

import { IScale } from '../../domains/Scale';

import { MainTitle, Scale, ScalesContainer, ScaleTitle } from './styles';

export function Scales(): JSX.Element {
  const navigation = useNavigation();

  function handleNavigateToScale(scale: IScale) {
    navigation.navigate('Índice de Barthel', { scale });
    return undefined;
  }

  return (
    <ScalesContainer>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Escalas e índices')}
      >
        <MainTitle>Escalas e índices</MainTitle>
      </TouchableWithoutFeedback>

      {scales.map(scale => (
        <TouchableWithoutFeedback
          key={scale.id}
          onPress={() => handleNavigateToScale(scale)}
        >
          <Scale>
            <ScaleTitle>{scale.name}</ScaleTitle>
          </Scale>
        </TouchableWithoutFeedback>
      ))}
      <TouchableWithoutFeedback>
        <Scale>
          <ScaleTitle>MOBILITY SCALE</ScaleTitle>
        </Scale>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Índice de Barthel')}
      >
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
