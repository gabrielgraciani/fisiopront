import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.shape};

`

export const Header = styled.View`
    background: ${({ theme }) => theme.colors.main};

    height: 115px;

    border-radius: 15px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const PatientName = styled.Text`
    margin-top: 20px;   
    margin-left: 30px;

    font-size: 30px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_700};

`

export const HomeButton = styled.View `
    margin-top: 20px;
    padding: 15px;

    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 15px;
    margin-right: 30px;

`

export const Main = styled.View `
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;


`

export const DataContainerTitle = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary_500};

`

export const DataContainer = styled.View`
    background: ${({ theme }) => theme.colors.main};
    border-radius: 15px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Data = styled.View`
    background: ${({ theme }) => theme.colors.secondary};
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const DataText = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_300};
    font-size: 22px;

    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;


`