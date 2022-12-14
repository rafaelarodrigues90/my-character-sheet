import styled from 'styled-components/native'

export const MainContainer = styled.View`
  flex: 1;
  margin: 0px 10px -60px;
`

export const TitleContainer = styled.View`
  justify-content: center;
  margin: 5px;
`

export const Title = styled.Text`
  font-size: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  text-transform: uppercase;
`

export const FormContainer = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  justify-content: flex-start;
`

export const FormText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  margin-right: 15px;
  justify-content: flex-start;
`

export const ItemInput = styled.TextInput`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  border: 1px solid;
  border-radius: 5px;
  text-transform: capitalize;
  margin-right: 10px;
  margin-left: 15px;
  height: 81%;
  width: 55%;
`

export const QuantityInput = styled.TextInput`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  border: 1px solid;
  border-radius: 5px;
  text-transform: capitalize;
  margin-right: 10px;
  text-align: center;
  height: 81%;
  width: 10%;
`

export const InputButtonContainer = styled.TouchableOpacity`
  background: #fafafa;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 20px;
  width: 85px;
  height: 30px;
`

export const InputButtonText = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: black;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
`

export const ListContainer = styled.View`
  flex-direction: row;
  margin: 5px;
`

export const ListContainerText = styled.View`
  flex: 1;
  margin: 5px;
  margin-right: 110px;
  flex-direction: row;
  justify-content: flex-end;
`

export const FooterContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`

export const RemoveItemButton = styled.TouchableOpacity`
  background: #dcdcdc;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 0px;
  width: 30px;
  height: 30px;
`
