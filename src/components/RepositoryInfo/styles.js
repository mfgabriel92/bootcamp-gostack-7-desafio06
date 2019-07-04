import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Repository = styled(RectButton)`
  padding: 15px 25px;
  background: #f9f9f9;
  margin: 0 25px 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #555;
  font-weight: bold;
  margin-left: 10px;
`
