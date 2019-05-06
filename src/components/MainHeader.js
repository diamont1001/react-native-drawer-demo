/**
 * 主页的头部组件
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ThemeProvider, Header, Icon} from 'react-native-elements';

import {displayName as _displayName} from '../../app.json';

type Props = {};
export default class MainHeader extends Component<Props> {
  render() {
    return (
      <Header
        leftComponent={<Icon name={'menu'} onPress={this.props.navigation.openDrawer} />}
        centerComponent={{ text: _displayName, style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  }
}