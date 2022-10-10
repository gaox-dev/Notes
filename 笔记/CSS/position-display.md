**Position** 



position 需要和top/bottom，left/right 边偏移搭配使用；



position: static；//默认静止定位，一般用于清除定位边距，

position: relative; //相对定位，不脱标，原来的位置还在，相对于自身原来的位置进行定位（自恋型）

position: absolute; //绝对定位，脱标，将元素最近的已经定位（绝对、相对、固定）的父（祖先）元素定位

position: fixed; //固定定位，脱标，不占位置，不随滚动条滚动，只对浏览器。



添加定位模式后，显示模式会转换成行内块模式；直接给宽和高；



**没有内容的时候需要写宽高**



**子绝父相**



z-index ，

1. 只有 相对、绝对、固定定位才支持z-index属性。文档流，float不支持改属性；
2. 没有单位；
3. 数字越大，权重越大；
4. 







display: none; // 不显示不保留位置；

visibility: visible/hidden; // 隐藏后，保留位置；

overflow: visible/auto/hidden/scroll  

![Fune tionerototyee](https://raw.githubusercontent.com/gaox-dev/Pics/main/2022/10/Fune%20tionerototyeew1TkDS.webp)

#  显示 



white-space: nowrap; // 强制一行显示

text-overflow: ellipsis //...

overflow: hidden; //



# 注意

display:flex 会将子元素的display 改为block