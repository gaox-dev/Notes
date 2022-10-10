**所有CSS伪类/元素**



在 CSS3 中包含了四种组合方式:

- 后代选择器(以空格 分隔)
- 子元素选择器(以大于 **>** 号分隔）
- 相邻兄弟选择器（以加号 **+** 分隔）
- 普通兄弟选择器（以波浪号 **～** 分隔）





**所有CSS伪类/元素**

| **选择器**                                                   | **示例**              | **示例说明**                                    |
| ------------------------------------------------------------ | --------------------- | ----------------------------------------------- |
| [**:checked**](https://www.runoob.com/cssref/sel-checked.html) | input:checked         | 选择所有选中的表单元素                          |
| [**:disabled**](https://www.runoob.com/css/cssref/sel-disabled.html) | input:disabled        | 选择所有禁用的表单元素                          |
| [**:empty**](https://www.runoob.com/cssref/sel-empty.html)   | p:empty               | 选择所有没有子元素的p元素                       |
| [**:enabled**](https://www.runoob.com/cssref/sel-enable.html) | input:enabled         | 选择所有启用的表单元素                          |
| [**:first-of-type**](https://www.runoob.com/cssref/sel-first-of-type.html) | p:first-of-type       | 选择的每个 p 元素是其父元素的第一个 p 元素      |
| [**:in-range**](https://www.runoob.com/cssref/sel-in-range.html) | input:in-range        | 选择元素指定范围内的值                          |
| [**:invalid**](https://www.runoob.com/cssref/sel-invalid.html) | input:invalid         | 选择所有无效的元素                              |
| [**:last-child**](https://www.runoob.com/cssref/sel-last-child.html) | p:last-child          | 选择所有p元素的最后一个子元素                   |
| [**:last-of-type**](https://www.runoob.com/cssref/sel-last-of-type.html) | p:last-of-type        | 选择每个p元素是其母元素的最后一个p元素          |
| [**:not(selector)**](https://www.runoob.com/cssref/sel-not.html) | :not(p)               | 选择所有p以外的元素                             |
| [**:nth-child(n)**](https://www.runoob.com/cssref/sel-nth-child.html) | p:nth-child(2)        | 选择所有 p 元素的父元素的第二个子元素           |
| [**:nth-last-child(n)**](https://www.runoob.com/cssref/sel-nth-last-child.html) | p:nth-last-child(2)   | 选择所有p元素倒数的第二个子元素                 |
| [**:nth-last-of-type(n)**](https://www.runoob.com/cssref/sel-nth-last-of-type.html) | p:nth-last-of-type(2) | 选择所有p元素倒数的第二个为p的子元素            |
| [**:nth-of-type(n)**](https://www.runoob.com/cssref/sel-nth-of-type.html) | p:nth-of-type(2)      | 选择所有p元素第二个为p的子元素                  |
| [**:only-of-type**](https://www.runoob.com/cssref/sel-only-of-type.html) | p:only-of-type        | 选择所有仅有一个子元素为p的元素                 |
| [**:only-child**](https://www.runoob.com/cssref/sel-only-child.html) | p:only-child          | 选择所有仅有一个子元素的p元素                   |
| [**:optional**](https://www.runoob.com/cssref/sel-optional.html) | input:optional        | 选择没有"required"的元素属性                    |
| [**:out-of-range**](https://www.runoob.com/cssref/sel-out-of-range.html) | input:out-of-range    | 选择指定范围以外的值的元素属性                  |
| [**:read-only**](https://www.runoob.com/cssref/sel-read-only.html) | input:read-only       | 选择只读属性的元素属性                          |
| [**:read-write**](https://www.runoob.com/cssref/sel-read-write.html) | input:read-write      | 选择没有只读属性的元素属性                      |
| [**:required**](https://www.runoob.com/cssref/sel-required.html) | input:required        | 选择有"required"属性指定的元素属性              |
| [**:root**](https://www.runoob.com/cssref/sel-root.html)     | root                  | 选择文档的根元素                                |
| [**:target**](https://www.runoob.com/cssref/sel-target.html) | #news:target          | 选择当前活动#news元素(点击URL包含锚的名字)      |
| [**:valid**](https://www.runoob.com/cssref/sel-valid.html)   | input:valid           | 选择所有有效值的属性                            |
| [**:link**](https://www.runoob.com/cssref/sel-link.html)     | a:link                | 选择所有未访问链接                              |
| [**:visited**](https://www.runoob.com/cssref/sel-visited.html) | a:visited             | 选择所有访问过的链接                            |
| [**:active**](https://www.runoob.com/cssref/sel-active.html) | a:active              | 选择正在活动链接                                |
| [**:hover**](https://www.runoob.com/cssref/sel-hover.html)   | a:hover               | 把鼠标放在链接上的状态                          |
| [**:focus**](https://www.runoob.com/cssref/sel-focus.html)   | input:focus           | 选择元素输入后具有焦点                          |
| [**:first-letter**](https://www.runoob.com/cssref/sel-firstletter.html) | p:first-letter        | 选择每个<p> 元素的第一个字母                    |
| [**:first-line**](https://www.runoob.com/cssref/sel-firstline.html) | p:first-line          | 选择每个<p> 元素的第一行                        |
| [**:first-child**](https://www.runoob.com/cssref/sel-firstchild.html) | p:first-child         | 选择器匹配属于任意元素的第一个子元素的 <p> 元素 |
| [**:before**](https://www.runoob.com/cssref/sel-before.html) | p:before              | 在每个<p>元素之前插入内容                       |
| [**:after**](https://www.runoob.com/cssref/sel-after.html)   | p:after               | 在每个<p>元素之后插入内容                       |
| [**:lang(\*language\*)**](https://www.runoob.com/cssref/sel-lang.html) | p:lang(it)            | 为<p>元素的lang属性选择一个开始值               |