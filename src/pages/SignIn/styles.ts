import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.main};

  padding: 40px 32px 16px;
`;

export const Greeting = styled.Text`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(42)}px;
`;

export const Text = styled.Text`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.text_opacity65};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(18)}px;
`;

export const FormContainer = styled.View`
  flex: 1;
  margin-top: 24px;
  justify-content: space-between;
`;
