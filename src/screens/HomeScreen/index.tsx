import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/storeHooks'
import { fetchSimpsons } from '../../store/actions/SimpsonsActions'
import { useFocusEffect } from '@react-navigation/native';
import SimpsonsItem from '../../components/SimpsonsItem'
import { SimpsonsItemType } from '../../types/SimpsonsItemType'
import HomeStickyButton from '../../components/HomeStickyButton';


type Props = {}

const HomeScreen = (props: Props) => {
  const dispatch = useAppDispatch()
  const {simpsonsArray} = useAppSelector(state=> state.simpsonsState)
  
  // Flatlist Optimization
  const renderItem = ({item,index}:{item: SimpsonsItemType,index:number}) => <SimpsonsItem index={index} item={item}/>
  const keyExtractor=(item: object, index: number) => index.toString();
  const SIMPSONS_ITEM_HEIGHT = 60
  const getItemLayout = (data:any, index:number) => {
    return {
      length: SIMPSONS_ITEM_HEIGHT,
      offset: SIMPSONS_ITEM_HEIGHT * data.length,
      index,
    };
  };

useFocusEffect(useCallback(
  () => {
    dispatch(fetchSimpsons())
    return () => {
    }
  },
  [],
)
)

  return (
    <View style={styles.rootContainer}>
        {
        simpsonsArray != undefined ?
        <FlatList
        data={simpsonsArray}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        />: null
      }
      <HomeStickyButton/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  rootContainer:{flex:1,backgroundColor:'#f2f2f2',zIndex:1}
})