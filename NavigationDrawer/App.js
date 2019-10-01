import React from 'react';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';
import SideMenue from './src/SideMenue';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Image } from "react-native";



const AppNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },{
    contentComponent: SideMenue,
    drawerBackgroundColor: '#fff',
    contentOptions: {
      activeBackgroundColor: 'blue'
    }
  
  });

export default createAppContainer(AppNavigator);
