import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title?:string
    leftComponent?:React.ReactElement
    rightComponent?:React.ReactElement
}

const Header = ({title,leftComponent,rightComponent}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftComponentContainer}>{leftComponent}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightComponentContainer}>{rightComponent}</View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    rootContainer:{
        height:45,
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:'#eee',

    },
    leftComponentContainer:{marginRight:'auto'},
    title:{alignSelf:'center',fontWeight:'bold',fontSize:15},
    rightComponentContainer:{marginLeft:'auto'}

})