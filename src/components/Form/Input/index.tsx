import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, StyledInput, IconContainer } from './styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props): JSX.Element {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <Container>
      <StyledInput {...rest} secureTextEntry={isShowingPassword} />

      <IconContainer>
        {isShowingPassword ? (
          <Ionicons
            name="eye-off"
            size={24}
            onPress={() => setIsShowingPassword(false)}
          />
        ) : (
          <Ionicons
            name="eye"
            size={24}
            onPress={() => setIsShowingPassword(true)}
          />
        )}
      </IconContainer>
    </Container>
  );
}
