/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';
import {createStackNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";
import {ThemeProvider, Header, Icon} from 'react-native-elements';

import MenuScreen from './src/MenuScreen';
import HomeScreen from './src/HomeScreen';
import SettingScreen from './src/SettingScreen';
import HelpScreen from './src/HelpScreen';
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

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: (props => {
      return (
        <ThemeProvider theme={theme}>
          <Header
            leftComponent={<Icon name={'menu'} color={'#fff'} onPress={props.navigation.openDrawer} />}
            centerComponent={{ text: DisplayName, style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
          />
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
          <Header
            leftComponent={<Icon name={'menu'} color={'#fff'} onPress={props.navigation.openDrawer} />}
            centerComponent={{ text: DisplayName, style: { color: '#fff' } }}
          />
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
          <Header
            leftComponent={<Icon name={'menu'} color={'#fff'} onPress={props.navigation.openDrawer} />}
            centerComponent={{ text: DisplayName, style: { color: '#fff' } }}
          />
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

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;