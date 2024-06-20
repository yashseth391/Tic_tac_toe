import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Headerfile from './components/Headerfile'
import Interface from './components/Interfacefile'
import Interfacefile from './components/Interfacefile'

const App = () => {
  return (
    <View>
      <Headerfile/>
      <Interfacefile/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})