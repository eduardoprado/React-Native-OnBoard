import styled from 'styled-components/native'

export const StyledView = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: space-evenly;
  backgroundColor: #fff;
  border: 10px solid red;

`
export const FormInput = styled.TextInput`
height: 40;
backgroundColor: #D3D3D3;
marginBottom: 10;
paddingHorizontal: 10;
`

export const FormView = styled.View`
  padding: 40px;
  justifyContent: space-evenly;
`
export const LoadView = styled.View`

  justifyContent: center;
  flexDirection: row;
  backgroundColor: #D3D3D3;
`

export const StyledHeaderText = styled.Text`
fontSize: 24px;
fontWeight: bold;
color: #000;
marginTop: 20px;
marginBottom: 20px;
justifyContent: center;
textAlign: center;
`

export const StyledText = styled.Text`
fontSize: 16px;
fontWeight: normal;
color: #000;
justifyContent: center;

`

export const ErrorText = styled.Text`
fontWeight: normal;
color: #b63945;
textAlign: left;
`

export const ButtonText = styled.Text`
fontSize: 16px;
fontWeight: normal;
color: #000;
textAlign: center;
justifyContent: center;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
backgroundColor: #6c5ce7;
height: 44px;
borderRadius: 20px;
padding: 10px;
`
