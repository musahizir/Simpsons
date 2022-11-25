import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const HomeStickyButton = (props: Props) => {
    const navigation = useNavigation<any>()
    return (
        <Pressable onPress={()=> navigation.push('SimpsonsAdd')} style={styles.rootContainer}>
            <AntDesign name='plus' size={30} color='white' />
        </Pressable>
    )
}

export default HomeStickyButton

const styles = StyleSheet.create({
    rootContainer: {
        position:'absolute',
        zIndex:999,
        width: 60,
        height: 60,
        backgroundColor: '#2e86de',
        borderRadius: 30,
        alignSelf: 'center',
        bottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


    }
})