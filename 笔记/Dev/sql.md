**SQL 移动端使用**



memory  <-  db

   ^

   ｜

new netData  -> 在内存进行比对，是否需要更新

​			    重载 == , hashcode方法

加载sql 数据之后				

首次刷新  ： displayList = [] ， displayList = newData , update db

首次加载更多： no More Data



没有sql数据：

首次刷新：displayList =newData , insert db

首次加载更多：displayList += newData , insert db

 N*N 的 比对、 I/O数据库太慢了



移动端数据还存在，数据结构更新，导致**sql**需要同步更新，

 不同的版本的还有数据库的兼容性需要考虑。

