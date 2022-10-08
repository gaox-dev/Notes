# **【Homebrew】 安装**



1. 替换国内源 

`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`

2. 错误

`Error: No such file or directory @ rb_sysopen - ~/Library/Caches/Homebrew/.cleaned`

```sh
rm -rf "$(brew --cache)"

brew cleanup
```



3. 常用brew命令

```sh
brew cleanup

brew install

brew update

brew doctor
```



4. CommandLineTools错误

```sh
sudo rm -rf /Library/Developer/CommandLineTools

sudo xcode-select --install

brew doctor

brew update
```

