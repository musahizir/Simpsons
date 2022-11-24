/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import store, { persistor } from './src/store/store';


const Main = () => {
 return ( 
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>   
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </PersistGate>
  </Provider>
 )
   
      
}

AppRegistry.registerComponent(appName, () => Main);
