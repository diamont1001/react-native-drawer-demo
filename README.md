# react-native-drawer-demo

## 效果预览

<img width="220px" align="left" src="https://user-images.githubusercontent.com/7159888/56631612-9e5d2280-6688-11e9-8a37-801736ad1dea.png" />
<img width="220px" src="https://user-images.githubusercontent.com/7159888/56631617-a2894000-6688-11e9-8886-407dd14e4080.png" />

## 依赖一览

本 DEMO 为实现一种通用的类似探探APP的左右划屏的交互UI框架，有新APP开发需求的，可以直接 clone 后继续开发。

| # | 所用框架/库及版本 |
| ------ | ------ |
| 基础框架 | [react-native 0.59.5](https://github.com/mochajs/mocha) |
| 导航 | [react-navigation 3.8.1](https://reactnavigation.org/en/)，使用了其中的 `Drawer navigation` |
| UI | [react-native-elements 1.1.0](https://github.com/react-native-training/react-native-elements) |

## 环境搭建

参考：[React Native 中文网：搭建开发环境](https://reactnative.cn/docs/getting-started/)

本 DEMO 使用了 `react-native` 0.59.55 版本，RN iOS 0.45以上版本开始需要依赖一些第三方编译库，这些库在国内下载都非常困难（一般的翻墙工具都很难下载），因此在编辑之前需要先手动从「百度网盘」上下载一些库到本地，再进行编辑即可。

具体操作参考：[iOS RN 0.45以上版本所需的第三方编译库(boost等)](http://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89)

## 开发调试

```bash
yarn install

# ios 平台
react-native run-ios

# android 平台
react-native run-android
```

## 代码结构

```
- src [应用代码]
    - HomeScreen.js [首页]
    - SettingScreen.js [配置页面]
    - HelpScreen.js [帮助页面]
    - MenuScreen.js [左边栏菜单页]
    
- APP.js [程序主入口]
- app.json [应用配置（如：应用名称）]
- index.js [项目主入口]
```
