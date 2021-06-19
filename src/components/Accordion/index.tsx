import React from 'react';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Title, AccordionTitle, ContentContainer } from './styles';

interface AccordionProps {
  title: string;
  onPress: () => void;
  value: number;
}

export function Accordion({
  title,
  onPress,
  value,
}: AccordionProps): JSX.Element {
  const theme = useTheme();
  return (
    <Container>
      <Title>{title}</Title>

      <TouchableWithoutFeedback onPress={onPress}>
        <ContentContainer>
          <AccordionTitle>
            {value >= 0 ? `Score ${value}` : 'Selecione um valor'}
          </AccordionTitle>
          <AntDesign name="down" size={24} color={theme.colors.text} />
        </ContentContainer>
      </TouchableWithoutFeedback>
    </Container>
  );
}
