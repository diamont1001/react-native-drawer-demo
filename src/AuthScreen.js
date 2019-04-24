/**
 * 登录页面
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};
export default class AuthScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  mySleep = async(ms=1000) => {
    return new Promise(resolve => {
      setTimeout(()=> {
        resolve();
      }, ms);
    });
  }

  _loginAsync = async () => {
    this.setState({
      loading: true,
    })

    // TODO: 模拟登录，这里模拟请求服务器登录，耗时800ms
    await this.mySleep(800);

    this.setState({
      loading: false,
    })

    await AsyncStorage.setItem('userToken', 'userToken_value_helloworld');

    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Input placeholder='手机号' />
        <Input placeholder='密码' />
        <Button title="登录" loading={this.state.loading} onPress={this._loginAsync}/>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
})