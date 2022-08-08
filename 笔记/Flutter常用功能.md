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

