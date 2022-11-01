---
title: Flutter常用功能
date: 2022-04-15 17:13:47
tags: flutter
---



# Flutter常用功能

## 1.平台差异化代码

```dart
//import 'dart:io';

if (Platform.isIOS) {
  //ios 操作
}else if (Platform.isAndroid) {
 	//android 
 }
```



## 2.Flutter 剪切板

```dart
import 'package:flutter/services.dart';

Clipboard.setData(ClipboardData(text: '复制到剪切板'));

var text = Clipboard.getData(Clipboard.kTextPlain);
```



## 3.状态栏高度

```dart
import 'dart:ui';
MediaQueryData.fromWindow(window).padding.top
```



## 4. flutter 升级

要查看您当前使用的分支，请运行`flutter channel`查看。

要切换分支，请使用`flutter channel beta` 或 `flutter channel master`

```shell
flutter upgrade
```



## 5. dio https 自签名证书

```dart
(dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate = (client) {
  client.badCertificateCallback = (cert, host, port) {
    return true;
  };
};
```



## 6. 收起键盘    

```dart
//flutter 收起键盘
FocusScope.of(context).requestFocus(new FocusNode());

// web 收起键盘回调执行 
SystemChannels.textInput.invokeMethod('TextInput.hide');
```



## 7. 打包命令

```sh
flutter build apk --build-name=1.0.3 --build-number=3
```



##  8.适配刘海屏

```dart
final double safeAreaTopPadding = MediaQuery.of(context).padding.top;

final double safeAreaBottomPadding = MediaQuery.of(context).padding.bottom;
```

> 或者使用SafeArea widget。



## 9.bash_profile 环境变量配置

```sh
export PATH=${PATH}:${ANDROID_HOME}/tools

export PATH=${PATH}:${ANDROID_HOME}/platform-tools

export FLUTTER_ROOT=/Users/gaoxiong/flutter

export PUB_HOSTED_URL=https://pub.flutter-io.cn

export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn

export PATH=$PATH:/User/gaoxiong/gradle/gradle-6.9/bin

export PATH=/Users/gaoxiong/flutter/bin:$PATH
```



## 10.**判断是否视频URL正则**

`"^(https|http|ftp|rtsp|mms)?:\/\/.+\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$"`



















