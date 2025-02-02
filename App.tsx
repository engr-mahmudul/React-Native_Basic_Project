import { View, Text } from 'react-native'
import React from 'react'

// Navigation 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screeens 
import Home from './src/screens/Home'
import Details from './src/screens/Details'

export type RootStackParamList = {
  Home: undefined;
  Details: { link: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ title:"Langing Page"}}/>
        <Stack.Screen name='Details' component={Details} options={{title:"Details Page"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App