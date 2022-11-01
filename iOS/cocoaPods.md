## 【iOS】CocoaPods podfile source


#private 
source https://e.coding.net/lovedrunk/GXSpecs.git

#open
source https://cdn.cocoapods.org/
source https://github.com/CocoaPods/Specs.git

inhibit_all_warnings!


推送私有pods

// 带上--use-modular-headers，Cocoapods 1.6.0.beta.1以上支持
pod repo push Your_Repository Your_Podspec_file.podspec --verbose --allow-warnings --use-libraries --use-modular-headers

修改host 文件
 sudo vi /etc/hosts

刷新host文件
 sudo killall -HUP mDNSResponder 





# **【iOS】swift 常用pods**



```ruby
use_frameworks!

inhibit_all_warnings!

# Swift 第三方

pod 'Kingfisher' #图片下载

pod 'Siren' #更新版本提示

pod 'BFKit-Swift' #常用框架 BFKit-Swift is a collection of useful classes, structs and extensions to develop Apps faster.

pod 'SwiftDate' #时间

pod 'SwiftValidators' #有效性

pod "KRProgressHUD" #进度条

pod 'DefaultsKit' #Simple, Strongly Typed UserDefaults

pod 'FileKit' #文件管理器

pod 'FontAwesome.swift' #字体

pod 'BonMot'#富文本

pod 'SwiftRichString' #富文本2

pod 'Sugar' # is a sweetener for your Cocoa implementations.

pod 'Then'#Super sweet syntactic sugar for Swift initializers.

pod 'Bond' #A Swift binding framework

pod 'Toast-Swift', '~> 5.0.1'#A Swift extension that adds toast notifications to the UIView object class.

pod 'IQKeyboardManagerSwift'

pod 'Alamofire', '~> 5.0'

pod 'AlamofireImage', '~> 4.1'

pod 'AlamofireNetworkActivityIndicator', '~> 3.1' #网络请求状态

pod 'Moya', '~> 14.0' #网络请求封装

pod 'HandyJSON', '~> 5.0.1' # JOSN转模型

pod 'SwiftyJSON', '~> 5.0.0' # JOSN转模型

pod 'SnapKit' #UI

pod 'JXSegmentedView' #菜单按钮

pod 'JXPagingView/Paging'

pod 'EmptyDataSet-Swift', '~> 5.0.0' #占位图

pod 'DGElasticPullToRefresh' #刷新

pod 'ImagePicker' #Reinventing the way ImagePicker works.

pod 'FDTemplateLayoutCell'

pod 'PopupDialog', '~> 1.1'#A simple, customizable popup dialog

pod "FluentDarkModeKit" #适配暗黑模式

pod 'Hero'#转场动画

pod 'FSPagerView'#banner

pod "CollectionViewWaterfallLayout" #瀑布流
```

