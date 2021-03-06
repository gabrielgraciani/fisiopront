import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  color?: string;
  size?: 'small' | 'normal';
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: ${props => (props.size === 'small' ? '12px' : '18px')};
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
