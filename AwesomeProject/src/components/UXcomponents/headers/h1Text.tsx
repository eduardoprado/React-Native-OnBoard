import styled from 'styled-components/native'
import {FontSize, Spacing} from '../../constants'


export const H1Text = styled.Text`
  fontSize: ${FontSize.XLarge};
  fontWeight: bold;
  color: #000;
  marginTop: ${Spacing.Large};
  marginBottom: ${Spacing.Large};
`

export const AlignedH1Text = styled(H1Text)`
  textAlign: center;
`
