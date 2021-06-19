import styled from 'styled-components/native'

export const IndexContainer = styled.View `



`

export const Title = styled.Text `

    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.primary_500};

    margin-bottom: 15px;

`

export const AccordionContainer = styled.View`

    margin-left: 35px;
    margin-right: 35px;
    margin-top: 15px;

    display: flex;
    flex-direction: column;


`
export const AccordionTitle = styled.Text `
    font-size: 20px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_500};

`

export const Accordion = styled.View`

    background-color: ${({ theme }) => theme.colors.secondary };
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

export const ModalContent = styled.View `

    margin-top: auto;
    width: 100%;
    min-height: 200px;

    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 25px;

    padding-top: 25px;
    padding-bottom: 20px;


`

export const Answer = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 10px;

`

export const AnswerTitle = styled.Text`

    font-size: 24px;
    color: ${({ theme }) => theme.colors.main};
    width: 80%;

`

export const SelectAnswerButton = styled.View``


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

`

export const ScoreText = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: 24px;

`

