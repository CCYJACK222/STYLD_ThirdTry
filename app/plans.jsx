import { ScrollView, StyleSheet, Text, View, Pressable, Image, ImageBackground } from 'react-native'
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

const Plans = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 80}} showsVerticalScrollIndicator={false}>
      
      <Image source={Logo} style={{width: 100, height: 100}} />
      

        <Text style={styles.heading2}>Unlock Your Style Potential</Text>

        <Text style={{
          color: '#ffffff40',
          marginVertical: 10,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Choose your membership tier
        </Text>
      

        <View style={styles.cardContainer}>
           <Image style={styles.img} />
           <Text style={styles.normalText}>STYLD BASIC</Text>
           <Text style={styles.normalText}>Urban edge & contemporary culture</Text>
        </View>


        <View style={styles.cardContainer}>
           <Image  style={styles.img} />
           <Text style={ styles.normalText}>Classy</Text>
           <Text style={styles.normalText}>Timeless elegance & sophistication</Text>
        </View>


        <View style={styles.cardContainer}>
           <Image style={styles.img} />
           <Text style={styles.normalText}>Business</Text>
           <Text style={styles.normalText}>Professional power & polished presence</Text>
        </View>
        
   
      </ScrollView>

      <View style={styles.btnContainer}>
          <Pressable style={({pressed}) => [styles.backbtn, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>Back</Text>
          </Pressable>
          <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('homescreens/main')}>
            <Text style={{fontSize: 16}}>Continue  > </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Plans

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Primary,
        height: '100%',
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', //Centers horizontally
        flex: 1,
    },

    heading2: {
        color: Colors.Secondary,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },

    cardContainer: {
        width: 350,
        marginVertical: 50,
        resizeMode: 'cover',
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff20',
        opacity: 0.5,
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
    }
})