# 一、iOS与JS

## 1、WKWebView调用JS

WKWebView可以直接使用下放方法调用JS.

```swift
open func evaluateJavaScript(_ javaScriptString: String, completionHandler: ((Any?, Error?) -> Swift.Void)? = nil)
```

举个例子.我们需要获取,一段HTML标签的内容.
HTML标签内容如下:

```csharp
<input style="display:none;" name="input"  value='I am Input'/>
```

我们需要在网页加载完成的时候进行获取,那么我们首先服从`WKNavigationDelegate`协议,并且设置代理.然后在如下代理方法中执行JS方法.

```swift
func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
      /// wkWebView调用js方法
      let js = "document.getElementsByName('input')[0].attributes['value'].value"
      wkWebView.evaluateJavaScript(js) { (response, error) in
            print("response:", response ?? "No Response", "\n", "error:", error ?? "No Error")
      }
}
```

通过以上操作就成功获取到input标签的value属性值了.如果报错,可以通过error进行相应的错误处理.



## 2、JS调用Swift


`WKWebViewConfiguration`类中有个属性`userContentController`

```swift
open class WKWebViewConfiguration : NSObject, NSSecureCoding, NSCopying {

    /** @abstract The user content controller to associate with the web view.
    */
    open var userContentController: WKUserContentController
}
```

**userContentController属性**是专门用来监听JS调用方法的，而userContentController的类`WKUserContentController`中，有一个专门监听JS方法句柄的方法


```swift
open class WKUserContentController : NSObject, NSSecureCoding {
  /** @abstract Adds a script message handler to the main world used by page content itself.
  @param scriptMessageHandler The script message handler to add.
  @param name The name of the message handler.
  @discussion Calling this method is equivalent to calling addScriptMessageHandler:contentWorld:name:
  with [WKContentWorld pageWorld] as the contentWorld argument.
  */
		open func add(_ scriptMessageHandler: WKScriptMessageHandler, name: String)
}
```
WKScriptMessageHandler是需要设置的代理，一般是WebView所在的控制器，name就是JS的方法句柄。

需要注意的是这个WKScriptMessageHandler代理，最好是进行封装一层，避免循环引用，代码如下

```swift
import Foundation
import WebKit

class WeakScriptMessageDelegate: NSObject {

    //MARK:- 属性设置
    private weak var scriptDelegate: WKScriptMessageHandler！
    
    //MARK:- 初始化
    init(scriptDelegate: WKScriptMessageHandler) {
        self.scriptDelegate = scriptDelegate
    }
}

extension WeakScriptMessageDelegate: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        self.scriptDelegate.userContentController(userContentController, didReceive: message)
    }
}
```

接下来，我们就可以将这个配置项赋值给WebView了

```swift
private lazy var webView: WKWebView = {
        /// 生成配置项
        let config = WKWebViewConfiguration()
        config.userContentController.add(WeakScriptMessageDelegate(scriptDelegate: self), name: "SeasonCallback")
        let preferences = WKPreferences()
        preferences.javaScriptCanOpenWindowsAutomatically = true
        config.preferences = preferences
        
        /// webView初始化时，入参配置项
        let webView = WKWebView(frame: view.frame, configuration: config)
        webView.allowsBackForwardNavigationGestures = true
        /// webView的监听
        webView.navigationDelegate = self
        return webView
 }()
复制代码
```

然后，我们在控制器这一层实现WKScriptMessageHandler的代理：

```swift
extension WebViewController: WKScriptMessageHandler {
    
    /// 原生界面监听JS运行,截取JS中的对应在userContentController注册过的方法
    ///
    /// - Parameters:
    ///   - userContentController: WKUserContentController
    ///   - message: WKScriptMessage 其中包含方法名称已经传递的参数,WKScriptMessage,其中body可以接收的类型是Allowed types are NSNumber, NSString, NSDate, NSArray, NSDictionary, and NSNull
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        print("方法名:\(message.name)")
        print("参数:\(message.body)")
        
        guard let msg = message.body as? [String: String], let value = msg["method"] else { return }
        
        if value == "back" {
            navigationController?.popViewController(animated: true)
        }
    }
}
```

在HTML，我们需要注册这样一个JS方法：

JS中messageHandlers后注册的方法名必须和在原生注册的方法名**一模一样！这里是SeasonCallback。**

对应上面的原生方法的注释，WKScriptMessage中的body，实际就是js传递过来的参数argument，**我个人比较偏向于在JS中传递JSON，这样在原生中转Dictionary一来方便，二来可以传递多个参数**。

下面的方法和H5中按钮组件点击事件进行绑定：

```javascript
function jsButtonAction() {
    let argument = {
                        'method' : 'back',
                        'params' : {}
                    };

    window.webkit.messageHandlers.SeasonCallback.postMessage(argument);
}
```

这样JS调用原生函数的通道就打通了，我们可以**注册多个句柄**，或者在传参中`method`传入**不同的值**来区分不同的方法。

要注意的是，为了避免循环引用，需要的控制器的析构函数中，将注册监听的JS句柄移除：

```css
deinit {
    webView.configuration.userContentController.removeScriptMessageHandler(forName: "SeasonCallback")
}
```

## 原生调用JS方法

### 调用方式

原生调JS简单一点，只用调用WebView这个方法就可以了：

```swift
extension WKWebView {

    public func evaluateJavaScript(_ javaScript: String, in frame: WKFrameInfo? = nil, in contentWorld: WKContentWorld, completionHandler: ((Result<Any, Error>) -> Void)? = nil)

}
```

比如我们在H5中的JS编写这样一个函数：

```arduino
function callJS(text) {
    console.log(text);
    return "你好，Swift!";
}
```

在Swift中这样调用

```go
webView.evaluateJavaScript("callJS('这是从Swift传递到JS的参数')") { any, error in
    print(any)
    print(error)
}
```

## 3、调用时机

`加载完成WebView后,将之前原生获取的token传递到H5端。`

我们项目由于前端是用Vue写的，在main.js里添加了这样一段代码，我理解的是用钩子注册了一个方法：

```js
window.getToken = function(token) {
  Vue.prototype.$token = token;
}
```

而我在WebView所在的控制中添加了这样一段代码：

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    view.backgroundColor = .white

    view.addSubview(webView)

    if let url = URL(string: url) {
        let request = URLRequest(url: url)
        webView.load(request)
				/// 错误示范
        webView.evaluateJavaScript("getToken('\(token)')") { any, error in
            print(any)
            print(error)
        }
    }
}
```



Vue的生命周期中`window.getToken = function(token) {   Vue.prototype.$token = token; }`这段代码是页面初始化后，该方法才被注册进去的。

**所以我要调用这个JS方法，必须等到WebView加载完成之后才行！！！**

给WebView添加WKNavigationDelegate代理，

```ini
webView.navigationDelegate = self
```

在WKNavigationDelegate代理中，`func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!)`该回调中执行evaluateJavaScript就可以正确的将token传递给H5页面。

```swift
extension WebViewController: WKNavigationDelegate { 
    /// 页面加载完成之后调用
    ///
    /// - Parameters:
    ///   - webView: 实现该代理的webview
    ///   - navigation: 当前navigation
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        webView.evaluateJavaScript("CUSCGetToken('\(token)')") { any, error in
            print(any)
            print(error)
        }
    }
}
```





# 二、Flutter与JS

## 1 flutter调用js

Flutter调用JS比较简单，直接调用` _controller.evaluateJavascript()`函数即可。而JS调用Flutter则比较烦一点，之所以比较烦，是因为`javascriptChannels`目录只支持字符串类型，并且JS的方法是固定的，即只能使用`postMessage`方法，对于iOS来说没问题，但是对于Android来说就有问题，当然也可以通过修改源码来实现。

## 2、webview_flutter

```dart
const WebView({
 Key key,
 this.onWebViewCreated, //在WebView创建完成后调用，只会被调用一次；
 this.initialUrl,       //初始load的url；
 this.javascriptMode = JavascriptMode.disabled, //JS执行模式（是否允许JS执行）
 this.javascriptChannels,	//JS和Flutter通信的Channel；
 this.navigationDelegate, //路由委托（可以通过在此处拦截url实现JS调用Flutter部分）
 this.gestureRecognizers, //手势监听；
 this.onPageStarted,
 this.onPageFinished, //WebView加载完毕时的回调
 this.debuggingEnabled = false,
 this.gestureNavigationEnabled = false,
 this.userAgent,  //区分不同平台设备
 this.initialMediaPlaybackPolicy =
  AutoMediaPlaybackPolicy.require_user_action_for_all_media_types,
 }) : assert(javascriptMode != null),
  assert(initialMediaPlaybackPolicy != null),
  super(key: key);
```





## 3、flutter_jsbridge_plugin

```dart
...
final JsBridge _jsBridge = JsBridge();
...
WebView(
    initialUrl: "https://www.baidu.com?timeStamp=${new DateTime.now().millisecondsSinceEpoch}",//避免缓存
    javascriptMode: JavascriptMode.unrestricted,
    onWebViewCreated: (WebViewController webViewController) async {
        _jsBridge.loadJs(webViewController);
        _controller.complete(webViewController);
        _jsBridge.registerHandler("getToken", onCallBack: (data, func) {
            // return token to js
            func({"token": "token"});
        });
        _jsBridge.registerHandler("IAPpayment", onCallBack: (data, func) {
            print("js call flutter iap");
        });
        _jsBridge.registerHandler("back", onCallBack: (data, func) {
            print("js call flutter back");
        });
    },
    navigationDelegate: (NavigationRequest request) {
        if (_jsBridge.handlerUrl(request.url)) {d
            return NavigationDecision.navigate;//允许路由替换。
        }
        return NavigationDecision.prevent;//表示阻止路由替换
    },
    onPageStarted: (url) {
        _jsBridge.init();
    },
))
```





## 4、URL中包含中文时

+ 安卓webview可以打开,自动对url进行编码

+ iOS需要进行`Uri.encodeComponent`









