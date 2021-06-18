import styled from 'styled-components/native'

export const PatientsContainer = styled.View`
    margin-top: 25px;
    margin-left: 35px;
    margin-right: 35px; 
`

export const MainTitle = styled.Text`

  color: black;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 15px;

`

export const Patient = styled.View`

  background-color: #408DC5;
  height: 50px;
  border-radius: 15px;

  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

`
export const PatientTitle = styled.Text`
  color: #fafafa;

  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

`

export const AddPatientButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
  
`


export const AddPatientIcon = styled.Image`
  width: 50px;
  height: 50px;
  
`