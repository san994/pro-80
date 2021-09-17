
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SpaceCraftScreen from './screens/SpaceCraft';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';

import 'react-native-gesture-handler'
import {NavigationContainer,StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen}/>
          <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
          <Stack.Screen name='StarMap' component={StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

}

const Stack = createStackNavigator();