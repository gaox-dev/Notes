**margin**



**div居中**   

margin: 上下any， 左右auto

margin： 20px auto;



**文字居中：**

水平居中

text-alignt: center;

垂直居中：

line-height = height；



**img与background-image区别**

产品展示用img标签，使用margin/padding 修改位置

小图标用background-image标签，使用background-position 修改位置，background-size 修改大小









**清除默认的样式**

*{

​	padding: 0;

​	margin: 0;

}



**行内元素**

只有左右外边距，没有上下外边距；

下面的元素都是行内元素：

- [b](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b), [big](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/big), [i](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i), [small](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/small), [tt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tt)
- [abbr](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr), [acronym](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/acronym), [cite](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite), [code](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code), [dfn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dfn), [em](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em), [kbd](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/kbd), [strong](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong), [samp](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/samp), [var](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/var)
- [a](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a), [bdo](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdo), [br](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br), [img](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img), [map](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/map), [object](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object), [q](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q), [script](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script), [span](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span), [sub](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sub), [sup](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sup)
- [button](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button), [input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input), [label](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label), [select](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select), [textarea](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea)







**外边距塌陷**

1. 上线相邻的两个块元素相遇时，如果上面的元素有margin-bottom，下面的块元素有margin-top，则他们之间的垂直距离不是两者之和，而是两者中的较大者。这种现象称为相邻块元素垂直外边距的合并（也称外边距塌陷）

- 解决方案：避免就好了；

![mmaron-bottom20px](https://raw.githubusercontent.com/gaox-dev/Pics/main/2022/10/mmaron-bottom20pxpY4oPk.png)



1. 两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。

- 解决方案：可以为父元素定义1像素的上边框或上内边距，或者为父元素添加overflow: hidden; （触发BFC） 



[BFC ( Block formatting context )是**块级格式化上下文**,属于**普通流**。 是关于css渲染定位的一个重要概念。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局.](https://juejin.cn/post/6844904052363378701)



![外盒尺寸计算（元素空间尺寸）](https://raw.githubusercontent.com/gaox-dev/Pics/main/2022/10/%E5%A4%96%E7%9B%92%E5%B0%BA%E5%AF%B8%E8%AE%A1%E7%AE%97%EF%BC%88%E5%85%83%E7%B4%A0%E7%A9%BA%E9%97%B4%E5%B0%BA%E5%AF%B8%EF%BC%89Y503R7.png)



**border盒子边框**



board: board-width || border-style || border-color

board: 1px solid red;



**border-style：**

none：没有边框即忽略所有的边框宽度（默认值）

solid：边框为单实现（最为常用）

dashed：边框为虚线

dotted：边框为点线

double：边框为双实线



**border-clooapse: collapse; （合并边框）**



**去掉表格内多余的间距**

<table cellspacing="0" cellpadding="0"> 





[P80圆角矩形](https://www.bilibili.com/video/BV1Bx411u7cS?p=80)



**border-radius**\