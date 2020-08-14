import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator initialRouteName="SONGS">
      <Stack.Screen name="SONGS" component={HomeScreen} />
      <Stack.Screen name="SONG DETAILS" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppContainer;
