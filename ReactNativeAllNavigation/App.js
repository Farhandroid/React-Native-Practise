import React from 'react';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenue from "./src/SideMenue";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  User: UserScreen,
});

// const AppNavigator = createBottomTabNavigator({
//     Home: HomeStack,
//     User: UserScreen,
// });

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  User: UserScreen,
},{
  drawerType :'front',
  contentComponent: SideMenue
});

export default createAppContainer(AppNavigator);
