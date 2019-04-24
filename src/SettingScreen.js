/**
 * 设置页面
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = {};
export default class SettingScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>SettingScreen</Text>
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
});