import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(40)}px ${RFValue(32)}px 0;
`;

export const Title = styled.Text`
  text-align: center;
  width: 100%;
  font-size: 24px;
  margin: 10px 0 20px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Form = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  margin-top: 50px;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
  },
})``;

export const ObservationsContainer = styled.View`
  margin-top: 15px;
`;

export const ObservationsTitle = styled.Text`
  margin-bottom: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.primary};
`;
