import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'


type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}:DetailsProps) => {
    const {link} = route.params
  const [message, setMessage] = useState('')
  const handlePress = () => {
    setMessage("Am I cute ?")
  };
  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>Hello Everyone</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image 
        style={styles.imageSize} 
        source={{uri:link}}/>
      </TouchableOpacity>
      <Text style={{marginTop:30, fontSize:20, color:'gray'}}>{message}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'white',
    height:"100%",
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyle:{
    fontSize: 30,
    fontWeight:"600",
    marginBottom:10
  },
  button:{
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 25,
    
  },
  buttoTextStyle:{
    color: 'white',
    fontWeight:'900'
  },
  imageSize:{
    width:300,
    height:300
  }
})