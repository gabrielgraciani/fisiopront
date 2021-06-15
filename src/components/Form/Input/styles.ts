import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px 18px;
  margin-bottom: 8px;
  border-radius: 15px;
  flex-direction: row;
`;

export const StyledInput = styled(TextInput)`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

export const IconContainer = styled.View`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
