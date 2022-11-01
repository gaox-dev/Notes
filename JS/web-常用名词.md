**web-常用名词**



**brew** 是一个软件包管理工具,类似于centos下的yum或者ubuntu下的apt-get。



**npm** 是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

**yarn** 是一种新的 Hadoop [资源管理器](https://baike.baidu.com/item/资源管理器/1951545)，它是一个通用资源管理系统，可为上层应用提供统一的资源管理和调度，





**webpack** 用于编译 JavaScript 模块。一旦完成 [安装](https://webpack.docschina.org/guides/installation)，你就可以通过 webpack [CLI](https://webpack.docschina.org/api/cli) 或 [API](https://webpack.docschina.org/api/node) 与其配合交互。





**Jenkins**功能包括：

1、持续的软件版本发布/测试项目。

2、监控外部调用执行的工作。



**Node.js** 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。



**nginx** 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务，特点是占有内存少，并发能力强。nginx可以作为静态页面的web服务器，同时还支持CGI协议的动态语言，如：perl、php等，但不支持java，java程序只能通过与tomcat配合完成。nginx专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率，能经受高负载的考验。



**babel 将es6语法转换为es5语法。**

**elementUI**

**Vant**



**nacos** Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您实现动态服务发现、服务配置管理、服务及流量管理。

Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构(例如微服务范式、云原生范式)的服务基础设施。







**egg.js**



GPPL 即 「General Purpose Programming Language」，又称通用编程语言，例如我们常用的 JavaScript，它们被设计用来解决通用编程问题。



**内部 DSL（Embedded DSL or Internal DSL）** 



DSL 即「Domain Specific Language」，中文一般译为「领域特定语言」，在[《领域特定语言》](https://link.zhihu.com/?target=https%3A//book.douban.com/subject/21964984/)这本书中它有了一个定义：

一种为**特定领域**设计的，具有**受限表达性**的**编程语言**



**Programming is a process of designing DSL for your own application.**







在项目启动时就会去配置中心去读取配置信息（本地的配置文件application.properties还能用，但优先级低于配置中心的配置）

如果你不想用nacos提供的控制台，nacos也提供了java开发服务端的sdk和api,我们可以用sdk开发配置中心服务端，用java代码去操作配置中心,sdk的文档可参看官方文档。