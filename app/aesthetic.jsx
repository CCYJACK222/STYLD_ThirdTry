import { ScrollView, StyleSheet, Text, View, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'


import StreetWear from '../assets/img/Streetwear.jpg'
import ProfilePic2 from '../assets/img/Random ProfilePicSecond.webp'
import ProfilePic3 from '../assets/img/RandomProfilePic.webp'
import Logo from '../assets/img/STYLD Logo.png'

const Aesthetic = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 40}} showsVerticalScrollIndicator={false}>
      
      <Image source={Logo} style={{width: 50, height: 50, marginBottom: 20}} />
      

        <Text style={styles.heading2}>Select Your Aesthetic</Text>

        <Text style={{
          color: '#ffffff40',
          marginVertical: 10,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Choose the style that resonates
        </Text>
      

        <View style={styles.reviewCard}>
           <ImageBackground source={StreetWear} style={styles.img} />
            <View style={{flex:1}}>
              <Text style={styles.normalText}>Sophia Laurent</Text>
              <Text style={styles.subText}>Fashion Director</Text>
              <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"A masterclass in personal style"</Text>
            </View>
        </View>
        <View style={styles.reviewCard}>
           <ImageBackground source={ProfilePic2} style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Marcus Chen</Text>
            <Text style={styles.subText}>Creative Consultant</Text>
            <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"Elevated my entire wardrobe"</Text>
           </View>
        </View>

        <View style={styles.reviewCard}>
           <ImageBackground source={ProfilePic3} style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Isabella Rose</Text>
            <Text style={styles.subText}>Brand Strategist</Text>
            <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"The future of fashion technology"</Text>
           </View>
        </View>
        


        <Text style={styles.subText}>Personalized in under 60 seconds</Text>
      </ScrollView>

      <View style={styles.btnContainer}>
          <Pressable style={({pressed}) => [styles.backbtn, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>Back</Text>
          </Pressable>
          <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('profile')}>
            <Text style={{fontSize: 16}}>Continue  > </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Aesthetic

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

    reviewCard: {
        borderRadius: 24,
        borderWidth: 1,
        backgroundColor:'#ffffff14',
        borderColor: '#ffffff14',
        marginVertical: 8,
        marginHorizontal: 20,
        padding: 30,
        width: 350,
        flexDirection: 'row',
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
      width: 100,
      height: 100,
      resizeMode: 'contain',
      borderWidth: 1,
      borderColor: '#ffffff14',
      borderRadius: 50,
      marginRight: 10,
    }
})