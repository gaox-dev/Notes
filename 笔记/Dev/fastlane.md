**【Fastlane】 自动化打包工具**

# **1.使用agvtool**

  1.1 打开终端 ,cd 工程目录下 

  1.2 更新版本号 到2.0 则输入命令：$xcrun agvtool new-marketing-version 2.0

# 2.更新Build Number

  2.1 自动增加你的Build Number 执行的命令：$xcrun agvtool next-version -all

  2.2 给你的应用程序设置一个Build number,执行的命令是 $xcrun agvtool new-version -all 2.6.9

# 3.查看Version Numbers

  3.1查看当前的Version Number 执行：$xcrun agvtool what-marketing-version

  3.2 查看当前的Build Number 执行：$xcrun agvtool what-version



# 4.常用命令

```sh
fastlane init

fastlane deliver init

fastlane produce init

每个项目都要需要添加一遍！！！

fastlane add_plugin pgyer
```

