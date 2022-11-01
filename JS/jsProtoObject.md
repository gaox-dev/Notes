**js对象原型**





https://cdn.jsdelivr.net/gh/gaox-dev/Pics@main/2022/04/ZSmlfQ4nN55h.jpg



基本类型【数字、字符串、布尔值、null、undefined】

引用类型【对象】





1. typeof可以准确地判断出基本类型，但是对于引用类型除function之外返回的都是object；



1. 已知是引用类型的情况可以选用instanceof或constructor方法进行具体类型的判断：

instanceof是基于原型链的；constructor 属性易变，不可信赖，为了规范，在重写对象原型时一般都需要重新给constructor赋值，以保证实例对象的类型不被改写；



1. Object.prototype.toString.call() 通用但很繁琐。

![Fune tionerototyee](https://raw.githubusercontent.com/gaox-dev/Pics/main/2022/10/Fune%20tionerototyeeshOtSb.webp)

你知道记得 函数 和 对象 分别有隐式原型和显式原型就行了，原型链是顺着隐式原型找的，而隐式原型是指向其构造函数的显式原型的！！！