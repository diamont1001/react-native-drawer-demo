# react-native-drawer-demo

`react-native` 对于刚入门的新手来说，免不了会碰到很多意想不到的问题，特别是在各种现有的框架（UI框架/导航框架等）的选择上会有不清楚，就算是选择好了框架，在接入的时候往往也会遇到很多问题。

本 DEMO 参考「探探APP」的交互方式，实现了一个基于 `Drawer` 效果的 APP 原型，另外选用了流行的 UI 框架 `react-native-elements`，让后续的开发更加简洁。

如果你有新 APP 的开发需求，而且 UI 交互跟这个类似，可以 clone 代码后直接进行业务的开发，免去了前期的框架的调试和各种基础框架的融合。

基于这个 DEMO 原型，你完全可以非常轻松的开始你的 APP 开发之旅了。

## 效果预览

基于react-native实现的，类似探探的左右划屏交互（Drawer）APP开发原型，效果：

<img width="250px" src="https://raw.githubusercontent.com/diamont1001/react-native-drawer-demo/master/docs/images/preview.gif" />

## 基础功能实现

- [x] 登录模块
- [x] UI主题
- [x] 左右划屏交互（Drawer）
- [x] 界面间切换
- [x] 二级页面（Stack）
- [ ] 数据管理（Redux? MobX?）

### 关于 Redux

Redux 的创造者 Dan Abramov 说过一句话："只有遇到 React 实在解决不了的问题，你才需要 Redux 。"，所以，并不是所有的应用都需要 redux 的，，如果你的 UI 层非常简单而且没有很多互动，那么就没必要添加 Redux 来增加复杂性。具体要不要看这个问题，可以参考阮一峰老师的文章「[Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)」前面章节。

### Redux or MobX?

其实两个都是很好的状态管理工具，都各有千秋。关于这两个的比较，可以参考文章：

[MobX vs Redux: Comparing the Opposing Paradigms - React Conf 2017 纪要](https://zhuanlan.zhihu.com/p/25989654)

## 依赖/文档

| # | 所用框架/库及版本 |
| ------ | ------ |
| 基础框架 | [react-native 0.59.5](https://github.com/mochajs/mocha) |
| 导航 | [react-navigation 3.8.1](https://reactnavigation.org/en/)，使用了其中的 `Drawer navigation` |
| UI | [react-native-elements 1.1.0](https://github.com/react-native-training/react-native-elements) |
| Icon | [react-native-vector-icons 6.4.2](https://oblador.github.io/react-native-vector-icons/) |

## 环境搭建

参考：[React Native 中文网：搭建开发环境](https://reactnative.cn/docs/getting-started/)

本 DEMO 基于 `react-native` 0.59.55 版本，RN iOS 0.45以上版本开始需要依赖一些第三方编译库，这些库在国内下载都非常困难（一般的翻墙工具都很难下载），因此在编辑之前需要先手动从「百度网盘」上下载一些库到本地，再进行编辑即可。

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
    - components [组件]
        - MainHeader [主头部组件]
    - theme [主题]
        - index.js [主题样式定义]
    - AuthLoadingScreen [LOADING页面]
    - AuthScreen [登录页面]
    - HomeScreen.js [首页]
    - SettingScreen.js [配置页面]
    - HelpScreen.js [帮助页面]
    - MenuScreen.js [左边栏菜单页]
    - DetailStack.js [二级页面-详情页]
- APP.js [程序主入口]
- app.json [应用配置（如：应用名称）]
- index.js [项目主入口]
```

## 修改主题

本 DEMO 用到的 `react-native-elements` UI 框架，内置了「主题」的支持，目前使用的是 `hotpink` 颜色作为主题，大家可以根据自己的具体需求作修改，具体代码如下：

文件：App.js

```js
const theme = {
  colors: {
    primary: 'hotpink',
  },
};
```

主题配置文档：[The Theme Object](https://react-native-training.github.io/react-native-elements/docs/customization.html#the-theme-object)
