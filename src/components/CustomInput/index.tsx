import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useField} from 'formik';

type Props = {
    style:any;
    multiline:boolean;
    keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    fieldValueName:string

}

const CustomInput = ({style,multiline,keyboardType,fieldValueName,...rest}: Props) => {

    const [field, meta, helpers] = useField(fieldValueName);
    
  return (
    <>
    <TextInput
          style={{...style,textAlignVertical:multiline ? 'top' : 'center',paddingLeft:8}}
          multiline={multiline}
          keyboardType={keyboardType}
          {...rest}
          value={field.value}
          onBlur={() => {
            helpers.setTouched(!meta.touched)
          }}
          onChangeText={helpers.setValue}
        />
        </>
  )
}

export default CustomInput

const styles = StyleSheet.create({})