/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";
import {ThemeProvider, Header, Icon} from 'react-native-elements';

import AuthLoadingScreen from './src/AuthLoadingScreen';
import AuthScreen from './src/AuthScreen';
import MenuScreen from './src/MenuScreen';
import HomeScreen from './src/HomeScreen';
import SettingScreen from './src/SettingScreen';
import HelpScreen from './src/HelpScreen';
import DetailStack from './src/DetailStack';
import MainHeader from './src/components/MainHeader';

import {ElementsTheme} from './src/theme';

// 应用界面组
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingScreen,
  },
  Help: {
    screen: HelpScreen,
  },
}, {
  drawerPosition: 'left',
  edgeWidth: 50,
  contentComponent: props => (<MenuScreen {...props}/>),
});

const MainStack = createStackNavigator({
  Home: {
    screen: MyDrawerNavigator,
  },
  Detail: {
    screen: DetailStack,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

const MySwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen, // 初始化，查询登录状态过程，loading
  App: MainStack, // 已登录的用户，进入应用界面
  Auth: AuthScreen, // 未登录，进入登录界面
}, {
  initialRouteName: 'AuthLoading',
});

const MyApp = createAppContainer(MySwitchNavigator);

const App = () => {
  return (
    <ThemeProvider theme={ElementsTheme}>
      <MyApp />
    </ThemeProvider>
  )
}

export default App;