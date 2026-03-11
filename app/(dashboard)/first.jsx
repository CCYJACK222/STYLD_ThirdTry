import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Colors } from '../../constants/Colors'

import { useNavigation } from '@react-navigation/native'


const Main = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading2}>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
        backgroundColor: Colors.Primary,
        height: '100%',
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', //Centers horizontally
        flex: 1,
        position: 'relative',
    },

    heading2: {
        color: Colors.Secondary,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },

    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    cardSelected: {
        borderColor: '#ffffff',
        borderWidth: 1,
    },

    normalText: {
        color: '#ffffff',
    },


    btnContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      backgroundColor: 'transparent',
      marginTop: 170,
    },

    btn: {
      backgroundColor: '#ffffff',
      padding: 25,
      paddingHorizontal: 50,
      borderRadius: 35,
      marginVertical: 20,
    },

    backbtn: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#ffffff',
      blurAmount: 10,
      opacity: 0.7,
      padding: 20,
      paddingHorizontal: 30,
      borderRadius: 35,
      marginVertical: 20,
      marginRight: 10,
    },

    pressed:{
      opacity: 0.8,
    },

    subText:{
      color:'#d3d3d3',
      fontSize: 12,
    },

    img: {
      position: 'absolute',
      width: 400,
      height: 250,
      resizeMode: 'cover',
      padding: 20,
      borderRadius: 20,
      opacity: 0.5,
    },

    inputStyle: {
      backgroundColor: '#d3d3d348',
      color: '#ffffff',
      padding: 20,
      borderRadius: 10,
      borderWidth: 0.2,
      borderColor: '#ffffffd6',
      textAlign: 'center',
      width: '90%',
    },

    genderContainer: {
      alignContent: 'center', 
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',

    },
    optionsContainer: {
      borderColor: '#ffffffd6',
      borderWidth: 0.2,
      borderRadius: 10,
      width: 150,
      height: 50,
      padding: 15,
      marginVertical: 5,
      marginHorizontal: 10,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    }
})