# Flutter与Native通信

###   1.实现方案

项目使用的flutter进行开发，支持和iOS。支持flutter和native的双向通信

### 2.难点

+ MethodChannel：用于flutter调用native方法

消息和响应是异步传递的，以确保用户界面保持响应(不会挂起)。native 向 Flutter 发送消息，常用于传递原生设备的信息, 状态等, 比如电池电量, 远程通知, 网络状态变化, 手机方向, 重力感应, 定位位置变化等等.

在客户端，`MethodChannel` ([API](https://docs.flutter.io/flutter/services/MethodChannel-class.html))可以发送与方法调用相对应的消息。 在宿主平台上，`MethodChannel` 在Android（([API](https://docs.flutter.io/javadoc/io/flutter/plugin/common/MethodChannel.html)) 和 FlutterMethodChannel iOS ([API](https://docs.flutter.io/objcdoc/Classes/FlutterMethodChannel.html)) 可以接收方法调用并返回结果。这些类允许您用很少的“脚手架”代码开发平台插件。

> a.在flutter平台通过MethodChannel进行提通道注册，消息名称唯一，保持统一的域名前缀。“包名/标识符”

> b.重写 ``application:didFinishLaunchingWithOptions: ``方法，//注册
>
> `let batteryChannel = FlutterMethodChannel(name: "包名/标识符",binaryMessenger: controller.binaryMessenger)`

> // 设置回调
>
> ```swift
>   batteryChannel.setMethodCallHandler({
> 
>    (call: FlutterMethodCall, result: @escaping FlutterResult) -> Void in
>    // This method is invoked on the UI thread.
>    // Handle battery messages.
>   })
> 
> // 通用plugin 注册
> GeneratedPluginRegistrant.register(with: self)
> ```



+ EventChannel

用于事件流的发送（event streams）是native到flutter的单向调用，调用是多播（一对多）的，可以类比成Android的Brodcast。

> + [native]EventChannel#setStreamHandler注册Handler实现
>
> + [native]EventChannel初始化结束后，在StreamHandler#onLister回调中获取EventSink引用并保存
>
> + [flutter]EventChannel#receiveBroadcastStream注册listener，建立监听
>
> + [native]使用EventSink#sucess发送通知事件
>
> + [flutter]接受到事件通知
>
> [native]通知结束时调用endOfStream结束

flutter端

> + 创建EventChannel，注册“包名/标识符”的channel名
>
> + 通过StreamSubscription#listen注册listener，其中cancelOnError参数表示遇到错误时是否自动结束监听，这个对象用于对 channel 的管理, 暂停, 恢复, 取消, 是否暂停状态等,



还有一种通信方式是

+ MessageChannel 用来传递字符串和半结构化信息	


