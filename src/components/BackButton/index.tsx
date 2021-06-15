import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
}
export function BackButton({ color, ...rest }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <AntDesign name="back" size={24} color={color || theme.colors.shape} />
    </Container>
  );
}
