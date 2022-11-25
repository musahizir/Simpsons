import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  route:{
    params:{
      name:string;
      avatar:string;
      job:string;
      description:string;
    }
  }
}

const SimpsonDetailsScreen = ({route}: Props) => {
  console.log(route.params.name)
  return (
    <ScrollView style={styles.rootContainer}>
     <Image 
     style={styles.image}
     source={{uri:route.params.avatar}}
     resizeMode={'contain'}
     />
     <Text style={styles.name}>{route.params.name}</Text>
     <Text style={styles.job}>{route.params.job}</Text>
     <Text style={styles.description}>{route.params.description}</Text>
    </ScrollView>
  )
}

export default SimpsonDetailsScreen

const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
  rootContainer:{
  paddingHorizontal:20
  },
  name:{
    alignSelf:'center',
    fontSize:27,
    
  },
  job:{
    alignSelf:'center',
    color:'#999',
    fontSize:17,
  },
  description:{
   marginVertical:20,
   color:'#999'
  },
  image:{
    height:(width*2)/3,
    width:'100%',
    marginVertical:25
  }
})