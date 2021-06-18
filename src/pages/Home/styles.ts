import styled from 'styled-components/native';

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



