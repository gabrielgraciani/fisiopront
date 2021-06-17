import styled from 'styled-components/native';
import { Scale, ScaleTitle } from '../../components/Scales/styles'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;

export const Main = styled.View`


`

export const MainTitle = styled.Text`

  color: black;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 15px;

`

export const PatientsContainer = styled.View `
  margin-top: 20px; 
  margin-left: 35px;
  margin-right: 35px;

`

export const Patient = styled(Scale)`


`

export const PatientTitle = styled(ScaleTitle)`

`

export const AddPatientButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  
`


export const AddPatientIcon = styled.Image`
  width: 50px;
  height: 50px;
  
`