import React from 'react';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/Form/InputForm';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  Form,
  ButtonContainer,
  StyledScrollView,
  ObservationsContainer,
  ObservationsTitle,
} from './styles';

interface FormData {
  name: string;
  reason: string;
  hda: string;
  hpp: string;
  observations?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Informe o nome!'),
  reason: Yup.string().required('Informe o o motivo!'),
  hda: Yup.string().required('Informe o HDA!'),
  hpp: Yup.string().required('Informe o HPP!'),
});

export function CreatePatient(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister(form: FormData) {
    const newPatient = {
      id: String(uuid.v4()),
      name: form.name,
      reason: form.reason,
      hda: form.hda,
      hpp: form.hpp,
      observations: form.observations,
    };

    try {
      const dataKey = `@fisiopront:patients_user:${user.id}`;
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newPatient];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();

      navigation.navigate('Home');
    } catch (err) {
      Alert.alert('Erro ao tentar criar um paciente!');
    }
  }

  return (
    <Container>
      <BackButton color={theme.colors.primary} onPress={handleGoBack} />

      <Title>Adicionar paciente</Title>

      <StyledScrollView>
        <Form>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
            placeholderTextColor={theme.colors.shape}
          />
          <InputForm
            name="reason"
            control={control}
            placeholder="Motivo da internação"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.reason && errors.reason.message}
            placeholderTextColor={theme.colors.shape}
          />
          <InputForm
            name="hda"
            control={control}
            placeholder="HDA"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.hda && errors.hda.message}
            placeholderTextColor={theme.colors.shape}
          />
          <InputForm
            name="hpp"
            control={control}
            placeholder="HPP"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.hpp && errors.hpp.message}
            placeholderTextColor={theme.colors.shape}
          />

          <ObservationsContainer>
            <ObservationsTitle>Observações</ObservationsTitle>

            <InputForm
              name="observations"
              control={control}
              autoCapitalize="sentences"
              autoCorrect={false}
              placeholderTextColor={theme.colors.shape}
              multiline
              numberOfLines={6}
            />
          </ObservationsContainer>

          <ButtonContainer>
            <Button
              title="SALVAR"
              color={theme.colors.secondary}
              size="small"
              onPress={handleSubmit(handleRegister)}
            />
          </ButtonContainer>
        </Form>
      </StyledScrollView>
    </Container>
  );
}
