import { StyleSheet, Button, View, Text, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CustomInput from '../../components/CustomInput'
import { useAppDispatch } from '../../store/storeHooks'
import { addSimpsonsItem } from '../../store/slicers/SimpsonsSlice'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const SimpsonsAddScreen = (props: Props) => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const handleFormikSubmit = (values:{name:string;job:string;description:string;avatar:string}) => {
    dispatch(addSimpsonsItem({values}))
    Toast.show({
      text1:'Success',
      type:'success',
      text2:'Character Successfully Added'
      
    })
    navigation.goBack()
  }
  return (
    <ScrollView style={{flex:1,paddingHorizontal:10}} keyboardShouldPersistTaps='handled'>
    <Formik
     initialValues={{ name: '',job:'',description:'',avatar:'' }}
     onSubmit={values => handleFormikSubmit(values)}
   >
     {({handleSubmit}) => (
       <>
         <Text style={styles.title}>Name Surname:</Text>
         <CustomInput
         fieldValueName='name'
         keyboardType='default'
         multiline={false}
         style={styles.input}
         />
        <Text style={styles.title}>Job Title:</Text>
         <CustomInput
         fieldValueName='job'
         keyboardType='default'
         multiline={false}
         style={styles.input}
         />
        <Text style={styles.title}>About Him/Her:</Text>
         <CustomInput
         fieldValueName='description'
         keyboardType='default'
         multiline={true}
         style={{...styles.input,minHeight:100}}
         />
          <Text style={styles.title}>Image Link:</Text>
         <CustomInput
         fieldValueName='avatar'
         keyboardType='default'
         multiline={false}
         style={styles.input}
         />
         <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Character</Text>
         </Pressable>
       </>
     )}
   </Formik>
   </ScrollView>
     )
}

export default SimpsonsAddScreen

const styles = StyleSheet.create({
  input:{
    borderRadius:4,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  title:{
    fontSize:15,
    marginVertical:4,
    marginTop:12
  },
  buttonContainer:{
    backgroundColor:'#2e86de',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:15,
    borderRadius:7,
    marginTop:20
  },
  buttonText:{
    color:'white'
  }
})