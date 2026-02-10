import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle:{ backgroundColor: '#ddd'},
        headerTintColor: '#333',
     }}>
        <Stack.Screen name='index' options={{title: 'Home', headerShown: false}} />
        <Stack.Screen name='aesthetic' options={{title: 'Aesthetic Quiz', headerShown: true}} />
        <Stack.Screen name='profile' options={{title: 'Profile Quiz', headerShown: true}} />
        <Stack.Screen name='goals' options={{title: 'Goals Quiz', headerShown: true}} />
        <Stack.Screen name='source' options={{title: 'Source Quiz', headerShown: true}} />
        <Stack.Screen name='preview' options={{title: 'Preview', headerShown: true}} />
        <Stack.Screen name='account' options={{title: 'Account Creation', headerShown: true}} />
        <Stack.Screen name='plans' options={{title: 'Plans', headerShown: true}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})