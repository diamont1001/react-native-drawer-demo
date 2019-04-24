/**
 * 设置页面
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SettingScreen extends Component<Props> {
  constructor() {
    super();
  }

  _logoutAsync = async () => {
    await AsyncStorage.removeItem('userToken');

    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Text style={styles.welcome}>SettingScreen</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View>
          <Button title="退出登录" onPress={this._logoutAsync}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});