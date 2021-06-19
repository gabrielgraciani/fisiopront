import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background: #267ebe;
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
  flex: 1;

  margin-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  padding-left: 10%;
  margin-bottom: 25px;

  background-color: #408dc5;
  color: #fafafa;

  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const SearchIcon = styled.View`
  display: none;
`;

export const HeaderTextContainer = styled.View`
  color: #fafafa;
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-top: 60px;
  margin-left: 35px;
`;

export const HeaderText = styled.Text`
  color: #fafafa;

  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const MenuButton = styled.View`
  display: flex;
  margin-right: 35px;
  margin-top: 60px;
`;
