import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';

import { Container, Greeting, Text, FormContainer } from './styles';

export function SignIn(): JSX.Element {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <BackButton onPress={handleGoBack} />

      <Greeting>Olá,</Greeting>

      <Text>
        Que legal que você vai usar o fisioPront! Só mais essa etapa para você
        ter acesso ao seu prontuário de bolso! ;)
      </Text>

      <FormContainer>
        <Input />
        <Button
          title="Registrar"
          onPress={() => console.log('register')}
          color={theme.colors.secondary}
        />
      </FormContainer>
    </Container>
  );
}
