import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;

export const Main = styled.View`
    margin-top: 25px;
    margin-left: 35px;
    margin-right: 35px;

`
export const ScalesContainer = styled.View`


`

export const MainTitle = styled.Text`

  color: black;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 15px;

`
export const Scale = styled.View`

  background-color: #408DC5;
  height: 50px;
  border-radius: 15px;

  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

`
export const ScaleTitle = styled.Text`
  color: #fafafa;

  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

`
export const PatientsContainer = styled.View `
  margin-top: 15px;

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