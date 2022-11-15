---
title:Git常用命令
date: 2022-04-15 17:13:47
tags: git
---



# 一、process

```sh
#克隆指定分支branchName
git clone -b branchName gitAddress  

#推送到指定远程分支
git push <远程主机名> <本地分支名>:<远程分支名> 
  
#推送新的远程分支
git push --set-upstream origin gaox    
```




+ 直接开发

**以下使用ZSH Git alias命令**

```    sh          
gst   # 查看文件修改
gaa   # 添加所有修改 index
g cz  # 提交，填写commit
gup   # git pull --rebase 合并代码(grbc  #git rebase --continue )
gp    # 推送
```

> + glog  //日志		
>+ glods //带时间和提交人
> + g log  //详细日志

+  新分支开发

**在 master 分支上开始**

```sh
git checkout -b local	  # 创建本地dev分支开始开发
git add .               # 添加到工作区
git commit -m "msg"  		# 或使用commitzen
git pull origin local 	# 拉去最新代码
git pull origin master 	# 拉去最新代码
git checkout master 		# 切回master分支
git merge local	--no-ff	# 合并代码 (使代码合并时产生分叉节点)
git push								# 推送代码
```

**补充：没有Origin Master分支权限时**

```sh
git branch --set-upstream-to=origin/<branch> # 修改远程上传分支
```



# 二、git rebase / merge

- 公共分支使用 merge
- 私有分支使用 rebase

> 使用merge命令合并分支，解决完冲突，执行git add .和git commit -m'fix conflict'。这个时候会产生一个commit。

> 使用rebase命令合并分支，解决完冲突，执行git add .和git rebase --continue，不会产生额外的commit。这样的好处是，‘干净’，分支上不会有无意义的解决分支的commit；坏处，如果合并的分支中存在多个commit，需要重复处理多次冲突。



```sh
git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
    [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
    [--[no-]allow-unrelated-histories]
    [--[no-]rerere-autoupdate] [-m <msg>] [<commit>…?]
git merge --abort
git merge --continue

#不使用快进fast-forward
git merge --no-ff -m "merge with no-ff" dev
```



命令可以压缩合并多次提交

> PR前应当操作 rebase -i 

```sh
git rebase -i [startpoint] [endpoint]
# 合并最近的两次提交
git rebase -i HEAD~2
```



```sh
git reflog #首先执行git reflog查看本地记录

git reset --hard 9b2d32b605 #回退版本
```



# 三、git commit

```sh
git commit -m “message” 【gcmsg】
git commit -a -m “massage”【gcam】

#在不增加一个新的commit-id的情况下将新修改的代码追加到前一次
git commit --amend --no-edit【gcn!】
#需要强制推送到远程
git push -f   【gpf!】
```

1、手动填写commit规范

> 格式为 Type(scope):detail

Type:

1. feat: 新功能（feature）
2. fix: 修补 bug
3. docs: 文档
4. style: 样式
5. refactor: 重构
6. test: 增加测试
7. chore: 构建过程或辅助工具的变动
8. wip: work in progress

Scope:（选填）

​	改动影响的文件或者模块

2、安装commitizen

辅助生成 commit msg 规范安装

```shell
sudo npm install -g commitizen
sudo npm install -g cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

---


# 四、git diff

```sh
#0 查看最近一次提交的差异
git diff HEAD～1--stat

#1.比较两次commit提交之后的差异：
git diff hash1 hash2 --stat

#2.具体查看两次commit提交之后某文件的差异：
git diff hash1 hash2 -- 文件名

#3.比较两个分支的所有有差异的文件的详细差异：
git diff branch1 branch2

#4.比较两个分支的指定文件的详细差异
git diff branch1 branch2 <filePathName>

#5.比较两个分支的所有有差异的文件列表
git diff branch1 branch2 --stat

git diff 					[gd]		#比较的是 工作区和暂存区 
git diff --cached [gdca]	#比较的是 暂存区和本地仓库
```



# 五、git stash

`stash`命令可用于临时保存和回复修改，**可跨分支**。


```sh
#保存，save为可选项，message为本次保存的注释
git stash [save] -m 'message'
#所有保存的记录列表
git stash list
#恢复，num是可选项，只能恢复一次
git stash pop stash@{num}
#恢复，num`是可选项，可恢复多次
git stash apply stash@{num}
#删除某个保存，`num`是可选项，
git stash drop stash@{num}
#删除所有保存
git stash clear
```




# 六、git reset

```sh
#放弃工作区代码
git checkout -- filepathname  #单个文件
git checkout .  #放弃所以的文件修改

#放弃缓存区代码
git reset HEAD filepathname  #单个文件
git reset HEAD . 						 #放弃所以的文件修改

#本地仓库回滚
git reset --hard HEAD         	#来回退到上一次commit的状态。
git reset --hard HEAD～3        #来回退到前三次commit的状态。
git reset --hard dfd749b        #此命令可以用来回退到任意版本
git reset --hard origin/master  #放弃本地修改
git reset --soft origin/master  #放弃本地修改，添加到staged
git reset --mixed origin/master  #放弃本地修改，添加到workspace
```



# 七、git branch

```sh
git branch -a  								 #查看所有分支(gba)
git push origin -d ios         #删除远程分支ios
git branch -D ios        			 #删除本地分支ios (gbd ios)
git checkout -b hotfix				 #新建并切换到新分支hotfix(gcb hotfix)
git switch -c hotfix						
git push origin <BranchName>     #推送本地分支，远程新分支或指定分支
git push -f origin <BranchName>  #强推本地分支
git branch --set-upstream-to=origin/BranchName #修改上传地址
git branch --unset-upstream    # 去掉上传地址
git branch -m 原分支名 新分支名   # 如果对于分支不是当前分支，可以使用下面代码
git branch -m 新分支名称         # 如果是当前，那么可以使用加上新名字
```



# 八、git remote

```sh
git remote set-url origin <url> #修改origin仓库地址
git remote add <远程主机名> <url> #添加远程地址的
git remote -v #查看本地添加了哪些远程地址
git remote remove origin #删除本地指定的远程地址
git remote update origin --prune #若要更新远程分支的本地列表
git remote prune origin #修剪远程分支
```



# 九、git config

```sh
git config --global --list #查看全局配置

#修改分为两种情况：

#1.user.name和user.email的值为空
git config --global user.name "GaoX"
git config --global user.email "gaoxiong@cestc.cn"

#2.user.name和user.email修改
git config --global --replace-all user.name "GaoX"`
git config --global --replace-all user.email "gaoxiong@cestc.cn"

#设置alias
git config --global alias.<shortcut> "<String>"
```



# 十、.gitignore

+ 配置.gitignore文件来忽略我们不想提交到git上的文件。

+ 忽略已经被tracking过的文件

```sh
 //（ignoreFile就是你想忽略的文件），让git不再tracking这些文件。 
 git rm -r --cached  ios/Flutter/.last_build_id
 git rm -r --cached  android/gradle/wrapper/gradle-wrapper.properties
```



# 十一、git cherry-pick

+ 将指定的 commit 应用于当前分支。

```sh
git cherry-pick <commitHash>     # 合并提交

git cherry-pick feature				   # 上面代码表示将`feature`分支的最近一次提交，转移到当前分支
```

+ 转移多个提交

```sh
git cherry-pick <HashA> <HashB>	#两个提交

git cherry-pick A..B	 #(A,B]的所有提交。提交 A 必须早于提交 B，否则命令将失败，但不会报错。

git cherry-pick A^..B  #[A,B]的所有提交
```

+ git cherry-pick命令的常用配置项如下。

**（1）`-e`，`--edit`**

打开外部编辑器，编辑提交信息。

**（2）`-n`，`--no-commit`**

只更新工作区和暂存区，不产生新的提交。

**（3）`-x`**

在提交信息的末尾追加一行`(cherry picked from commit ...)`，方便以后查到这个提交是如何产生的。

**（4）`-s`，`--signoff`**

在提交信息的末尾追加一行操作者的签名，表示是谁进行了这个操作。

+ 转移到另一个代码库

> Cherry pick 也支持转移另一个代码库的提交，方法是先将该库加为远程仓库。

```sh
 git remote add <target> <gitUrl> 	  #添加了一个远程仓库`target`。
 git fetch <target>										#将远程代码仓库抓取到本地。
 git log <target>/<branch>							#检查一下要从远程仓库转移的提交，获取它的哈希值。
 git cherry-pick <commitHash>
```



#  十二、git log

+ log 样式

```sh
git shortlog       #分别显示所有人的提交信息
git log --oneline  #单行模式
git log --decorate #详细信息
git log --graph    #分支结构
git log --stat		 #代码变动行数
git log -p				 #代码变动详细diff
git log --relative-date #使用较短的相对时间显示
git log --abbrev-commit #仅显示SHA-1的前几个字符，而非所有的40个字符

git log --pretty=oneline #使用其他格式显示历史提交信息，可选项有：oneline,short,medium,full,fuller,email,raw以及format:<string>,默认为medium

#%cn、%h和%cd这三种占位符会被分别替换为作者名字、缩略标识和提交日期
git log --pretty=fuller:"%cn committed %h on %cd" #自定义样式
git log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%ae>%Creset %C(bold green)%cr (%ci)' --abbrev-commit
```

>控制显示的记录格式，如：
>
>1. %H 提交对象（commit）的完整哈希字串
>2. %h 提交对象的简短哈希字串
>3. %T 树对象（tree）的完整哈希字串
>4. %t 树对象的简短哈希字串
>5. %P 父对象（parent）的完整哈希字串
>6. %p 父对象的简短哈希字串
>7. %an 作者（author）的名字
>8. %ae 作者的电子邮件地址
>9. %ad 作者修订日期（可以用 -date= 选项定制格式）
>10. %ar 作者修订日期，按多久以前的方式显示
>11. %cn 提交者(committer)的名字
>12. %ce 提交者的电子邮件地址
>13. %cd 提交日期（可以用 -date= 选项定制格式）
> 14. %cr 提交日期，按多久以前的方式显示
> 15. %s 提交说明

+ log 筛选参数

```sh
  git log -<n>        #显示前n条log
  git log --since="2021-11-25"  #按时间--until=、 --after=、 --before=（"1 week ago"和”yesterday"）
  git log --author="<GaoX>"
  git log --grep="<fix>" -i  #按commit， -i忽略大小写
  git log --<dev>     			 #按分支
  git log --no-merges   		 #去掉合并
  git log --<tag>  					 #<tag>之前的提交
  git log --<tag>..  				 #<tag>之后的提交
```

+ 代码统计

```sh
#1、统计某人代码提交量
git log --author="gaox" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -;
#2、统计所有人代码提交量（指定统计提交文件类型）
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
#3、统计某时间范围内的代码提交量
git log --author=gaoxiong --since=2021-11-01 --until=2021-11-30 --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
#4、查看git提交前10名
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 10
#5、提交数统计
git log --oneline | wc -l
```



# 十三、git tag

```sh
#在 Git 中列出已有的标签非常简单，只需要输入 git tag （可带上可选的 -l 选项 --list）
git tag
git tag -l "v1.8.5*"  #如果只对 1.8.5 系列感兴趣
git tag -a v1.4 -m "my version 1.4" #附注tag
git tag v1.4-lw     	#轻量tag
git show v1.4					#查看标签信息和与之对应的提交信息
git push origin v1.5  #推送tag
git push origin --tags #批量推送
git tag -d v1.4-lw    #删除本地tag 
git push origin --delete <tagname> #删除远程tags
```



# 十四、git blame

```sh
#查看某个文件的每一行内容由谁所写
git blame 文件名 -L a,b
#如果只查文件中某一部分由谁所写
git blame 文件名 | grep "查找词"
#有时你想搜索和新增或删除某行代码相关的commit
git log -S "Hello,World!"
#如果你想使用正则表达式去匹配而不是字符串, 那么你可以使用-G代替-S.
git log -G 
```



# 十五、其他情况

## 1、直接pull主机的分支，覆盖本地

```sh
git fetch <远程主机名> <分支名>         # 获取最新代码  生成FETCH_HEAD

git reset --hard <远程主机名>/<分支名>  # 回滚到最新的代码

git fetch --all && git reset --hard origin/master && git pull
```

## 2、HEAD detached

```sh
#也可以直接脱离分支指向当前节点
git checkout 节点哈希值
git checkout --detach

#追加到之前的提交，不新增加一个节点。
git add .
git commit --amend (追加提交)

#我当前所处的位置是在HEAD detached from bdcfe3d8上
git branch temp bdcfe3d8
git checkout master
git merge temp
git branch -d temp

```

## 3、Another git process seems to be running in this repository

> Another git process seems to be running in this repository, e.g.
> an editor opened by 'git commit'. Please make sure all processes
> are terminated then try again. If it still fails, a git process
> may have crashed in this repository earlier:
> remove the file manually to continue.

```sh
# 删除./.git/index.lock文件
rm -f ./.git/index.lock
```



## 4、安装更新git

```sh
git --version  

brew install git
```



## 5、[How to get rid of "would clobber existing tag"](https://stackoverflow.com/questions/58031165/how-to-get-rid-of-would-clobber-existing-tag)

```sh
git fetch --tags -f
```

