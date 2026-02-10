import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'


import ProfilePic from '../assets/img/ProfilePictureThird.png'
import ProfilePic2 from '../assets/img/Random ProfilePicSecond.webp'
import ProfilePic3 from '../assets/img/RandomProfilePic.webp'
import Logo from '../assets/img/STYLD Logo.png'

const Plans = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 40}} showsVerticalScrollIndicator={false}>
      
      <Image source={Logo} style={{width: 300, height: 300, marginBottom: 20}} />
      

        <Text style={styles.heading1}>STYLD</Text>

        <Text style={{
          color: '#ffffff',
          marginVertical: 10,
          fontSize: 24,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Where Style Meets {"\n"}Intelligence
        </Text>
      
        <Text style={{
          color: '#ffffff',
          textAlign: 'center', 
          marginVertical: 20,
           }}> 
          AI-powered styling + Virtual try-on + Curated {"\n"}marketplace
        </Text>

        <Text style={{
          color: '#ffffff',
          textAlign: 'center', 
          marginVertical: 20,
           }}> 
          Join 49,905+ users styling smarter
        </Text>

        <View style={styles.reviewCard}>
           <Image source={ProfilePic} style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Sophia Laurent</Text>
            <Text style={styles.subText}>Fashion Director</Text>
            <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"A masterclass in personal style"</Text>
           </View>
        </View>
        <View style={styles.reviewCard}>
           <Image source={ProfilePic2} style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Marcus Chen</Text>
            <Text style={styles.subText}>Creative Consultant</Text>
            <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"Elevated my entire wardrobe"</Text>
           </View>
        </View>

        <View style={styles.reviewCard}>
           <Image source={ProfilePic3} style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Isabella Rose</Text>
            <Text style={styles.subText}>Brand Strategist</Text>
            <Text style={[styles.subText, {marginTop: 20, fontStyle: 'italic'}]}>"The future of fashion technology"</Text>
           </View>
        </View>
        
        <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('next screen')}>
           <Text style={{fontSize: 16}}>Continue  > </Text>
        </Pressable>
        
        <Text style={styles.subText}>Personalized in under 60 seconds</Text>
      </ScrollView>
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
    heading1: {
        color: Colors.Secondary,
        fontSize: 92,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        marginBottom: 10,
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
    btn: {
      backgroundColor: '#ffffff',
      padding: 25,
      paddingHorizontal: 50,
      borderRadius: 35,
      marginVertical: 20,
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
      resizeMode: 'cover',
      borderWidth: 1,
      borderColor: '#ffffff14',
      borderRadius: 50,
      marginRight: 10,
    }
})