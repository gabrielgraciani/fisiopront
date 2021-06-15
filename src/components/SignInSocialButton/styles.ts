import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-right-width: 1px;
`;

export const Text = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;
