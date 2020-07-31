//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Image, TabBarIcon } from 'react-native';
//import all the basic component we have used

//import Ionicons to show the icon for bottom options

//import React Navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { Transition } from 'react-native-reanimated';

import Home from './screens/Home';
import Search from './screens/Search';
import NewPost from './screens/NewPost';
import Notification from './screens/Notification';
import UserProfile from './screens/UserProfile';
import Comments from './screens/Comments';
import Post from './screens/Post';
import Splash from './screens/Splash';

import homeIcon from './assets/images/icons/homeIcon.png';
import searchIcon from './assets/images/icons/mapSearch.png';
import newPostIcon from './assets/images/icons/plus-button-small.png';
import notiIcon from './assets/images/icons/wishlist.png'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import AppColor from './values/AppColor';

import CircleImg from './component/CircleImg';
import profilePic from './assets/images/profile_pic.jpg'


console.disableYellowBox = true;



const Internal = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    Search: { screen: Search },
    NewPost: { screen: NewPost },
    Notification: { screen: Notification },
    UserProfile: { screen: UserProfile },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#fbfbfb',
      },
      headerTintColor: '#474747',
      title: 'Home',
      //Header title
    },
  }
);

const BottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Image source={homeIcon} style={{ tintColor: tintColor }} />
        )
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Image source={searchIcon} style={{ tintColor: tintColor }} />
        )
      }
    },
    NewPost: {
      screen: NewPost,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Image source={newPostIcon} style={{ tintColor: tintColor }} />
        )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Image source={notiIcon} style={{ tintColor: tintColor }} />
        )
      }
    },
    Profile: {
      screen: UserProfile,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          //<Image source={notiIcon} style={{ tintColor: tintColor }} />
          <CircleImg source={profilePic} size={24}  />
        )
      }
    },
  },
  {

    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        borderTopColor: AppColor.appGrayLight1,
        borderTopWidth: 1,
        backgroundColor: AppColor.appGrayLight,
        height: 55
      },
      
    },
  }
);

const MainNavigator = createStackNavigator(
  {
    Comments: { screen: Comments },
    Posts: {screen: Post},
    TabScreens: { screen: BottomNav }
  },
  {
    initialRouteName: "TabScreens",  
    headerMode: 'none'
  }
);


export default createAppContainer(MainNavigator);