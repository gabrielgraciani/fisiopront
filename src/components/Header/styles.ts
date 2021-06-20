import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background: ${({ theme }) => theme.colors.main};
  height: 260px;

  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

export const TopHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BottomHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 30px 35px 0;
  padding: 10px 20px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const TextInput = styled.TextInput`
  flex: 1;
  margin-left: 15px;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const SearchIcon = styled.View`
  justify-content: center;
`;

export const HeaderTextContainer = styled.View`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-top: 60px;
  margin-left: 35px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const MenuButton = styled.View`
  display: flex;
  margin-right: 35px;
  margin-top: 60px;
`;
