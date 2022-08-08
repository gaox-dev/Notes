---
title: Flutter配置常见错误
date: 2022-04-15 17:13:47
tags: flutter
---

# Flutter配置常见错误

## 1.1 Could not determine the dependencies of task :app:compileDebugJavaWithJavac

```dart
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> Could not resolve all task dependencies for configuration ':app:debugCompileClasspath'.
   > Could not find io.flutter:x86_64_debug:1.0.0-91c9fc8fe011352879e3bb6660966eafc0847233.
     Required by:
         project :app
   > Could not find io.flutter:x86_debug:1.0.0-91c9fc8fe011352879e3bb6660966eafc0847233.
     Required by:
         project :app
   > Could not find io.flutter:flutter_embedding_debug:1.0.0-91c9fc8fe011352879e3bb6660966eafc0847233.
```

> https://blog.csdn.net/mr_hmgo/article/details/106674679



## 1.2 Mac, Flutter doctor, ✗ Unable to locate Android SDK.

```sh
//简单的解决办法:
flutter config --android-sdk $HOME/Library/Android/sdk
```



## 1.3 无法Pod安装时

```shell
 rm ios/Podfile.lock
 flutter build ios 
```



## 1.4 Exception：“failed to set registerPlugins”

打开 ios目录下的AppDelegate.swift文件

添加

```swift
import flutter_downloader
```

Bool 回调添加

```swift
FlutterDownloaderPlugin.setPluginRegistrantCallback(registerPlugins)
```

尾部添加

```swift
private func registerPlugins(registry: FlutterPluginRegistry) {
    if (!registry.hasPlugin("FlutterDownloaderPlugin")) {
       FlutterDownloaderPlugin.register(with: registry.registrar(forPlugin: "FlutterDownloaderPlugin"))
    }
}
```

main.dart完整代码

```swift
import UIKit
import Flutter
import flutter_downloader

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    GeneratedPluginRegistrant.register(with: self)
    FlutterDownloaderPlugin.setPluginRegistrantCallback(registerPlugins)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}

private func registerPlugins(registry: FlutterPluginRegistry) {
    if (!registry.hasPlugin("FlutterDownloaderPlugin")) {
       FlutterDownloaderPlugin.register(with: registry.registrar(forPlugin: "FlutterDownloaderPlugin"))
    }
}
```



## 1.5 XCode archive error 'No such module flutter_downloader' when using AppDelegate.swift

None of the above solutions worked for me so this is how I solved mine:

1. Run `flutter clean`
2. Open the project folder navigate to ios directory and delete the 'Pods' folder
3. Run `flutter pub get`
4. Open terminal and navigate to ios directory in your project folder and run `pod install`
5. When done, open 'Runner.xcworkspace'
6. In Xcode, clean the build folder by going to Product > Clean Build Folder
7. Build the project (Product > Build) and everything should work fine.



## 1.6 Encountered error while building for device.

```sh
warning: The iOS deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of
    supported deployment target versions is 9.0 to 14.0.99. (in target 'JPush' from project 'Pods')
```

+ 先用Xcode编译运行一遍。修改target deployment version

+ Xcode编译出现错误，需要用Xcode清除错后才行。



## 1.7 “Waiting for another flutter command to ...”

执行 `Flutter` 包管理相关命令时有可能遇到 `Waiting for another flutter command to release the startup lock...` 这样的错误，可尝试杀死所有的 `dart` 进程解决：

```sh
// Linux
killall -9 dart

// Windows
taskkill /F /IM dart.exe

// Mac
rm ~/flutter/bin/cache/lockfile
```



## 1.8 Command PhaseScriptExecution failed with a nonzero exit code

 **Xcode报错**：“Command PhaseScriptExecution failed with a nonzero exit code”

**Android Studio报错**：“Could not build the precompiled application for the device .Error launching application on xx.”

可以模拟器跑，无法在真机运行。

```sh
rm ~/flutter/bin/cache/lockfile
```



## 1.9 Flutter plugin not installed and Dart plugin not installed errors #69514

Plugin folder has changed in 4.1 version;
From : ~/Library/Application\ Support/AndroidStudio4.1
To: ~/Library/Application\ Support/Google/AndroidStudio4.1/plugins

Temporary fix as suggested in the above answer;

```sh
ln -s ~/Library/Application\ Support/Google/AndroidStudio4.1/plugins ~/Library/Application\ Support/AndroidStudio4.1
```



## 1.10 打包apk，谷歌服务连接失败

![iShot2021-04-27 15.26.00.png](https://i.loli.net/2021/04/27/xUMdHlnFiA79OIm.png)

1、关闭gradle代理

2、修改项目`/android/build.gradle`

```rust
buildscript {
    repositories {
       // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }

   }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}

allprojects {
    repositories {
        // google()
        // jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }

    }
}
```

3、打开你flutter SDK目下`/Users/gaoxiong/flutter/packages/flutter_tools/gradle/flutter.gradle`

与第二步一样，编辑buildscript下的repositories属性。

4、打开`/android/gradle/wrapper/gradle-wrapper.properties`

```dart
distributionUrl=https\://services.gradle.org/distributions/gradle-6.9-rc-1-all.zip
//修改路径为本地路径
distributionUrl=file\:///Users/gaoxiong/gradle/gradle-6.9-rc-1-all.zip
```



## 1.11  CocoaPods did not set the base configuration

 CocoaPods did not set the base configuration of your project because your project already has a custom config set. In order for CocoaPods integration to work at all, please either set the base configurations of the target `Runner` to `Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig` or include the `Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig` in your build configuration (`Flutter/Release.xcconfig`).

![iShot2021-04-29 17.08.54.png](https://i.loli.net/2021/04/29/nO9jRSbcmdX3Hv4.png)



## 1.12 PluginApplicationException: Failed to apply plugin [id ‘com.android.internal.version-check‘]

```sh
#在gradle.properties文件中添加
android.overridePathCheck=true
```



## 1.13 Execution failed for task':app:compileDebugKotlin'.

```sh
gradle clean build
```



## 1.14 修改bundle ID 后，需要同步修改文件夹

<img src="https://i.loli.net/2021/05/20/gBaN28K1DXtvVdb.png" style="zoom:50%;" />



## 1.15 安卓webview_flutter支持缩放

```dart
//webView  
void initState() {
    super.initState();
  //重要
    if (Platform.isAndroid) WebView.platform = SurfaceAndroidWebView();
}

//FlutterWebView.java 
    webView.getSettings().setUseWideViewPort(true);
    webView.getSettings().setSupportZoom(true);
    webView.getSettings().setBuiltInZoomControls(true);
    webView.getSettings().setLoadWithOverviewMode(true);
    webView.getSettings().setDisplayZoomControls(true);

```



## 1.16 NoSuchMethodError: The getter 'length' was called on null.

**json对象没有传递model所有的属性字段。**



## 1.17 No such module 'HandyJSON'

> Xcode模拟器报错，真机不报错。
>
> 不知道具体原因。



## 1.18 [flutter_localizations from sdk depends on intl 0.17.0 and fstore depends on intl ^0.16.1, flutter_localizations from sdk is forbidden](https://stackoverflow.com/questions/66476379/flutter-localizations-from-sdk-depends-on-intl-0-17-0-and-fstore-depends-on-intl)

This is happening because flutter_localizations need `intl: ^0.16.1` while the last version needed `intl: ^0.17.0-nullsafety.2`

By overriding the existing dependency we can resolve this issue

Adding this to `pubspec.yaml` solved it:

```dart
dependency_overrides:
   intl: ^0.17.0-nullsafety.2
```



## 1.19 Could not find an option named "devtools-server-address".

```sh
 killall java
```

## 1.20  Failed to list versions for com.google.android.gms:play-services-location

> 注释 location 插件



## 1.21 Floor[使用](https://floor.codes/getting-started/)

[https://floor.codes/getting-started/](https://floor.codes/getting-started/)

通过在我们的项目根目录下运行:

```shell
#首次生成
flutter packages pub run build_runner build
#如果需要在文件变动时，自动运行命令使用
flutter packages pub run build_runner watch
```

更新数据冲突策略

```dart
@Update(onConflict: OnConflictStrategy.replace)
@Insert(onConflict: OnConflictStrategy.rollback)
```

写Entity
```dart
import 'package:floor/floor.dart';

@entity
class Task {
  @PrimaryKey(autoGenerate: true)
  final int? id;

  final String message;

  Task(this.id, this.message);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Task &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          message == other.message;

  @override
  int get hashCode => id.hashCode ^ message.hashCode;

  @override
  String toString() {
    return 'Task{id: $id, message: $message}';
  }
}
```


