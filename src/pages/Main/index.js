import React, { Component } from 'react'
import { Keyboard, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, Button, List } from './styles'
import Api from '../../service/api'
import UserInfo from '../../components/UserInfo'

class Main extends Component {
  state = {
    user: '',
    users: [],
    loading: false,
  }

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users')

    if (users) {
      this.setState({ users: JSON.parse(users) })
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state

    if (users !== prevState.users) {
      AsyncStorage.setItem('users', JSON.stringify(users))
    }
  }

  handleOnSubmit = async () => {
    const { user, users } = this.state

    this.setState({ loading: true })

    if (user !== '') {
      const response = await Api.get(`/users/${user}`)
      const data = {
        id: response.data.id,
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      }

      this.setState({ users: [...users, data], loading: false })
    }

    Keyboard.dismiss()
  }

  render() {
    const { user, users, loading } = this.state

    return (
      <Container>
        <Form>
          <Input
            value={user}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add user"
            onChangeText={text => this.setState({ user: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleOnSubmit}
          />
          <Button onPress={this.handleOnSubmit} loading={loading}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={18} color="#FFF" />
            )}
          </Button>
        </Form>

        <List
          data={users}
          keyExtractor={u => String(u.id)}
          renderItem={({ item }) => <UserInfo user={item} />}
        />
      </Container>
    )
  }
}

export default Main
