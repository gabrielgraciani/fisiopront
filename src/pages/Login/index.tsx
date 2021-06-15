import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Logo from '../../assets/logo.svg';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { Button } from '../../components/Button';

import {
  Container,
  ContentContainer,
  Title,
  SubTitle,
  ActionsContainer,
  ButtonsContainer,
  HasAccountContainer,
  HasAccountText,
  CreateAccountButton,
} from './styles';

export function Login(): JSX.Element {
  const navigation = useNavigation();

  function handleNavigateToRegister() {
    navigation.navigate('SignIn');
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

        <ActionsContainer>
          <ButtonsContainer>
            <Button title="Registrar" onPress={handleNavigateToRegister} />

            <SignInSocialButton
              title="Entrar com Google"
              svg={GoogleSvg}
              onPress={() => {
                console.log('login google');
              }}
            />

            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={() => {
                console.log('login apple');
              }}
            />
          </ButtonsContainer>

          <HasAccountContainer>
            <HasAccountText>Já tem uma conta? </HasAccountText>
            <CreateAccountButton
              onPress={() => console.log('navigate to create account')}
            >
              <HasAccountText isLink>Entrar</HasAccountText>
            </CreateAccountButton>
          </HasAccountContainer>
        </ActionsContainer>
      </ContentContainer>
    </Container>
  );
}
