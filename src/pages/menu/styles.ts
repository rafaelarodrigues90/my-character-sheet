import styled from 'styled-components/native'

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 30px 0px;
  justify-content: center;
  align-items: center;
`
export const MenuTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 50px;
`
export const ButtonContainer = styled.TouchableOpacity`
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 15px 0px;
`

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  color: black;
  font-style: italic;
`
