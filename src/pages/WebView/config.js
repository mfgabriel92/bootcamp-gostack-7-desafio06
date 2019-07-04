import WebView from './index'

export default {
  screen: WebView,
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('name'),
  }),
}
