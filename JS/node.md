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

