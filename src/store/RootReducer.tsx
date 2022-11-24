import {combineReducers} from 'redux';
import SimpsonsSlice from './slicers/SimpsonsSlice';


const RootReducer = combineReducers({
simpsonsState:SimpsonsSlice
  
});

export default RootReducer;
