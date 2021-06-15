import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  padding-top: ${RFValue(40)}px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  padding: 0 32px 16px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const SubTitle = styled.Text`
  margin-top: 26px;
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;

export const ActionsContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const HasAccountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HasAccountText = styled.Text<{ isLink?: boolean }>`
  margin-top: 20px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;

  text-decoration: ${props => (props.isLink ? 'underline' : 'none')};
`;

export const CreateAccountButton = styled(BorderlessButton)``;
