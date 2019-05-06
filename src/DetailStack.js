/**
 * 详情页面（二级页面）
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {Text, Header, Icon} from 'react-native-elements';

import {AppTheme} from './theme';

type Props = {};
export default class DetailStack extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppTheme.pageContainer}>
        <Header
          leftComponent={<Icon name={'chevron-left'} onPress={() => this.props.navigation.goBack()} />}
          centerComponent={{text: '详情二级页面', style: {color: '#fff'}}}
        />
        <ScrollView>
          <Text style={styles.welcome}>二级详情页</Text>
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