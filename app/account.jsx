import { ScrollView, StyleSheet, Text, View, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

//images
import StreetWear from '../assets/img/Streetwear.jpg'
import ClassyWear from '../assets/img/Classywear.jpg'
import Logo from '../assets/img/STYLD Logo.png'

const Account = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('') /* */
  const [password, setPassword] = useState('')  
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [fullname, setFullname] = useState('')


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 80}} showsVerticalScrollIndicator={false}>
        
        <Image source={Logo} style={{width: 50, height: 50, marginBottom: 20, top:0}} />
      

        <Text style={styles.heading2}>Welcome to STYLD</Text>

        <Text style={{
          color: '#ffffff9a',
          marginVertical: 8,
          marginBottom: 20,
          fontSize: 16,
          textAlign: 'center', //centers text horizontally within its container
        }}>
          Create your account to begin
        </Text>

        

        <View>
          <Text style={[styles.normalText, {marginTop: 10}]}>Full Name</Text>
          <TextInput
            placeholder='Enter your name'
            placeholderTextColor={'#ffffff41'}
            style={styles.inputStyle}
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        <View>
          <Text style={[styles.normalText, {marginTop: 10}]}>Email Address</Text>
          <TextInput
            placeholder='your@email.com'
            placeholderTextColor={'#ffffff41'}
            style={styles.inputStyle}
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={[styles.normalText, {marginTop: 10}]}>Password</Text>
          <TextInput
            placeholder='Enter password'
            placeholderTextColor={'#ffffff41'}
            style={styles.inputStyle}
            value={password}
            onChangeText={setPassword}
            secureTextEntry = {true}
          />
        </View>

        <View>
          <Text style={[styles.normalText, {marginTop: 10}]}>Age</Text>
          <TextInput
            placeholder='18'
            placeholderTextColor={'#ffffff41'}
            style={styles.inputStyle}
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View>
          <Text style={[styles.normalText, {marginTop: 10}]}>Username</Text>
          <TextInput
            placeholder='@username'
            placeholderTextColor={'#ffffff41'}
            style={styles.inputStyle}
            value={username}
            onChangeText={setUsername}
          />
        </View>


        <Text style={[styles.inputStyle, {marginTop: 20, fontSize: 12, textAlign: 'center'}]}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>





        </ScrollView>
        <View style={styles.btnContainer}>
          <Pressable style={({pressed}) => [styles.backbtn, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>Back</Text>
          </Pressable>
          <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed]} onPress={() => navigation.navigate('plans')}>
            <Text style={{fontSize: 16}}>Continue  > </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Account

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
      textAlign: 'left',
      width: 330,
      marginTop: 5,
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
    },

    informationContainer: {


    },
})