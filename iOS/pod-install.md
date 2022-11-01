# pod install 超时


1、查找ip

 打开链接 http://ping.chinaz.com 输入` github.com `,点击Ping检测找到最快的ip

2、修改host文件

`sudo vim /private/etc/hosts
`按【/】键搜索 github


3、刷新DNS

`sudo killall -HUP mDNSResponder
``sudo dscacheutil -flushcache`





**【iOS】pod 'libwebp'失败的解决办法**



**在本地库中, 并找到对应的libwebp版本的文件**

修改Master 和Trunk

`find ~/.cocoapods/repos/master -iname libwebp`

`find ~/.cocoapods/repos/trunk -iname libwebp`



**2.拿到上面的路径，前往文件夹**

**（command+shift+G） /Users/gaoxiong/.cocoapods/repos/master/Specs/1/9/2/libwebp**



3.选择你需要下载的版本号，打开libwebp.podspec.json文件：



修改文件中git source 地址为

https://github.com/webmproject/libwebp.git

将其中homepage改为

https://github.com/webmproject/



查找pod sepc 并进行替换

`pod spec which libwebp`



**显示**

**/Users/gaoxiong/.cocoapods/repos/trunk/Specs/1/9/2/libwebp/1.1.0/libwebp.podspec.json**

 **重复上述步骤，修改文件的**homepage 和git source 。



**Pod 安装 若仍报错，尝试清理缓存：**

`pod cache clean --all`