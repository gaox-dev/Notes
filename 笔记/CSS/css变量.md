**想在CSS中使用JS变量**

想在CSS中使用JS变量

**解决方案：**

CSS变量

**示例：**

以在 vue 项目为例：

- 在行内的 style 属性中定义 CSS 变量
- 赋值为 JS 变量
- 在 CSS 中使用行内定义好的 CSS 变量



```html

<!--html-->

<div class="container">

	<div class="test" :style="{

​		'--width':width,

​		'--color':color,

​		'--margin':margin

​	}"></div>

</div>
```



```js

// js

data(){

​	return {

​		width:'200px',

​		color:'#f00',

​		margin:'10px 20px 10px 20px',

​	}

}


```



```css

// css

.test{

​	width: var(--width);

​	color: var(--color);

​	margin: var(--margin);

}
```



**知识点：CSS变量——自定义属性**

**概念与特性**

- 带有前缀 -- 的属性名，比如 --example--name，表示的是带有值的自定义属性，其可以通过 var 函数在全文档范围内复用
- CSS 自定义属性是可以级联的：每一个自定义属性可以多次出现，并且变量的值将会借助级联算法和自定义属性值运算出来

这意味着，同一个自定义属性名可以被多次赋值

var() 的使用 : https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()

