import { ScrollView, StyleSheet, Text, View, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

//images
import StreetWear from '../assets/img/Streetwear.jpg'
import ClassyWear from '../assets/img/Classywear.jpg'
import BusinessWear from '../assets/img/Businesswear.webp'
import Y2KWear from '../assets/img/Y2Kwear.webp'
import GlamWear from '../assets/img/Glamwear.webp'
import Minimalist from '../assets/img/Minimalistwear.webp'  
import AthleticWear from '../assets/img/Athleticwear.webp'
import Logo from '../assets/img/STYLD Logo.png'

const Profile = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [location, setlocation] = useState('');
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
      
        <Image source={Logo} style={{width: 50, height: 50, marginBottom: 20, top:0}} />
      

        <Text style={styles.heading2}>My STYLD</Text>

        <Text style={{
          color: '#ffffff9a',
          marginVertical: 8,
          marginBottom: 20,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Help us personalize your experience
        </Text>

        <Text style={{color: '#ffffffd0',
          marginVertical: 8,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Gender
        </Text>
      

        <View style={styles.genderContainer}>
          <View style={styles.optionsContainer}>
           <Text style={styles.normalText}>Male</Text>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.normalText}>Female</Text>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.normalText}>Non-Binary</Text>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.normalText}>Prefer not to say</Text>
          </View>
        </View>

        <Text 
          style={{color: '#ffffffd0',
          marginVertical: 8,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}> 
          Where are you from?
        </Text>

        <TextInput
          placeholder='e.g., New York, London, Tokyo'
          style={styles.inputStyle}
          value={location}
          onChangeText={setlocation}
        />


        <Text style={[styles.normalText, {marginVertical:8, fontSize: 14}]}>
          We'll curate styles and trends for your region
        </Text>






        <View style={styles.btnContainer}>
          <Pressable style={({pressed}) => [styles.backbtn, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>Back</Text>
          </Pressable>
          <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('goals')}>
            <Text style={{fontSize: 16}}>Continue  > </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Primary,
        height: '100%',
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', //Centers horizontally
        flex: 1,
        position: 'absolute',
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