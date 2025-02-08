import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'


type StyleGroundProps = NativeStackScreenProps<RootStackParamList, 'StyleGround'>

const StyleGround = ({navigation}:StyleGroundProps) => {
    const [style, setStyle] = useState('');
    const centerStyle ={
        flexDirection: 'row',
        justifyContent: 'center',
    }
    const spaceBetweenStyle ={
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    const spaceAroundStyle ={
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    const dynamicStyle = style === 'center' ? centerStyle : style === 'space-between'? spaceBetweenStyle : style === 'space-around' ? spaceAroundStyle: {};
  return (
    <View style={styles.pageContainer}>
      <Pressable
            style={styles.buttonStyle} 
            onPress={()=>setStyle('center')}
            >
              <Text style={{textAlign:'center', color:'white'}}>Make Them Center</Text>
    </Pressable>
      <Pressable
            style={styles.buttonStyle} 
            onPress={()=>setStyle('space-between')}
            >
              <Text style={{textAlign:'center', color:'white'}}> Space Between</Text>
    </Pressable>
      <Pressable
            style={styles.buttonStyle} 
            onPress={()=>setStyle('space-around')}
            >
              <Text style={{textAlign:'center', color:'white'}}> Space Around</Text>
    </Pressable>
      
      <View style={[styles.styleContainer, dynamicStyle]}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </View>
  )
}

export default StyleGround

const styles = StyleSheet.create({
    pageContainer:{
        flex:1,
        // backgroundColor:'gray'
    },
    styleContainer:{
        borderWidth:1,
        borderColor:'black', 
        borderStyle:'solid',
        margin:10,
        padding:10,
        flex:1,
        backgroundColor:'white'
    },
    box1:{
        height:80,
        width:80,
        backgroundColor:'red', 
        margin:5
    },

    box2:{
        height:80,
        width:80,
        backgroundColor:'green', 
        margin:5
    },

    box3:{
        height:80,
        width:80,
        backgroundColor:'blue', 
        margin:5
    },
    buttonStyle:{
        backgroundColor:'green',
        padding:10,
        borderRadius:20,
        marginVertical:5,
        width:'50%',
        
    }
})