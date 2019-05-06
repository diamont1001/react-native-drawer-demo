/**
 * 帮助页面
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

import {AppTheme} from './theme';

import MainHeader from './components/MainHeader';

type Props = {};
export default class HelpScreen extends Component<Props> {
  render() {
    return (
      <View style={AppTheme.pageContainer}>
        <MainHeader {...this.props} />
        <ScrollView>
          <Text style={styles.welcome}>HelpScreen</Text>
        </ScrollView>
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