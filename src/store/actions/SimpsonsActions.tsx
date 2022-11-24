import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { SimpsonsItemType } from '../../types/SimpsonsItemType'

type FetcSimpsonsReturn = Array<SimpsonsItemType>


export const fetchSimpsons = createAsyncThunk(
    'simpsons/fetchSimpsons', async (_,{rejectWithValue})=> {
     try {
      const response:FetcSimpsonsReturn = await (await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')).data
      return response
     } catch (error) {
       return rejectWithValue('Fetch Error')
     }
    })