import { createSlice } from '@reduxjs/toolkit'
import { SimpsonsItemType } from '../../types/SimpsonsItemType'
import { fetchSimpsons } from '../actions/SimpsonsActions'
import { SimpsonsInitialState } from '../initialStates/SimpsonsInitialState'


const SimpsonsSlice = createSlice({
  name: 'simpsons',
  initialState: SimpsonsInitialState,
  reducers: {

    addSimpsonsItem(state, action: { payload: { values:{name: string; job: string; avatar: string; description: string} } }) {

      let randomId = Math.floor(Math.random() * 2000).toString()
      return {
        ...state,
        simpsonsArray: [...state.simpsonsArray, 
          { name: action.payload.values.name, 
            avatar: action.payload.values.avatar, 
            description: action.payload.values.avatar, 
            id: randomId, 
            job: action.payload.values.job }]

      }
    },

    deleteSimpsonsItem(state, action: { payload: { id: string } }) {

      return {
        ...state,
        simpsonsArray: state.simpsonsArray.filter((item) => item.id != action.payload.id)
      }
    },

    moveSimpsonsItem(state, action: { payload: { id: string, type: 'up' | 'down', index: number, } }) {

      let tempArray = [...state.simpsonsArray]
      let selectedItemIndex = action.payload.index
      let selectedItem = tempArray[selectedItemIndex];
      let removedSelectedItemArray = tempArray.filter((item) => item.id != action.payload.id)
      let result: Array<SimpsonsItemType> = []

      if (action.payload.type == 'up' && selectedItemIndex > 0) {
        removedSelectedItemArray.forEach((item, index) => index == selectedItemIndex - 1 ? result.push(selectedItem, item) : result.push(item))
        return {
          ...state,
          simpsonsArray: [...result]
        }
      } else if (action.payload.type == 'down' && selectedItemIndex < state.simpsonsArray.length - 1) {
        removedSelectedItemArray.forEach((item, index) => index == selectedItemIndex ? result.push(item, selectedItem) : result.push(item))
        return {
          ...state,
          simpsonsArray: [...result]
        }
      }

      return {
        ...state
      }


    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSimpsons.fulfilled, (state, action) => {
      return {
        ...state,
        simpsonsArray: state.simpsonsArray?.length > 0 ? state.simpsonsArray : action.payload,
        isLoading: false,
        isError: false
      }
    }),
      builder.addCase(fetchSimpsons.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isError: false
        }
      }),
      builder.addCase(fetchSimpsons.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      })
  },

})

export const { moveSimpsonsItem, deleteSimpsonsItem, addSimpsonsItem } =
  SimpsonsSlice.actions;
export default SimpsonsSlice.reducer;