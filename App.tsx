import { View, Text } from 'react-native'
import React from 'react'

// Navigation color
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screeens 
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import StyleGround from './src/screens/StyleGround'

export type RootStackParamList = {
  Home: undefined;
  Details: { link: string};
  StyleGround:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
           headerStyle: { backgroundColor: 'green' }, 
           headerTintColor: 'white',
      }}>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={Details} 
        options={{
          title: "Details Page",
          headerStyle: { backgroundColor: "blue" }, // Overriding background color
          headerTintColor: "white", // Explicitly setting text and icon color
        }}
        />
        <Stack.Screen name='StyleGround' component={StyleGround} options={{title:"Style Ground Page"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App