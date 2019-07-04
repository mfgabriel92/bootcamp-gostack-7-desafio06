import User from './index'

export default {
  screen: User,
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('user').name,
  }),
}
