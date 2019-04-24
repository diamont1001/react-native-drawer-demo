/**
 * 左边栏配置面板
 * 
 * Created by 材主<diamont1001@163.com> on 2019/04/19.
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';

import {
  Avatar,
  Text,
  ListItem,
} from 'react-native-elements';

type Props = {};
export default class MenuScreen extends Component<Props> {
  configHandler = (name) => {
    switch(name) {
      case '首页':
        this.props.navigation.navigate('Home');
        this.props.navigation.closeDrawer();
        break;
      case '设置':
        this.props.navigation.navigate('Settings');
        this.props.navigation.closeDrawer();
        break;
      case '帮助':
        this.props.navigation.navigate('Help');
        this.props.navigation.closeDrawer();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={styles.avatarWrapper}>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
              activeOpacity={0.7}
              source={{
                uri:
                  // 'https://b-ssl.duitang.com/uploads/item/201505/26/20150526033548_NjZxS.thumb.700_0.jpeg',
                  'https://images.liqucn.com/img/h1/h965/img201709161425250_info300X300.jpg',
              }}
            />
            <Text style={styles.avatarName}>菜猪小朋友</Text>
            <Text style={styles.avatarDesc}>点击编辑</Text>
          </View>
          <View style={styles.configWrapper}>
            {
              configList.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon, color: '#fff' }}
                  containerStyle={{backgroundColor: '#000', opacity: 0.9}}
                  titleStyle={{color: '#fff'}}
                  onPress={() => this.configHandler(item.title)}
                />
              ))
            }
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const configList = [
  {
    title: '首页',
    icon: 'home',
  },
  {
    title: '设置',
    icon: 'settings',
  },
  {
    title: '帮助',
    icon: 'help',
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    opacity: 0.9,
  },
  avatarWrapper: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  avatarName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  avatarDesc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    opacity: .8,
  },
  configWrapper: {
    flex: 1,
    paddingTop: 20,
  },
})