import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const ButtonsContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: ${RFValue(60)}px;
`;

export const LoadingContainer = styled.View`
  margin-top: 20px;
  height: 20px;
`;
