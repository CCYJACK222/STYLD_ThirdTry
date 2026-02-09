import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is home </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Primary,
        height: '100%'
    }
})