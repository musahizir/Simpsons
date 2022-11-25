import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

type Props = {
    text:string
}

const HeaderBackButtonWithText = ({text}: Props) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=> navigation.goBack()} style={styles.rootContainer}>
       <Fontisto name='angle-left' color={'#2e86de'} size={18} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default HeaderBackButtonWithText

const styles = StyleSheet.create({
    rootContainer:{
    flexDirection:'row',
    alignItems:'center'
    },
    text:{
        marginLeft:2,
        fontWeight:'600',
        fontSize:15,
        color:'#2e86de'
    }
})