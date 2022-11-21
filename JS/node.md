#

# **一、mac使用命令杀掉node服务**

##  1.查询8080端口PID

 lsof -i:8080

 

> 界面显示
>
>  COMMAND PID   USER  FD  TYPE       DEVICE SIZE/OFF NODE NAME
>
>  node   1842 123  30u IPv6 ***   0t0 TCP *:commplex-main (LISTEN)
>
>  \#此时PID是1842

 `kill -9 1842  // 杀掉进程PID 1842`



# 二、终止程序的区别

ctrl + c 终止当前程序，包括后台线程；

ctrl + z 退出当前程序，但是后台程序仍然在执行； 



# 三、node版本切换

```sh
/***  install  n  ***/
#使用npm全局安装n （由于要写入文件，所以使用了sudo给操作提权，使用管理员权限执行命令）
$ sudo npm i -g n
#进度条走完后查看是否安装完成
$ n -V

/***  use  n  ***/

#列出所有node版本
$ n ls
#安装某个版本
$ n xx.xx.x (xx.xx.x 为要安装的版本号)
#安装最新版本
$ n lastest
#安装最新稳定版
$ n stable
#切换node版本(输入命令后上下键盘选择确认)
$ n
#删除某个版本
$ n rm xx.xx.x
#使用某个版本来运行脚本
$ n use xx.xx.x a.js
```



# 四、常见问题

## 4.1 [node: --openssl-legacy-provider is not allowed in NODE_OPTIONS](https://stackoverflow.com/questions/72866798/node-openssl-legacy-provider-is-not-allowed-in-node-options)

```
unset NODE_OPTIONS
```

