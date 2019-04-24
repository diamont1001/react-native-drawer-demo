/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';
import {createSwitchNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";
import {ThemeProvider, Header, Icon} from 'react-native-elements';

import AuthLoadingScreen from './src/AuthLoadingScreen';
import AuthScreen from './src/AuthScreen';
import MenuScreen from './src/MenuScreen';
import HomeScreen from './src/HomeScreen';
import SettingScreen from './src/SettingScreen';
import HelpScreen from './src/HelpScreen';
import MainHeader from './src/components/MainHeader';

import {displayName as DisplayName} from './app.json';

// UI主题
// 后面可以使用 updateTheme 来更新主题
// @links https://react-native-training.github.io/react-native-elements/docs/customization.html
const theme = {
  colors: {
    primary: 'hotpink',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// 应用界面组
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: (props => {
      return (
        <ThemeProvider theme={theme}>
          <MainHeader {...props} />
          <ScrollView style={styles.container}>
            <HomeScreen {...props}/>
          </ScrollView>
        </ThemeProvider>
      );
    }),
  },
  Settings: {
    screen: (props => {
      return (
        <ThemeProvider theme={theme}>
          <MainHeader {...props} />
          <ScrollView style={styles.container}>
            <SettingScreen {...props}/>
          </ScrollView>
        </ThemeProvider>
      );
    }),
  },
  Help: {
    screen: (props => {
      return (
        <ThemeProvider theme={theme}>
          <MainHeader {...props} />
          <ScrollView style={styles.container}>
            <HelpScreen {...props}/>
          </ScrollView>
        </ThemeProvider>
      );
    }),
  },
}, {
  drawerPosition: 'left',
  edgeWidth: 50,
  contentComponent: props => (<MenuScreen {...props}/>),
});

const MySwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen, // 初始化，查询登录状态过程，loading
  App: MyDrawerNavigator, // 已登录的用户，进入应用界面
  Auth: (props => { // 未登录，进入登录界面
    return (
      <ThemeProvider theme={theme}>
        <AuthScreen {...props}/>
      </ThemeProvider>
    );
  })
}, {
  initialRouteName: 'AuthLoading',
});

const MyApp = createAppContainer(MySwitchNavigator);

export default MyApp;