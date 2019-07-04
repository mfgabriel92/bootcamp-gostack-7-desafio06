import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import {
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles'

class UserInfo extends Component {
  handleNavigate = user => {
    const { navigation } = this.props
    navigation.navigate('User', { user })
  }

  render() {
    const { user } = this.props

    return (
      <User>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name || user.login}</Name>
        <Bio>{user.bio || 'No bio'}</Bio>
        <ProfileButton onPress={() => this.handleNavigate(user)}>
          <ProfileButtonText>Profile</ProfileButtonText>
        </ProfileButton>
      </User>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape().isRequired,
}

export default withNavigation(UserInfo)
