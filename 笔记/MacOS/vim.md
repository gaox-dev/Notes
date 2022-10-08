![vim 键盘图](https://raw.githubusercontent.com/gaox-dev/Pics/main/2022/10/vim%2520%25E9%2594%25AE%25E7%259B%2598%25E5%259B%25BEKUhFd6.jpg)

# **一、vi的模式**

**命令模式（Command mode）**，**输入模式（Insert mode）**和**底线命令模式（Last line mode）**和 **查看模式（ visual model）**

1. 命令模式（普通模式）：光标闪烁；
2. 输入模式：输入【insert 或 i 】 进入；1次【ESC】退出
3. 底线命令模式：输入【 : 】后进入；2次【ESC】退出
4. visual  mode：输入【 v 】后进入；
5. visual line mode：【shift + V】 进入 ，2次【ESC】退出；
6. visual block mode：【ctrl + v】 进入
7. ex模式：输入【 Q 】进入；输入【visual】退回normal



# **二、Command mode**

【h】：左移

【j】：下移

【k】：上移

【l】：右移

【b】：跳跃到单词的首字母

【e】：跳跃到单词的尾字母

【shift + b】：跳跃到行首

【shift + e】 ：跳跃到行尾

【$】：移动光标到行尾

【^】：跳跃到行首

【0】：跳跃到行首

【u】：恢复操作

【Ctrl + r】撤销

【y】：（copy）

【d】：（delete）

【p】：（paste）从下一行开始粘贴

【P】：从当前行开始粘贴

【r】：（replace 替换字母）

【x】：（删除当前的字符）

【i】：（insert 插入光标之前，进入插入模式）

【I】：在目前所在行的第一个非空格符处开始输入

【a】：（append 插入光标之后，进入插入模式）

【A】：从光标所在行的最后一个字符处开始输入

【o】：从光标所在行换行后的下一行开始输入

【O】：从光标所在行换行后的上一行开始输入

【R】：会一直取代光标所在的文字，直到按下 ESC 为止

【c】：（change，删除当前行内容，进入插入模式）

【J】：将下一行和当前行结合成一行

【w】：（word，单词）【s】：（sentence，行，并非一句话）

 【Ctrl + f 】：向下翻页

【 Ctrl + b 】：向上翻页

【zt】：移动光标所在行至屏幕顶部top，【zb】底部bottom，【zz】中间

【shift + 0】 ：回到上次编辑的地方

【 gg】：光标移动返回第一行开始

【G】：光标移动到最后一行开始

【dd】：删除光标所在行，复制到剪切板里

【yy】：复制当前行

【>>】：行首缩进

【ZZ】：保存退出

【ZQ】：不保存退出。

【dw / ds】：删除光标所在单词（句子）

【yw / ds】：复制光标所在单词（句子）

【.】:重复上一个动作

命令前添加数字代表重复操作

复制多行：【“num” yy】向下复制

多次粘贴：【“num” p】

删除多字符：【“num” x】

删除多行：【“num” dd】



# **三、查找**

在normal模式下按下`/`即可进入查找模式，输入要查找的字符串并按下回车。 Vim会跳转到第一个匹配。按下n查找下一个，按下N查找上一个。

Vim查找支持正则表达式，例如`/vim$`  匹配行尾的"vim"。 

需要查找特殊字符需要转义，例如`/vim\$`  匹配"vim$"。

注意查找回车应当用\n，而替换为回车应当用\r（相当于``）。

### **查找当前单词**

在normal模式下按下`*`即可查找光标所在单词（word）， 要求每次出现的前后为空白字符或标点符号。例如当前为foo， 可以匹配foo bar中的foo，但不可匹配foobar中的foo。 这在查找函数名、变量名时非常有用。

按下`g*`即可查找光标所在单词的字符序列，每次出现前后字符无要求。 即foo bar和foobar中的foo均可被匹配到。



### **查找与替换**

:s（substitute）命令用来查找和替换字符串。语法如下：

 :{作用范围}s/{目标}/{替换}/{替换标志}

【:%s/word/replaceWord】全局替换

【:"startNum","endNum"s/word/replaceWord/gc】从startNum到endNum行，查找“word”替换为“replaceWord”，并逐一确认

/gc参数

【:"startNum","endNum"s/word/replaceWord/g】从startNum到endNum行，查找“word”替换为“replaceWord”

```sh
 :s/foo/bar/g

 :%s/foo/bar/g

 :'<,'>s/foo/bar/g

 :5,12s/foo/bar/g

 :.,+2s/foo/bar/g

 :%s/foo/bar

 :%s/foo/bar/i

 \# 等效于模式中的\c（不敏感）或\C（敏感）

 :%s/foo\c/bar

 :%s/foo/bar/gc

 replace with bar (y/n/a/q/l/^E/^Y)?
```



# **修改Vim 配色**

打开`vim`配置文件`Vi .vimrc`

```sh
# 添加代码
syntax on
syntax enable

#取消行号  
set nonu

#显示行号
#set nu 

# 设置
set hlsearch
set ruler
set cursorline
set backspace=2
set ignorecase


set incsearch # 可以在敲键的同时搜索，按下回车把移动光标移动到匹配的词； 按下 Esc 取消搜索。
set wrapscan  # 用来设置到文件尾部后是否重新从文件头开始搜索。
```



# 参考

[**菜鸟vim学习  https://www.runoob.com/linux/linux-vim.html**](https://www.runoob.com/linux/linux-vim.html)

