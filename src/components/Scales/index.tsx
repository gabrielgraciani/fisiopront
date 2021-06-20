import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { scales } from '../../utils/scales';

import { IScale } from '../../domains/Scale';

import { MainTitle, Scale, ScalesContainer, ScaleTitle } from './styles';
import { useSearch } from '../../hooks/search';

export function Scales(): JSX.Element {
  const navigation = useNavigation();
  const { search } = useSearch();
  const [filteredScales, setFilteredScales] = useState<IScale[]>([]);

  function handleNavigateToScale(scale: IScale) {
    navigation.navigate('Scale Details', { scale });
    return undefined;
  }

  useEffect(() => {
    const newPatients = scales.filter(scale =>
      scale.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFilteredScales(newPatients);
  }, [search]);

  return (
    <ScalesContainer>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Escalas e índices')}
      >
        <MainTitle>Escalas e índices</MainTitle>
      </TouchableWithoutFeedback>

      {filteredScales.map(scale => (
        <TouchableWithoutFeedback
          key={scale.id}
          onPress={() => handleNavigateToScale(scale)}
        >
          <Scale>
            <ScaleTitle>{scale.name}</ScaleTitle>
          </Scale>
        </TouchableWithoutFeedback>
      ))}
    </ScalesContainer>
  );
}
