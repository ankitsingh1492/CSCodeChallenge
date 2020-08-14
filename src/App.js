import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AppContainer from './navigator/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './store/Store'

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  );
}