import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

import { IndexHeader } from '../../components/IndexHeader';

import { IScale } from '../../domains/Scale';

import {
  IndexContainer,
  AccordionContainer,
  ScoreResultContainer,
  ScoreText,
  StyledPicker,
  SelectContainer,
  AccordionTitle,
  Accordion,
} from './styles';

interface Params {
  scale: IScale;
}

interface OptionsValues {
  [key: string]: {
    itemValue: ItemValue;
    itemIndex: number;
  };
}

interface HandleChangeProps {
  itemValue: ItemValue;
  itemIndex: number;
  parentIndex: number;
}

export function ScaleDetails(): JSX.Element {
  const route = useRoute();
  const { scale } = route.params as Params;

  const [score, setScore] = useState(0);
  const [selectedValues, setSelectedValues] = useState<OptionsValues>({});

  const isShowingScore =
    Object.keys(selectedValues).length === scale.activities.length;

  function handleChange({
    itemIndex,
    parentIndex,
    itemValue,
  }: HandleChangeProps) {
    const newValue = {
      [parentIndex]: {
        itemValue,
        itemIndex,
      },
    };

    const itemValueNumber = Number(itemValue);

    setSelectedValues({ ...selectedValues, ...newValue });
    setScore(score + itemValueNumber);
  }

  return (
    <IndexContainer>
      <ScrollView>
        <IndexHeader indexName={scale.name} />
        <AccordionContainer>
          {scale.activities.map((activity, index) => (
            <Accordion key={activity.id}>
              <AccordionTitle>{activity.question}</AccordionTitle>
              <SelectContainer>
                <StyledPicker
                  onValueChange={(itemValue, itemIndex) => {
                    handleChange({
                      itemValue,
                      itemIndex,
                      parentIndex: index,
                    });
                  }}
                  selectedValue={selectedValues[index]?.itemValue}
                >
                  <StyledPicker.Item label="Selecione uma opção" value="" />
                  {activity.options.map(option => (
                    <StyledPicker.Item
                      label={option.option}
                      value={option.value}
                      key={option.id}
                    />
                  ))}
                </StyledPicker>
              </SelectContainer>
            </Accordion>
          ))}

          <ScoreResultContainer>
            <ScoreText>SCORE</ScoreText>
            <ScoreText>{isShowingScore ? score : 0}</ScoreText>
          </ScoreResultContainer>
        </AccordionContainer>
      </ScrollView>
    </IndexContainer>
  );
}
