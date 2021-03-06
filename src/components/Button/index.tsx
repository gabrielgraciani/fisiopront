import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  size?: 'small' | 'normal';
  onPress: () => void;
}

export function Button({
  color,
  title,
  enabled = true,
  loading = false,
  size,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{ opacity: enabled === false || loading ? 0.5 : 1 }}
      size={size}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.main} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
