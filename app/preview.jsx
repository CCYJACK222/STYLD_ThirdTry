import { ScrollView, StyleSheet, Text, View, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

//images
import StreetWear from '../assets/img/Streetwear.jpg'
import ClassyWear from '../assets/img/Classywear.jpg'
import Logo from '../assets/img/STYLD Logo.png'

const Preview = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 80}} showsVerticalScrollIndicator={false}>
      
      <Image source={Logo} style={{width: 50, height: 50, marginBottom: 20}} />
      

        <Text style={styles.heading2}>Your Style Journey Starts Here</Text>

        <Text style={{
          color: '#ffffff7b',
          marginVertical: 10,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Preview what STYLD will unlock for you
        </Text>
      

        <View style={styles.cardContainer1}>
           <Image style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>AI Daily Mixes</Text>
            <Text style={styles.subText}>Personalized outfit combinations</Text>
            <Text style={{color: '#E0B0FF'}}>Shuffling</Text>
          </View>
        </View>


        <View style={styles.cardContainer2}>
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Virtual Try-On</Text>
            <Text style={styles.subText}>See before you buy</Text>
           </View>
          <Image style={styles.img} />
        </View>


        <View style={styles.cardContainer3}>
           <Image style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Curated Marketplace</Text>
            <Text style={styles.subText}>Exclusive designer access</Text>
           </View>
        </View>
        

        <View style={styles.cardContainer4}>
           <Image style={styles.img} />
           <View style={{flex:1}}>
            <Text style={styles.normalText}>Trending Now</Text>
            <Text style={styles.subText}>48,263+ active stylists</Text>
           </View>
        </View>



      </ScrollView>

      <View style={styles.btnContainer}>
          <Pressable style={({pressed}) => [styles.backbtn, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>Back</Text>
          </Pressable>
          <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('account')}>
            <Text style={{fontSize: 16}}>Continue  > </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Preview

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


    cardContainer1: {
        width: 350,
        marginVertical: 30,
        backgroundColor: '#301934',
        borderRadius: 20,
        padding: 30,
        borderColor: '#ffffff14',
        borderWidth: 0.5,
    },

    subContainer1: {

    },

    cardContainer2: {
        width: 350,
        marginVertical: 30,
        backgroundColor: '#00009ba6',
        borderRadius: 20,
        padding: 30,
        borderColor: '#ffffff14',
        borderWidth: 0.5,
    },

    cardContainer3: {
        width: 350,
        marginVertical: 30,
        backgroundColor: '#8B8000',
        borderRadius: 20,
        padding: 30,
        borderColor: '#ffffff14',
        borderWidth: 0.5,

    },

    cardContainer4: {
        width: 350,
        marginVertical: 30,
        backgroundColor: '#808080',
        borderRadius: 20,
        padding: 30,
        borderColor: '#ffffff14',
        borderWidth: 0.5,

    },


    cardSelected: {
        borderColor: '#ffffff',
        borderWidth: 1,
    },

    normalText: {
        color: '#ffffff',
        fontSize: 18,
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