# **【macOS】常用命令 **



## **1.开启任何来源选项**

`sudo spctl --master-disable`

## **2. 修改hosts**

```shell
# 打开hosts文件
sudo vim /etc/hosts

#立即生效
sudo killall -HUP mDNSResponder

#删除缓存
sudo rm -fr /etc/.hosts.swp
```

## **3.unsafe**

**就是在当前页面用键盘输入 thisisunsafe ，页面即会自动刷新进入网页。**



## **4.**创建文件快捷方式**ln -s**

  命令格式：

> ln [参数] [源文件或目录] [目标文件或目录]

  命令参数

> -b 删除，覆盖以前建立的链接 
>
> -d 允许超级用户制作目录的硬链接 
>
> -f 强制执行 
>
> -i 交互模式，文件存在则提示用户是否覆盖 
>
> -n 把符号链接视为一般目录 
>
> -s 软链接(符号链接) 
>
> -v 显示详细的处理过程

