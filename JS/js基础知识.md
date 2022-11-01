**js基础知识点**



**123['toString'].length + 123 = ?
**

**答案是124**



总结就是：length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数



**JavaScript有几种数据类型？**

- number：数字类型
- string：字符串类型
- boolean：布尔值类型
- undefined：未定义类型
- null：空值类型
- object：对象类型
- symbol：symbol类型
- bigint：大数字类型



**let & const与 var 的区别？**

- var存在变量提升，可重复声明同一变量，声明的变量均可改
- let没有变量提升，不可重复声明同一变量，声明的变量均可改
- const没有变量提升，不可重复声明同一变量，声明的基本数据类型不可改，引用类型可改属性，不可只声明变量而不赋值





**暂时性死区问题**

var a = 100;



if(1){

  a = 10;

  //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，

  // 而这时，还未到声明时候，所以控制台Error:Cannot access 'a' before initialization

  let a = 1;

}













**JavaScript变量在内存中具体存储形式？**

- 基本数据类型：存在栈内存里
- 引用数据类型：指针存栈内存，指向堆内存中一块地址，内容存在堆内存中
- 也有说法说其实JavaScript所有数据都存堆内存中，我也比较赞同这种说法



**valueOf 与 toString**

- 1、valueOf偏向于运算，toString偏向于显示
- 2、对象转换时，优先调用toString
- 3、强转字符串优先调用toString，强转数字优先调用valueOf
- 4、正常情况下，优先调用toString
- 5、运算操作符情况下优先调用valueOf



**解决遍历对象时，把原型上的属性遍历出来了咋办？**

**使用hasOwnProperty判断**

**function** **Person**(name) {

 this.name = name

}

Person.prototype.age = 23

**const** person = **new** Person('Sunshine_lin')

**for** (**const** key **in** person) { console.log(key) } *// name age*

*//* 使用 *hasOwnProperty*

**for** (**const** key **in** person) {

 person.hasOwnProperty(key) && console.log(key)

} *// name*



**深拷贝与浅拷贝的区别？**

- 深拷贝层层拷贝，浅拷贝只拷贝第一层，深层只是引用
- 在深拷贝中，新对象中的更改不会影响原始对象，而在浅拷贝中，新对象中的更改，原始对象中也会跟着改。
- 在深拷贝中，原始对象不与新对象共享相同的属性，而在浅拷贝中，它们具有相同的属性。





**闭包是什么？**

闭包是一个能读取其他函数内部变量的函数

- 优点：使外部能访问到局部的东西
- 缺点：使用不当容易造成内存泄漏的问题





**null和undefined的异同点有哪些？**

相同点

- 都是空变量
- 都是假值，转布尔值都是false
- null == undefined 为 true

不同点

- typeof判断null为object，判断undefined为undefined
- null转数字为0，undefined转数字为NaN
- null是一个对象未初始化，undefined是初始化了，但未定义赋值
- null === undefined 为 false



**如何判断数据类型？**

- typeof xxx：能判断出number，string，undefined，boolean，object，function（null是object）
- Object.prototype.toString.call(xxx)：能判断出大部分类型
- Array.isArray(xxx)：判断是否为数组



**为什么typeof null 是object？**

不同的数据类型在底层都是通过二进制表示的，二进制前三位为000则会被判断为object类型，而null底层的二进制全都是0，那前三位肯定也是000，所以被判断为object





**== 与 === 的区别？**

- ==：在比较过程中会存在隐式转换
- ===：需要类型相同，值相同，才能为true





**[] == ![] 为什么是 true ？**

按照双等号左右两边的转换规则

- 1、! 优先级高于 ==，[]不是假值，所以先转换成 [] == false
- 2、右边为布尔值，false先转数字0，所以可转换为[] == 0
- 3、左边为对象，[]调用toString转为 ''，转换为'' == 0
- 4、左边为字符串，''转换为0，最终为 0 == 0





**null >= null 为什么是 true？**

按照隐式转换规则，可转换成0 >= 0，0 等于 0，所以是true



**undefined >= undefined 为什么是 false ？**

按照隐式转换规则，可转换成NaN >= NaN，NaN 不等于 NaN，也不大于，所以是false



**双等号左右两边的转换规则？**

- 1、null == undefined 为 true
- 1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；
- 2、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值
- 3、如果一个操作数是对象，另一个操作数不是，则调用对象的toString()方法，用得到的基本类型值按照前面的规则进行比较





**JavaScript的隐式转换规则？**

- 1、转成string类型： +（字符串连接符）
- 2、转成number类型：++/--(自增自减运算符) + - * / %(算术运算符) > < >= <= == != === !=== (关系运算符)
- 3、转成boolean类型：!（逻辑非运算符)



**== 与 === 的区别？**

- ==：在比较过程中会存在隐式转换
- ===：需要类型相同，值相同，才能为true



**0.1 + 0.2 === 0.3，对吗？**

不对，JavaScript的计算存在精度丢失问题





**绑定点击事件有几种方式？**

三种

- xxx.onclick = function (){}
- <xxx onclick=""></xxx>
- xxx.addEventListener('click', function(){}, false)



**addEventListener的第三个参数是干嘛的？**

第三个变量传一个布尔值，需不需要阻止冒泡，默认是false，不阻止冒泡



**函数声明和函数表达式的区别？**

- 函数声明：享受函数提升
- 函数表达式：归类于变量声明，享受变量提升
- 函数提升优先级 > 变量提升优先级



**JavaScript的事件流模型有哪些？**

- 事件冒泡：由最具体的元素接收，并往上传播
- 事件捕获：由最不具体的元素接收，并往下传播
- DOM事件流：事件捕获 -> 目标阶段 -> 事件冒泡



**Ajax、Axios、Fetch有啥区别？**

- Ajax：是对XMLHttpRequest对象（XHR）的封装
- Axios：是基于Promise对XHR对象的封装
- Fetch：是window的一个方法，也是基于Promise，但是与XHR无关，不支持IE



**load、$(document).ready、DOMContentLoaded的区别？**

DOM文档加载的步骤为：

- 1、解析HTML结构。
- 2、加载外部脚本和样式表文件。
- 3、解析并执行脚本代码。
- 4、DOM树构建完成。// DOMContentLoaded触发、$(document).ready触发
- 5、加载图片等外部文件。
- 6、页面加载完毕。// load触发





**如何阻止事件冒泡？**

**function** **stopBubble**(e) {

 **if** (e.stopPropagation) {

  e.stopPropagation()

 } **else** {

  window.event.cancelBubble = true;

 }

}



**如何阻止事件默认行为？**

**function** **stopDefault**(e) {

 **if** (e.preventDefault) {

  e.preventDefault();

 } **else** {

  window.event.returnValue = false;

 }

}



**NaN是什么？有什么特点？**

- NaN不等于自身，也就是 NaN === NaN 为 false
- NaN为假值，转布尔值为false
- NaN本质是一个number，typeof NaN === number



**处理异步的方法有哪些？**

- 回调函数
- promise
- 事件监听
- 发布订阅
- async await



**数组的常用方法有哪些？**

| **方法** | **作用**                                             | **是否影响原数组** |
| -------- | ---------------------------------------------------- | ------------------ |
| push     | 在数组后添加元素，返回数组长度                       | ✅                  |
| pop      | 删除数组最后一项，返回被删除项                       | ✅                  |
| shift    | 删除数组第一项，并返回被删除项                       | ✅                  |
| unshift  | 数组开头添加元素，返回新数组长度                     | ✅                  |
| reserve  | 反转一个数组，返回修改后的数组                       | ✅                  |
| sort     | 排序一个数组，返回修改后的数组                       | ✅                  |
| splice   | 截取数组，返回被截取的区间                           | ✅                  |
| join     | 将一个数组所有元素连接成字符串并返回这个字符串       | ❌                  |
| concat   | arr1.concat(arr2, arr3) 连接数组                     | ❌                  |
| join     | arr.join(x)将arr数组元素连接成字符串并返回这个字符串 | ❌                  |
| map      | 操作数组每一项并返回一个新数组                       | ❌                  |
| forEach  | 遍历数组，没有返回值                                 | ❌                  |
| filter   | 对数组所有项进行判断，返回符合规则的新数组           | ❌                  |
| every    | 数组每一项都符合规则才返回true                       | ❌                  |
| some     | 数组有符合规则的一项就返回true                       | ❌                  |
| reduce   | 接收上一个return和数组的下一项                       | ❌                  |
| flat     | 数组扁平化                                           | ❌                  |
| slice    | 截取数组，返回被截取的区间                           | ❌                  |



**Math的常用方法有哪些？**

| **方法**            | **作用**        |
| ------------------- | --------------- |
| Math.max(...arr)    | 取arr中的最大值 |
| Math.min(...arr)    | 取arr中的最小值 |
| Math.ceil(小数)     | 小数向上取整    |
| Math.floor(小数)    | 小数向下取整    |
| Math.round(小数)    | 小数四舍五入    |
| Math.sqrt(num)      | 对num进行开方   |
| Math.pow(num, m)    | 对num取m次幂    |
| Math.random() * num | 取0-num的随机数 |



**JS中的substr()和substring()函数有什么区别**

**substr() 函数的形式为substr(startIndex,length)。 它从startIndex返回子字符串并返回'length'个字符数。**

**var** s = "hello";

( s.substr(1,4) == "ello" ) *// true*

复制代码

**substring() 函数的形式为substring(startIndex,endIndex)。 它返回从startIndex到endIndex - 1的子字符串。**

**var** s = "hello";

( s.substring(1,4) == "ell" ) *// true*



**如何在JS中编码和解码 URL**

**encodeURI()** 函数用于在JS中对URL进行编码。它将url字符串作为参数并返回编码的字符串。

**注意**： encodeURI()不会编码类似这样字符： / ? : @ & = + $ #，如果需要编码这些字符，请使用encodeURIComponent()。 用法：

**var** uri = "my profile.php?name=sammer&occupation=pāntiNG";

**var** encoded_uri = encodeURI(uri);

复制代码

**decodeURI()** 函数用于解码js中的URL。它将编码的url字符串作为参数并返回已解码的字符串，用法：

**var** uri = "my profile.php?name=sammer&occupation=pāntiNG";

**var** encoded_uri = encodeURI(uri);

decodeURI(encoded_uri);





**如何将 JS 日期转换为ISO标准**

**toISOString()** 方法用于将js日期转换为ISO标准。 它使用ISO标准将js Date对象转换为字符串。如：

var date = new Date();

var n = date.toISOString();

console.log(n);





**什么是BOM？有哪些api？**

BOM就是browser object model，浏览器对象模型

| **api**            | **作用**             | **代表方法或属性**                                           |
| ------------------ | -------------------- | ------------------------------------------------------------ |
| window.history     | 操纵浏览器的记录     | history.back() history.go(-1)                                |
| window.innerHeight | 获取浏览器窗口的高度 |                                                              |
| window.innerWidth  | 获取浏览器窗口的宽度 |                                                              |
| window.location    | 操作刷新按钮和地址栏 | location.host：获取域名和端口 location.hostname：获取主机名 location.port：获取端口号 location.pathname：获取url的路径 location.search：获取?开始的部分 location.href：获取整个url location.hash：获取#开始的部分 location.origin：获取当前域名 location.navigator：获取当前浏览器信息 |



**BOM 和 DOM 的关系**

**BOM**全称Browser Object Model，即浏览器对象模型，主要处理浏览器窗口和框架。

DOM全称Document Object Model，即文档对象模型，是 HTML 和XML 的应用程序接口（API），遵循W3C 的标准，所有浏览器公共遵守的标准。

JS是通过访问**BOM**（Browser Object Model）对象来访问、控制、修改客户端(浏览器)，由于**BOM**的window包含了document，window对象的属性和方法是直接可以使用而且被感知的，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM的根节点。

可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。



**获取DOM元素有哪些方法**

注：document可以换成dom节点，那么就是搜索范围就是dom节点的子节点内

| **方法**                               | **描述**                  | **返回类型**                      |
| -------------------------------------- | ------------------------- | --------------------------------- |
| document.getElementById(id)            | 通过id获取dom             | 符合条件的dom对象                 |
| document.getElementsByTagName(tagName) | 通过标签名获取dom         | 符合条件的所有dom对象组成的类数组 |
| document.getElementsByClassName(class) | 通过class获取dom          | 符合条件的所有dom对象组成的类数组 |
| document.getElementsByName(name)       | 通过标签的属性name获取dom | 符合条件的所有dom对象组成的类数组 |
| document.querySelector(选择器)         | 通过选择器获取dom         | 符合条件的第一个dom对象           |
| document.querySelectorAll(选择器)      | 通过选择器获取dom         | 符合条件的所有dom对象组成的类数组 |



**操作DOM元素有哪些方法**

| **标题**               | **描述**                                                     |
| ---------------------- | ------------------------------------------------------------ |
| createElement          | 创建一个标签节点                                             |
| createTextNode         | 创建一个文本节点                                             |
| cloneNode(deep)        | 复制一个节点，连同属性与值都复制，deep为true时，连同后代节点一起复制，不传或者传false，则只复制当前节点 |
| createDocumentFragment | 创建一个文档碎片节点                                         |
| appendChild            | 追加子元素                                                   |
| insertBefore           | 将元素插入前面                                               |
| removeChild            | 删除子元素                                                   |
| replaceChild           | 替换子元素                                                   |
| getAttribute           | 获取节点的属性                                               |
| createAttribute        | 创建属性                                                     |
| setAttribute           | 设置节点属性                                                 |
| romoveAttribute        | 删除节点属性                                                 |
| element.attributes     | 将属性生成类数组对象                                         |



**DOM的类型有哪几种？**

12种

**元素节点      　　Node.ELEMENT_NODE(1)**

**属性节点      　　Node.ATTRIBUTE_NODE(2)**

**文本节点      　　Node.TEXT_NODE(3)**

**CDATA节点       Node.CDATA_SECTION_NODE(4)**

**实体引用名称节点  　　 Node.ENTRY_REFERENCE_NODE(5)**

**实体名称节点    　　Node.ENTITY_NODE(6)**

**处理指令节点    　　Node.PROCESSING_INSTRUCTION_NODE(7)**

**注释节点      　 Node.COMMENT_NODE(8)**

**文档节点      　 Node.DOCUMENT_NODE(9)**

**文档类型节点    　　Node.DOCUMENT_TYPE_NODE(10)**

**文档片段节点    　　Node.DOCUMENT_FRAGMENT_NODE(11)**

**DTD声明节点      Node.NOTATION_NODE(12)**





**数组的splice 与 slice 的区别？**

| **方法** | **参数**                              | **描述**                                                     |
| -------- | ------------------------------------- | ------------------------------------------------------------ |
| splice   | splice(start, num, item1, item2, ...) | 从start索引开始，截取num个元素，并插入item1、item2到原数组里，影响原数组 |
| slice    | slice(start, end)                     | 从start开始，截取到end - 1，如果没有end，则截取到最后一个元素，不影响原数组 |



**17、什么是文档碎片？**

- 是什么：一个容器，用于暂时存放创建的dom元素，使用document.createDocumentFragment()创建
- 有什么用：将需要添加的大量元素 先添加到文档碎片 中，再将文档碎片添加到需要插入的位置，大大减少dom操作，提高性能

例子

var oFragmeng = document.createDocumentFragment(); 





for(var i=0;i<10000;i++)



{ 



  var op = document.createElement("span"); 



  var oText = document.createTextNode(i); 



  op.appendChild(oText); 



  //先附加在文档碎片中



  oFragmeng.appendChild(op);  



} 





//最后一次性添加到document中



document.body.appendChild(oFragmeng); 









**什么是函数柯里化？简单实现一个？**

柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

**// 普通的add函数**

**function add(x, y) {**

  **return x + y**

**}**



**// Currying后**

**function curryingAdd(x) {**

  **return function (y) {**

​    **return x + y**

  **}**

**}**



**add(1, 2)      // 3**

**curryingAdd(1)(2)  // 3**





**好处**

- 1、参数复用

// 正常正则验证字符串 reg.test(txt)



// 普通情况

function check(reg, txt) {

  return reg.test(txt)

}



check(/\d+/g, 'test')    //false

check(/[a-z]+/g, 'test')  //true



// Currying后

function curryingCheck(reg) {

  return function(txt) {

​    return reg.test(txt)

  }

}



var hasNumber = curryingCheck(/\d+/g)

var hasLetter = curryingCheck(/[a-z]+/g)



hasNumber('test1')   // true

hasNumber('testtest')  // false

hasLetter('21212')   // false



- 2、延迟执行

其实Function.prototype.bind就是科里化的实现例子

function sayKey(key) {

 console.log(this[key])

}

const person = {

 name: 'Sunshine_Lin',

 age: 23

}

// call不是科里化

sayKey.call(person, 'name') // 立即输出 Sunshine_Lin

sayKey.call(person, 'age') // 立即输出 23



// bind是科里化

const say = sayKey.bind(person) // 不执行

// 想执行再执行

say('name') // Sunshine_Lin

say('age') // 23



**箭头函数与普通函数的区别？**

- 1、箭头函数不可作为构造函数，不能使用new
- 2、箭头函数没有自己的this
- 3、箭头函数没有arguments对象
- 4、箭头函数没有原型对象



**forEach如何跳出循环？**

forEach是不能通过break或者return来实现跳出循环的，为什么呢？实现过forEach的同学应该都知道，forEach的的回调函数形成了一个作用域，在里面使用return并不会跳出，只会被当做continue

那怎么跳出循环呢？可以利用try catch

　　function getItemById(arr, id) {

​    var item = null;

​    try {

​      arr.forEach(function (curItem, i) {

​        if (curItem.id == id) {

​          item = curItem;

​          throw Error();

​        }

​      })

​    } catch (e) {

​    }

​    return item;

  }



**JS中的 MUL 函数**

MUL表示数的简单乘法。在这种技术中，将一个值作为参数传递给一个函数，而该函数将返回另一个函数，将第二个值传递给该函数，然后重复继续。例如:x*y*z可以表示为

const mul = x => y => z => x * y * z



console.log(mul(1)(2)(3)) // 6



**深度遍历广度遍历的区别？**

对于算法来说 无非就是时间换空间 空间换时间

- 1、深度优先不需要记住所有的节点, 所以占用空间小, 而广度优先需要先记录所有的节点占用空间大
- 2、深度优先有回溯的操作(没有路走了需要回头)所以相对而言时间会长一点
- 3、深度优先采用的是堆栈的形式, 即先进后出
- 4、广度优先则采用的是队列的形式, 即先进先出



**鼠标事件有哪些？**

注明：鼠标左中右键看event对象上的button属性，对应1、2、3

| **事件**   | **说明**                                                     |
| ---------- | ------------------------------------------------------------ |
| click      | 单机鼠标左键触发，右键无效，当用户焦点在按钮并按下Enter，也会触发 |
| dbclick    | 双击鼠标左键触发，右键无效                                   |
| mousedown  | 单机鼠标任意一个按键都触发                                   |
| mouseout   | 鼠标指针位于某个元素上且将要移出元素边界时触发               |
| mouseover  | 鼠标指针移出某个元素到另一个元素上时触发                     |
| mouseup    | 鼠标指针移出某个元素到另一个元素上时触发                     |
| mouseover  | 松开任意鼠标按键时触发                                       |
| mousemove  | 鼠标在某个元素上时持续发生                                   |
| mouseenter | 鼠标进入某个元素边界时触发                                   |
| mouseleave | 鼠标离开某个元素边界时触发                                   |





**JS中鼠标事件的各个坐标？**

| **属性** | **说明**                                                     | **兼容性**        |
| -------- | ------------------------------------------------------------ | ----------------- |
| offsetX  | 以当前的目标元素左上角为原点，定位x轴坐标                    | 除Mozilla外都兼容 |
| offsetY  | 以当前的目标元素左上角为原点，定位y轴坐标                    | 除Mozilla外都兼容 |
| clientX  | 以浏览器可视窗口左上角为原点，定位x轴坐标                    | 都兼容            |
| clientY  | 以浏览器可视窗口左上角为原点，定位y轴坐标                    | 都兼容            |
| pageX    | 以doument对象左上角为原点，定位x轴坐标                       | 除IE外都兼容      |
| pageY    | 以doument对象左上角为原点，定位y轴坐标                       | 除IE外都兼容      |
| screenX  | 以计算机屏幕左上顶角为原点，定位x轴坐标(多屏幕会影响)        | 全兼容            |
| screenY  | 以计算机屏幕左上顶角为原点，定位y轴坐标                      | 全兼容            |
| layerX   | 最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 x 轴坐标 | Mozilla 和 Safari |
| layerY   | 最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 y 轴坐标 | Mozilla 和 Safari |



**JS中元素视图的各个尺寸？**

| **属性**     | **说明**                                                     |
| ------------ | ------------------------------------------------------------ |
| offsetLeft   | 获取当前元素到定位父节点的left方向的距离                     |
| offsetTop    | 获取当前元素到定位父节点的top方向的距离                      |
| offsetWidth  | 获取当前元素 width + 左右padding + 左右border-width          |
| offsetHeight | 获取当前元素 height + 上下padding + 上下border-width         |
| clientWidth  | 获取当前元素 width + 左右padding                             |
| clientHeight | 获取当前元素 height + 上下padding                            |
| scrollWidth  | 当前元素内容真实的宽度，内容不超出盒子宽度时为盒子的clientWidth |
| scrollHeight | 当前元素内容真实的高度，内容不超出盒子高度时为盒子的clientHeight |





**createNodeIterator**

那如何使用createNodeIterator对页面中所有元素进行遍历输出呢？

const body = document.getElementsByTagName('body')[0]

  const it = document.createNodeIterator(body)

  let root = it.nextNode()

  while(root) {

​    console.log(root)

​    root = it.nextNode()

  }