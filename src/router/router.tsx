import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';

type Props = {}

const Router = (props: Props) => {
    const Stack = createStackNavigator();
  return (

   <Stack.Navigator>
      <Stack.Screen options={{
        header:()=> <Header title='Simpsons'/>
      }} name="Home" component={HomeScreen} />
    </Stack.Navigator>    
  )
}

export default Router

const styles = StyleSheet.create({})