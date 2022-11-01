# 一、常用命令

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



## **3.**创建文件快捷方式**ln -s**

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



# **二、Mac磁盘清理**

## **1.删 除时间机器备份**

Time Machine 备份不仅会存储在外部驱动器上，而且 macOS 还会在您的启动驱动器上保留备份副本，以便您可以在外部驱动器不可用时恢复文件。 当 Mac 的系统存储空间用完时，您可能需要删除 Time Machine 备份。 检查以下步骤：

1. 启动终端并输入以下命令： tmutil listlocalsnapshotdates
2. 按“返回”按钮，您将看到按日期列出的 Time Machine 备份列表。
3. 输入命令： tmutil deletelocalsnapshots NAME （NAME 是列出的备份之一的名称）。
4. 再次按下回车键。
5. 您可以重复第 3 步和第 4 步来删除要清除的那些备份。

## **2.清理 Mac 的缓存**

~/Library/Caches 

 /Library/Cache 

## **3.删除旧的 iTunes 库备份**

`~/Music/iTunes/Previous iTunes Libraries`

## 4.删除邮件

`~/Library/Mail`



## **5.删除任何旧的iOS备份**



`~/Library/Application/ Support/MobileSync/Backup`



# **三、文件及文件夹常用操作**

## **1.查看当前目录下所有文件（包含文件夹）大小**

使用命令
` du -hs *`
 或者
` du -shc *`
 第二个命令能在最后显示一个Total大小，即当前目录的总大小。
` du -sh * | sort -rh`
 显示当前目录下所有文件（包含文件夹）大小，并排序

## 2.创建并追加文本内容到文件**

`touch a.txt && echo  'xxxxx' > a.txt`

## 3.读取文件夹内容所有的文件的内容，并追加到指定文件

`cat *.txt > merge.txt`



