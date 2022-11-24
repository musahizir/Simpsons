

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Router from './src/router/router';
import Toast from 'react-native-toast-message'

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
     <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
     <Router/>
     <Toast/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
