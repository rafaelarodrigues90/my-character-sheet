import styled from 'styled-components/native'

export const TitleContainer = styled.View`
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  padding: 0px 50px 0px 50px;
  text-transform: uppercase;
`

export const MainContainer = styled.View`
  margin: 10px 20px;
  align-items: flex-start;
`

export const FormContainer = styled.View`
  flex-direction: row;
  margin: 10px 15px;
`

export const FormText = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
`

export const ItemInput = styled.TextInput`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fontFamily.medievalSharp};
  border: 1px solid;
  border-radius: 5px;
  text-transform: capitalize;
  margin-right: 10px;
  height: 81%;
  width: 60%;
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

export const Separator = styled.View`
  width: 90%;
  height: 1px;
  margin: 15px;
  background: gray;
`

export const FooterContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0px 30px 20px 30px;
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
