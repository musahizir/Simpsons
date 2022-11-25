import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';
import SimpsonDetailsScreen from '../screens/SimpsonDetailsScreen';
import HeaderBackButtonWithText from '../components/HeaderBackButtonWithText';
import { StackParamList } from './routerTypes';
import SimpsonsAddScreen from '../screens/SimpsonsAddScreen';

type Props = {}

const Router = (props: Props) => {
    const Stack = createStackNavigator<StackParamList>();
  return (

   <Stack.Navigator>
      <Stack.Screen options={{
        header:()=> <Header title='Simpsons'/>
      }} name="Home" component={HomeScreen} />

       <Stack.Screen options={{
        header:()=> <Header title='Details' leftComponent={<HeaderBackButtonWithText text='Simpsons'/>}/>
      }} name="SimpsonDetails" component={SimpsonDetailsScreen} />
<Stack.Screen options={{
        header:()=> <Header title='Add New Character' leftComponent={<HeaderBackButtonWithText text='Simpsons'/>}/>
      }} name="SimpsonsAdd" component={SimpsonsAddScreen} />
    </Stack.Navigator>    
  )
}

export default Router

const styles = StyleSheet.create({})