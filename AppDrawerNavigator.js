import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyBarterScreen from '../screens/MyBarterScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedItemsScreen from '../screens/MyReceivedItemsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyBarters : {
    screen : MyBarterScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  Setting : {
    screen : SettingScreen
  },
  MyReceivedItems :{
    screen: MyReceivedItemsScreen
  },
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })
