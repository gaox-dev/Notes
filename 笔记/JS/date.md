**Date**



**1.将时间戳、字符串、其他时间格式转换成日期格式**

var date = new Date(时间戳);

new Date();

new Date(value);

new Date(dateString);

new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

var d1 = new Date("October 13, 1975 11:13:00")





当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 new Date([Date.UTC(...)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)) 和相同参数。



**2.将日期格式转换成时间戳**

time1 = date.getTime();//精确到毫秒

time2 = date.valueOf();//精确到毫秒

time3 = Date.parse(date);//精确到秒



**3.将日期转换为字符串**

date.toLocaleDateString()

date.toLocaleString()



**4.常用方法**

date.getFullYear(); // 获取完整的年份(4位,1970)

date.getMonth(); // 获取月份(0-11,0代表1月,用的时候记得加上1)

date.getDate(); // 获取日(1-31)

date.getTime(); // 获取时间(从1970.1.1开始的毫秒数)

date.getHours(); // 获取小时数(0-23)

date.getMinutes(); // 获取分钟数(0-59)

date.getSeconds(); // 获取秒数(0-59)





**5.10位和13位时间戳到区别**

java和php的时间戳是精确到秒，所以10位；

js的时间戳默认精确到毫秒，所以13位；

所以有的地方进行转换时要乘以1000；



**6.是否使用new 关键字初始化Date的差别**

创建一个新Date对象的唯一方法是通过[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符，例如：let now = new Date();

若将它作为常规函数调用（即不加 [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符），将返回一个字符串，而非 Date 对象。 

let date3 = Date(null)

'Thu Apr 21 2022 10:22:12 GMT+0800 (中国标准时间)'

 let date4 = new Date(null)

Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date