# **将默认 shell 改成 zsh**

`chsh -s /bin/zsh`

## **安装【oh my zsh】**

```sh
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh

cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```



## **修改配置文件**

`vim ~/.zshrc`

## 随机主题

在 ~/.zshrc 文件中设置主题为 random 即可开启随机主题

`ZSH_THEME="random"`

`ZSH_THEME="ys"`

`plugins=(git brew laravel5)`

\# 刷新配置

`source ~/.zshrc`



**常用插件**

```sh
plugins=(其他的插件 zsh-syntax-highlighting)

plugins=(git sudo extract z tmux rand-quote gitignore cp zsh_reload zsh-autosuggestions vscode zsh-syntax-highlighting)
```



## 额外安装

**#安装 zsh-autosuggestions**

git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions



**#安装zsh-syntax-highlighting**

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## **themes**

https://github.com/ohmyzsh/ohmyzsh/wiki/themes



# 插件使用

| plugin名称              | 使用方法                               | 学习资料                                                     |
| ----------------------- | -------------------------------------- | ------------------------------------------------------------ |
| git                     | git alias                              | #查看所有git 缩写命令 cat ~/.oh-my-zsh/plugins/git/git.plugin.zsh |
| z                       | z 路径，z -x 无效路径                  |                                                              |
| sudo                    | 两次<esc> ，将上一条命令用sudo权限执行 |                                                              |
| extract                 | x 压缩包名                             |                                                              |
| tmux                    | ssesion和终端分离                      | https://www.ruanyifeng.com/blog/2019/10/tmux.html            |
| rand-quote              | quote                                  | 名言                                                         |
| zsh_reload              | src                                    | 刷新zsh 配置                                                 |
| vscode                  | vs 文件路径                            |                                                              |
| zsh-autosuggestions     | 语法提示                               | #修改快捷键，～/.zshrc bindkey ',' autosuggest-accept        |
| zsh-syntax-highlighting | shell命令语法高亮                      |                                                              |