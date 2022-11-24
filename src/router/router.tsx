import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

type Props = {}

const Router = (props: Props) => {
    const Stack = createStackNavigator();
  return (

   <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>    
  )
}

export default Router

const styles = StyleSheet.create({})