import {createSlice} from '@reduxjs/toolkit'
import { SimpsonsInitialState } from '../initialStates/SimpsonsInitialState'

const SimpsonsSlice = createSlice({
name:'simpsons',
initialState:SimpsonsInitialState,
reducers:{}

})

export const {} =
  SimpsonsSlice.actions;
export default SimpsonsSlice.reducer;