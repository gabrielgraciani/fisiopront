import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

export const IndexContainer = styled.View``;

export const AccordionContainer = styled.View`
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 15px;

  display: flex;
  flex-direction: column;
`;

export const ScoreResultContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ScoreText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 24px;
`;

export const SelectContainer = styled.View`
  border-radius: 15px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.main};
  padding: 0 15px;
`;

export const StyledPicker = styled(Picker)`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const AccordionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 15px;
`;

export const Accordion = styled.View`
  margin-bottom: 20px;
`;
