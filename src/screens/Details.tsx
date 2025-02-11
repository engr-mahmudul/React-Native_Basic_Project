import {  Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'


type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}:DetailsProps) => {
    const {link} = route.params
  const [message, setMessage] = useState('')
  const [input, setInput] = useState({a:'',b:''})
  const handlePress = () => {
    setMessage("Am I cute ?")
  };
  const showInput = () =>{
    Alert.alert(`A is: ${input.a} and B is: ${input.b}`)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>Hello Everyone</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image 
        style={styles.imageSize} 
        source={{uri:link}}/>
      </TouchableOpacity>
      <Text style={{marginTop:30, fontSize:20, color:'gray'}}>{message}</Text>
      <TextInput 
      placeholder='Write here something' placeholderTextColor="gray"
      value={input.a}
      style={{borderWidth:2, borderColor:'black', borderRadius:20, width:'80%', marginVertical:5}}
      onChangeText={(text)=>setInput(prevState => ({ ...prevState, a: text }))}
      />
      <TextInput 
      placeholder='Write here something' placeholderTextColor="gray"
      value={input.b}
      style={{borderWidth:2, borderColor:'black', borderRadius:20, width:'80%'}}
      onChangeText={(text)=>setInput(prevState => ({ ...prevState, b: text }))}
      />
      <Pressable style={{backgroundColor:'green', borderWidth:2, borderBlockColor:'black', borderRadius:20, width:'80%',padding:10, marginVertical:10}}
      onPress={()=>showInput()}>
        <View >
          <Text style={{color:"white", textAlign:'center'}}> Press me to See your Input</Text>
        </View>
        
      </Pressable>
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