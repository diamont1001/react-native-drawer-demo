/**
 * 首页
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, View} from 'react-native';
import {Text, Header, Icon} from 'react-native-elements';

import {AppTheme} from './theme';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={AppTheme.pageContainer}>
        <Header
          leftComponent={<Icon name={'menu'} onPress={this.props.navigation.openDrawer} />}
          centerComponent={{text: 'Home', style: {color: '#fff'}}}
          rightComponent={<Icon name={'announcement'} onPress={() => {
            this.props.navigation.push('Detail')
          }}/>}
        />
        <ScrollView>
          <Text style={styles.welcome}>HomeScreen</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});