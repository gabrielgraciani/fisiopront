import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator, Alert, StatusBar, Platform } from 'react-native';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
  Container,
  ContentContainer,
  Title,
  SubTitle,
  ButtonsContainer,
  LoadingContainer,
} from './styles';

export function SignIn(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (err) {
      Alert.alert('Ocurreu um erro ao tentar se autenticar!');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      await signInWithApple();
    } catch (err) {
      Alert.alert('Ocurreu um erro ao tentar se autenticar!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Logo width={RFValue(250)} height={RFValue(250)} />

      <ContentContainer>
        <Title>fisioPront</Title>
        <SubTitle>
          Seu prontuário de bolso, feito {'\n'}
          para te ajudar!
        </SubTitle>

        <ButtonsContainer>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          {Platform.OS === 'ios' && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}

          <LoadingContainer>
            {isLoading && <ActivityIndicator color={theme.colors.shape} />}
          </LoadingContainer>
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
}
