/**
 * 应用主题
 * 
 * 定义一些全局的样式
 * 
 */

import {StyleSheet} from 'react-native';

export const ThemeColor = {
  bg: '#F5FCFF', // 页面常规背景颜色
}

// UI主题
// 后面可以使用 updateTheme 来更新主题
// @links https://react-native-training.github.io/react-native-elements/docs/customization.html
export const ElementsTheme = {
  colors: {
    primary: 'hotpink',
    // secondary: 'pink',
  },
  Text: {
    style: {
      color: '#333',
    },
    h1Style: {
      fontSize: 32,
      color: 'hotpink',
    },
    h2Style: { 
      fontSize: 28,
      color: '#333',
    },
    h3Style: { 
      fontSize: 26,
      color: '#333',
    },
    h4Style: { 
      fontSize: 24,
      color: '#333',
    },
  },
  Header: {
    barStyle: 'light-content',
  },
  Icon: {
    color: '#fff',
  }
};

export const AppTheme = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: ThemeColor.bg,
  },
});