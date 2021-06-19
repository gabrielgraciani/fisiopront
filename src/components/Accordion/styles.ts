import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 15px;
`;

export const AccordionTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ContentContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 50px;
  border-radius: 15px;

  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
