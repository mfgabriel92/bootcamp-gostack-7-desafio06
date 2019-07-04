import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`

export const ProfileButton = styled(RectButton)`
  margin: 15px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`

export const ProfileButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`
