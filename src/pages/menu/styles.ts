import styled from 'styled-components/native'

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  background: #f2f2f2;
`

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MenuTitle = styled.Text`
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
`
export const ButtonContainer = styled.TouchableOpacity`
  background: #fafafa;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 10px 0px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: black;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
`
