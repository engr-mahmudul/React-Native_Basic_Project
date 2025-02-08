import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
    const imageLink = 'https://fullbloomclub.net/wp-content/uploads/2023/07/cute-easy-drawing4.jpg'
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Pressable 
      style={styles.buttonStyle} 
      onPress={()=>navigation.navigate('Details',{link:imageLink})}
      >
        <Text> Go to Details page</Text>
      </Pressable>
      <Pressable 
      style={styles.buttonStyle} 
      onPress={()=>navigation.navigate('StyleGround')}
      >
        <Text> Go to Style Ground Page</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black'
    },
    buttonStyle:{
        backgroundColor:'gray',
        padding:10,
        borderRadius:20,
        marginVertical:20
    }
})