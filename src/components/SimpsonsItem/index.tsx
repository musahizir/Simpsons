import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpsonsItemType } from '../../types/SimpsonsItemType'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useAppDispatch } from '../../store/storeHooks'
import { deleteSimpsonsItem, moveSimpsonsItem } from '../../store/slicers/SimpsonsSlice'
type Props = {
    item: SimpsonsItemType
    index: number

}

const SimpsonsItem = ({ item: { avatar, description, id, job, name }, index}: Props) => {
    const dispatch = useAppDispatch()
    const handleUpButton = () => dispatch(moveSimpsonsItem({id:id,type:'up',index:index}))
    const handleDownButton = () => dispatch(moveSimpsonsItem({id:id,type:'down',index:index}))
    const handleDeleteButton = () => dispatch(deleteSimpsonsItem({id:id}))
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.id}>{(index + 1).toString()}</Text>
            <Image style={styles.image} source={{ uri: avatar }} />
            <Text style={styles.name}>{name}</Text>
            <View style={styles.iconsContainer}>
                <Entypo onPress={handleUpButton} style={styles.icon} name='arrow-with-circle-up' size={27} color='#27ae60' />
                <Entypo onPress={handleDownButton} style={styles.icon} name='arrow-with-circle-down' size={27} color='#e74c3c' />
                <Entypo onPress={handleDeleteButton} style={styles.icon} name='trash' size={27} color='#2f3640' />
            </View>
        </View>
    )
}

export default SimpsonsItem

const styles = StyleSheet.create({
    rootContainer: {
        height: 60, backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    id: {
        fontSize: 18
    },
    image: {
        height: '70%',
        width: 50,
        resizeMode: 'contain',
        marginLeft: 2

    },
    name: {
        marginLeft: 12,
        fontSize: 17
    },
    iconsContainer: {
        flexDirection: 'row',
        marginLeft: 'auto'

    },
    icon: {
        paddingHorizontal: 5
    }
})