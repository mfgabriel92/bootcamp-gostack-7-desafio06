import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

class Browser extends Component {
  render() {
    const { navigation } = this.props
    const uri = navigation.getParam('uri')

    return <WebView source={{ uri }} />
  }
}

export default Browser
