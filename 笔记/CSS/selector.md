**选择器**



1. 交集选择器 ：“. ”
2. 并集选择器 ：“，”
3. 后代选择器：“ 空格”
4. 子元素选择器： “>”
5. 属性选择器：“[attr]”

 

| 选择器       | 含义                    |
| ------------ | ----------------------- |
| E[attr]      | 存在attr属性即可        |
| E[attr=val]  | 属性值完全等于val       |
| E[attr^=val] | 属性值以val“开始”       |
| E[attr*=val] | 属性值“任意”位置包含val |
| E[attr$=val] | 属性值以val“结束”       |

```css
 input[type="text"] {

​      color: red;

​    }

​    a[class*="font"] {

​      font-size: 30px;

​    }

​    a[class^="font-jd"]{

​      color: #000;

​    }

​    a[class$="text2"]{

​      color:pink;

​      background-color: green;

​      font-size: 3rem;

​    }
```

   





**伪类选择器：**



E:first-child 

E:last-child

E:nth-child(n) /*正数第n个子元素*/

E:nth-last-child(n):  /*倒数第n个子元素*/ 

E:target: /*激活的目标元素*/



**伪元素选择器CSS3**

E::first-letter

E::first-line

E::selection 

E::before  /*在盒子内部前面插入*/

E::after    /*在盒子内部后面插入*/



凹凸文字阴影

```css
   div:first-child {

​    text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;

   }

   div:nth-last-child(n) {

​    text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;

   }
```

