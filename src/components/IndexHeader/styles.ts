import styled from 'styled-components/native'

import { PatientName, HomeButton } from '../../pages/Patient/styles'

export const Header = styled.View `

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
export const IndexName = styled( PatientName ) `


`
export const BackButton = styled( HomeButton ) ``

