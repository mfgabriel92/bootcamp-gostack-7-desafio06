import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'
import './config/reactotron'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4f379b" />
      <Routes />
    </>
  )
}

export default App
