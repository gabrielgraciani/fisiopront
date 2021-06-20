import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Answer, AnswerTitle, SelectAnswerButton } from './styles';

interface ScaleAnswerModalProps {
  answerTitle: string;
  onPress: () => void;
}

export function ScaleAnswerModal({
  answerTitle,
  onPress,
}: ScaleAnswerModalProps): JSX.Element {
  return (
    <Answer>
      <AnswerTitle>{answerTitle}</AnswerTitle>
      <TouchableWithoutFeedback onPress={onPress}>
        <SelectAnswerButton>
          <MaterialIcons
            name="radio-button-unchecked"
            size={24}
            color="black"
          />
        </SelectAnswerButton>
      </TouchableWithoutFeedback>
    </Answer>
  );
}
