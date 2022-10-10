# **lipo命令拆分 、合并iOS静态库**



.a，.lib 都是静态库，只有二进制文件 ，多次使用多次拷贝，造成冗余，使包变的更大

framework 可以是 静态库也可以是动态库，包含了二进制文件和资源文件。

动态库是指链接时不复制，程序运行时由系统加在到内存中，供系统调用，系统只需加载一次，多次使用，共用节省内存。

如.dylib、.framework都是动态库

**系统的framework是动态的，开发者创建的framework是静态的**

针对有些第三方静态库中支持真机和模拟器多种CPU架构，比如armv6、armv7、armv7s、arm64，以及i386、x86_64。而有时候只需要使用其中的一种或者几种，比如APP打包上架的时候，就不能包含i386、x86_64的架构，这时候就可以从静态库中分离出各种架构，然后合并你所需要的。

`lipo -info ./XXXX.framework/XXXX`

**这时候会显示出该framework中所包含的架构**

`Architectures in the fat file: ./XXXX.framework/XXXX are: i386 x86_64 armv7 arm64`

执行拆分的命令，这样就把armv7、arm64架构从静态库中剥离出来了，同理其他的CPU结构



```sh
lipo XXXX.framework/XXXX -thin armv7 -output XXXX_armv7 

lipo XXXX.framework/XXXX -thin arm64 -output XXXX_arm64

```

执行合并的命令，把拆分出来的xxxx_armv7、xxxx_arm64合并成命名为xxxx的静态库

`lipo -create XXXX_armv7 XXXX_arm64 -output XXXX`

具体的拆分合并命令如下

```sh
mkdir ./bak

cp -r XXXX.framework ./bak

lipo XXXX.framework/XXXX -thin armv7 -output XXXX_armv7

lipo XXXX.framework/XXXX -thin arm64 -output XXXX_arm64

lipo -create XXXX_armv7 XXXX_arm64 -output XXXX

mv XXXX XXXX.framework/
```



这样就得到了剔除了i386、x86_64的framework，避免了上传ipa包时出现的ERROR ITMS-90087: "Unsupported Architectures错误。"