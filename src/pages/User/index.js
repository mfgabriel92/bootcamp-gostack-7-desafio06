import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import Api from '../../service/api'
import { Container, Header, Avatar, Name, Bio, Repositories } from './styles'
import RepositoryInfo from '../../components/RepositoryInfo'

class User extends Component {
  state = {
    repositories: [],
    page: 1,
    refreshing: false,
    loading: true,
  }

  componentDidMount() {
    this.loadRepositories()
  }

  componentDidUpdate(_, prevState) {
    const { page } = this.state

    if (page !== prevState.page) {
      this.loadRepositories()
    }
  }

  loadRepositories = async () => {
    this.setState({ loading: true })

    const { navigation } = this.props
    const { page } = this.state
    const user = navigation.getParam('user')
    const { data } = await Api.get(`/users/${user.login}/repos`, {
      params: {
        sort: 'created',
        page,
      },
    })

    this.setState({ repositories: data, loading: false })
  }

  handleOnLoadMore = () => {
    const { page } = this.state
    this.setState({ page: page + 1 })
  }

  handleOnRefresh = () => {
    this.setState({ repositories: [], page: 1 })
    this.loadRepositories()
  }

  render() {
    const { navigation } = this.props
    const { repositories, loading, refreshing } = this.state
    const user = navigation.getParam('user')

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name || user.login}</Name>
          <Bio>{user.bio || 'No bio'}</Bio>
        </Header>

        <Repositories
          data={repositories}
          onEndReachedThreshold={0}
          onEndReached={this.handleOnLoadMore}
          onRefresh={this.handleOnRefresh}
          refreshing={refreshing}
          keyExtractor={repo => String(repo.id)}
          renderItem={({ item }) => <RepositoryInfo repository={item} />}
        />

        {loading && <ActivityIndicator color="#7159c1" />}
      </Container>
    )
  }
}

export default User
